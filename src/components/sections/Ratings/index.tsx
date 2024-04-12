/** @format */
'use client';

import { useEffect, useState } from 'react';
import { useQuerySubscription } from 'react-datocms';
import ContentRatings from './ContentRatings';

export default function Ratings({ subscription }: { subscription: any }) {
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
			<div className='w-full h-full py-10 text-zinc-900'>
				<ContentRatings data={data}></ContentRatings>
			</div>
		)
	);
}
