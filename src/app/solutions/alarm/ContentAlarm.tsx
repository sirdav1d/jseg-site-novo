/** @format */

import Container from '@/components/Container';
import HeroServices from '@/components/HeroServices';
import Benefits from '@/components/sections/Benefits';
import Feature from '@/components/sections/Feature';
import Ratings from '@/components/sections/Ratings';
import ServicesList from '@/components/sections/ServicesList';
import { DataAlarm } from '@/lib/types';
import React from 'react';

export default function ContentAlarm({ data }: { data: DataAlarm }) {
	return (
		<div className='text-zinc-900 h-full min-h-screen w-full'>
			<Container>
				<HeroServices data={data.allAlarmpages[0]} />
				<ServicesList data={data.allAlarmpages[0]} />
				<Feature data={data.allAlarmpages[0]} />
				<Ratings data={data.allAlarmpages[0]} />
				<Benefits data={data.allAlarmpages[0]} />
			</Container>
		</div>
	);
}
