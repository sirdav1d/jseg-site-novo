/** @format */

import Container from '@/components/Container';
import HeroServices from '@/components/HeroServices';
import ServicesList from '@/components/sections/ServicesList';
import { DataAccess } from '@/lib/types';
import React from 'react';

export default function ContentAccess({ data }: { data: DataAccess }) {
	return (
		<div className='text-zinc-900 h-full min-h-screen w-full'>
			<Container>
				<HeroServices data={data.allAccesspages[0]} />
				<ServicesList data={data.allAccesspages[0]} />
			</Container>
		</div>
	);
}
