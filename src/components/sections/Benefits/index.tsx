/** @format */
'use client';
import { useEffect, useState } from 'react';
import { useQuerySubscription } from 'react-datocms';
import ContentBenefits from './ContentBenefits';

export default function Benefits({ subscription }: { subscription: any }) {
	const [hydrated, setHydrated] = useState(false);

	useEffect(() => setHydrated(true), []);
	const { query, initialData, token } = subscription;

	const { data, error, status } = useQuerySubscription({
		query: query,
		enabled: true,
		token,
		initialData,
	});
	return (
		hydrated && (
			<div className='w-full h-full text-zinc-900 py-20'>
				<ContentBenefits data={data}></ContentBenefits>
			</div>
		)
	);
}
