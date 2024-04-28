/** @format */

import Container from '@/components/Container';
import Divider from '@/components/Divider';
import HeroServices from '@/components/HeroServices';
import Benefits from '@/components/sections/Benefits';
import Feature from '@/components/sections/Feature';
import Ratings from '@/components/sections/Ratings';
import ServicesList from '@/components/sections/ServicesList';
import { DataAlarm } from '@/lib/types';
import React from 'react';

export default function ContentAlarm({ data }: { data: DataAlarm }) {
	return (
		<>
			
				<HeroServices data={data.allAlarmpages[0]} />
				<Divider />
				<ServicesList data={data.allAlarmpages[0]} />
				<Divider />
				<Feature data={data.allAlarmpages[0]} />
				<Divider />
				<Ratings data={data.allAlarmpages[0]} />
				<Benefits data={data.allAlarmpages[0]} />
			
		</>
	);
}
