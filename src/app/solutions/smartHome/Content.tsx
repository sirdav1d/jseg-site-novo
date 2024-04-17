/** @format */

import Container from '@/components/Container';
import HeroServices from '@/components/HeroServices';
import { DataService } from '@/lib/types';
import React from 'react';

export default function Content({ data }: { data: DataService }) {
	return (
		<div className='text-zinc-900 h-screen w-full'>
			<Container>
				<HeroServices data={data.allServicepages[0]} />
			</Container>
		</div>
	);
}
