/** @format */
'use client';
import { useEffect, useState } from 'react';
import { useQuerySubscription } from 'react-datocms';
import ContentFeature from './ContentFeature';

export default function Feature({ subscription }: { subscription: any }) {
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
			<div className='w-full h-full min-h-[90vh] text-zinc-900 py-20'>
				<ContentFeature data={data}></ContentFeature>
			</div>
		)
	);
}