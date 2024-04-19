/** @format */

import { Data } from '@/lib/types';
import React from 'react';
import HeroSection from '../sections/Hero';
import ServicesList from '../sections/ServicesList';
import Feature from '../sections/Feature';
import Ratings from '../sections/Ratings';
import Benefits from '../sections/Benefits';

export default function ContentHome({ data }: { data: Data }) {
	return (
		<>
			<HeroSection data={data.allHomepages[0]}></HeroSection>
			<ServicesList data={data.allHomepages[0]} />
			{/* <Feature data={data.allHomepages[0]} />
			<Ratings data={data.allHomepages[0]} />
			<Benefits data={data.allHomepages[0]} /> */}
		</>
	);
}
