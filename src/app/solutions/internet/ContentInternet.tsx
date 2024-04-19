/** @format */

import Container from '@/components/Container';
import HeroServices from '@/components/HeroServices';
import Benefits from '@/components/sections/Benefits';
import Feature from '@/components/sections/Feature';
import Ratings from '@/components/sections/Ratings';
import ServicesList from '@/components/sections/ServicesList';
import { DataInternet } from '@/lib/types';
import React from 'react';

export default function ContentInternet({ data }: { data: DataInternet }) {
	return (
		<div className='text-zinc-900 h-full min-h-screen w-full'>
			<Container>
				<HeroServices data={data.allInternetpages[0]} />
				<ServicesList data={data.allInternetpages[0]} />
				<Feature data={data.allInternetpages[0]} />
				<Ratings data={data.allInternetpages[0]} />
				<Benefits data={data.allInternetpages[0]} />
			</Container>
		</div>
	);
}
