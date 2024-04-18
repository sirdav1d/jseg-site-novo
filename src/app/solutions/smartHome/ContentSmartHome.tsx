/** @format */

import Container from '@/components/Container';
import HeroServices from '@/components/HeroServices';
import { DataSmartHome } from '@/lib/types';
import React from 'react';

export default function ContentSmartHome({ data }: { data: DataSmartHome }) {
	return (
		<div className='text-zinc-900 h-full min-h-screen w-full'>
			<Container>
				<HeroServices data={data.allSmarthomepages[0]} />
			</Container>
		</div>
	);
}
