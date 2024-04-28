/** @format */

import Container from '@/components/Container';
import Divider from '@/components/Divider';
import HeroServices from '@/components/HeroServices';
import Benefits from '@/components/sections/Benefits';
import Feature from '@/components/sections/Feature';
import Ratings from '@/components/sections/Ratings';
import ServicesList from '@/components/sections/ServicesList';
import { DataCFTV } from '@/lib/types';
import React from 'react';

export default function ContentCFTV({ data }: { data: DataCFTV }) {
	return (
		<>
			<HeroServices data={data.allCftvpages[0]} />
			<Divider />
			<ServicesList data={data.allCftvpages[0]} />
			<Divider />
			<Feature data={data.allCftvpages[0]} />
			<Divider />
			<Ratings data={data.allCftvpages[0]} />
			<Benefits data={data.allCftvpages[0]} />
		</>
	);
}
