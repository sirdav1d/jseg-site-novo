/** @format */
'use client';

import { useEffect, useState } from 'react';
import { useQuerySubscription } from 'react-datocms';
import Divider from '../Divider';
import Benefits from '../sections/Benefits';
import FeatureComponent from '../sections/Feature/Feature';
import HeroSection from '../sections/Hero';
import Ratings from '../sections/Ratings';
import ServicesList from '../sections/ServicesList';

export default function ContentHome({ subscription }: { subscription: any }) {
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
				<HeroSection data={data.allHomes[0]}></HeroSection>
				<ServicesList data={data.allHomes[0]} />
				<Divider />
				<FeatureComponent
					title={data.allHomes[0].titlehomefeat}
					description={data.allHomes[0].descriptionhomefeat}
					features={data.allHomes[0].featurehome}
				/>
				<Divider />
				<Ratings data={data.allHomes[0]} />
				<Benefits data={data.allHomes[0]} />
			</>
		)
	);
}
