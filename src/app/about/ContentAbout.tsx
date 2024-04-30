/** @format */

'use client';

import Divider from '@/components/Divider';
import HeroPages from '@/components/HeroPages';
import Culture from '@/components/sections/Culture';
import React, { useEffect, useState } from 'react';
import { useQuerySubscription } from 'react-datocms';
import Timeline from './Timeline';
import Ratings from '@/components/sections/Ratings';
import Benefits from '@/components/sections/Benefits';

export default function ContentAbout({ subscription }: { subscription: any }) {
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
			<>
				<HeroPages
					heading={data.allHomes[0].headlineabout}
					subheadline={data.allHomes[0].subheadlineabout}
					anchor={'#culture'}
				/>
				<Culture />
				<Divider />
				<Timeline />
				<Divider />
				<Ratings data={data.allHomes[0]} />
				<Benefits data={data.allHomes[0]} />
			</>
		)
	);
}
