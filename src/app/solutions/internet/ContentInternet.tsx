/** @format */

import Container from '@/components/Container';
import HeroServices from '@/components/HeroServices';
import ServicesList from '@/components/sections/ServicesList';
import { DataInternet } from '@/lib/types';
import React from 'react';

export default function ContentInternet({ data }: { data: DataInternet }) {
	return (
		<div className='text-zinc-900 h-full min-h-screen w-full'>
			<Container>
				<HeroServices data={data.allInternetpages[0]} />
				<ServicesList data={data.allInternetpages[0]} />
			</Container>
		</div>
	);
}
