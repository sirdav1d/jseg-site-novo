/** @format */
'use client';

import { useEffect, useState } from 'react';
import { useQuerySubscription } from 'react-datocms';
import ContentHero from './ContentHero';

export default function HeroSection({ subscription }: { subscription: any }) {
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
			<div className='w-full h-[90vh] lg:h-full text-zinc-900'>
				<ContentHero data={data}></ContentHero>
			</div>
		)
	);
}
