/** @format */

import Container from '@/components/Container';
import HeroServices from '@/components/HeroServices';
import ServicesList from '@/components/sections/ServicesList';
import { DataAlarm } from '@/lib/types';
import React from 'react';

export default function ContentAlarm({ data }: { data: DataAlarm }) {
	return (
		<div className='text-zinc-900 h-full min-h-screen w-full'>
			<Container>
				<HeroServices data={data.allAlarmpages[0]} />
				<ServicesList data={data.allAlarmpages[0]} />
			</Container>
		</div>
	);
}
