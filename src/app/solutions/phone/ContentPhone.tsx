/** @format */
'use client';

import Divider from '@/components/Divider';
import HeroServices from '@/components/HeroServices';
import Benefits from '@/components/sections/Benefits';
import FeatureComponent from '@/components/sections/Feature/Feature';
import Ratings from '@/components/sections/Ratings';
import ServicesList from '@/components/sections/ServicesList';
import { useState, useEffect } from 'react';
import { useQuerySubscription } from 'react-datocms';

export default function ContentPhone({ subscription }: { subscription: any }) {
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
				<HeroServices data={data.allHomes[0].heroservices[4]} />
				<FeatureComponent
					title={data.allHomes[0].titletel}
					description={data.allHomes[0].descriptiontel}
					features={data.allHomes[0].featuretel}
				/>
				<Ratings data={data.allHomes[0]} />
				<Divider />
				<Benefits data={data.allHomes[0]} />
			</>
		)
	);
}
