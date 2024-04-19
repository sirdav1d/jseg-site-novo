/** @format */

import Container from '@/components/Container';
import HeroServices from '@/components/HeroServices';
import Benefits from '@/components/sections/Benefits';
import Feature from '@/components/sections/Feature';
import Ratings from '@/components/sections/Ratings';
import ServicesList from '@/components/sections/ServicesList';
import { DataCFTV } from '@/lib/types';
import React from 'react';

export default function ContentCFTV({ data }: { data: DataCFTV }) {
	return (
		<div className='text-zinc-900 h-full min-h-screen w-full'>
			<Container>
				<HeroServices data={data.allCftvpages[0]} />
				<ServicesList data={data.allCftvpages[0]} />
				<Feature data={data.allCftvpages[0]} />
				<Ratings data={data.allCftvpages[0]} />
				<Benefits data={data.allCftvpages[0]} />
			</Container>
		</div>
	);
}
