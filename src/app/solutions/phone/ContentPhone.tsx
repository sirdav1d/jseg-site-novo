/** @format */

import Container from '@/components/Container';
import Divider from '@/components/Divider';
import HeroServices from '@/components/HeroServices';
import Benefits from '@/components/sections/Benefits';
import Feature from '@/components/sections/Feature';
import Ratings from '@/components/sections/Ratings';
import ServicesList from '@/components/sections/ServicesList';
import { DataPhone } from '@/lib/types';
import React from 'react';

export default function ContentPhone({ data }: { data: DataPhone }) {
	return (
		<div className='text-zinc-900 h-full min-h-screen w-full'>
			<Container>
				<HeroServices data={data.allPhonepages[0]} />
				<Divider />
				<ServicesList data={data.allPhonepages[0]} />
				<Divider />
				<Feature data={data.allPhonepages[0]} />
				<Ratings data={data.allPhonepages[0]} />
				<Divider />
				<Benefits data={data.allPhonepages[0]} />
			</Container>
		</div>
	);
}
