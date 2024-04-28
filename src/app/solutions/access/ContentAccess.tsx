/** @format */

import Container from '@/components/Container';
import Divider from '@/components/Divider';
import HeroServices from '@/components/HeroServices';
import Benefits from '@/components/sections/Benefits';
import Feature from '@/components/sections/Feature';
import Ratings from '@/components/sections/Ratings';
import ServicesList from '@/components/sections/ServicesList';
import { DataAccess } from '@/lib/types';
import React from 'react';

export default function ContentAccess({ data }: { data: DataAccess }) {
	return (
		<>
			
				<HeroServices data={data.allAccesspages[0]} />
				<Divider />
				<ServicesList data={data.allAccesspages[0]} />
				<Divider />
				<Feature data={data.allAccesspages[0]} />
				<Divider />
				<Ratings data={data.allAccesspages[0]} />
				<Benefits data={data.allAccesspages[0]} />
			
		</>
	);
}
