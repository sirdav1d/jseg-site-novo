/** @format */

'use client';

import Divider from '@/components/Divider';
import HeroPages from '@/components/HeroPages';
import Benefits from '@/components/sections/Benefits';
import ContactInfo from '@/components/sections/ContactInfo';
import Ratings from '@/components/sections/Ratings';
import { useEffect, useState } from 'react';
import { useQuerySubscription } from 'react-datocms';

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
					heading={data.allHomes[0].headlinecontact}
					subheadline={data.allHomes[0].subheadlinecontact}
					anchor={'#formComponent'}
				/>
				<ContactInfo />
			</>
		)
	);
}
