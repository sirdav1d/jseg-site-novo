/** @format */

import Container from '@/components/Container';
import HeroServices from '@/components/HeroServices';
import Benefits from '@/components/sections/Benefits';
import Feature from '@/components/sections/Feature';
import Ratings from '@/components/sections/Ratings';
import ServicesList from '@/components/sections/ServicesList';
import { DataAccess } from '@/lib/types';
import React from 'react';

export default function ContentAccess({ data }: { data: DataAccess }) {
	return (
		<div className='text-zinc-900 h-full min-h-screen w-full'>
			<Container>
				<HeroServices data={data.allAccesspages[0]} />
				<ServicesList data={data.allAccesspages[0]} />
				<Feature data={data.allAccesspages[0]} />
				<Ratings data={data.allAccesspages[0]} />
				<Benefits data={data.allAccesspages[0]} />
			</Container>
		</div>
	);
}
