/** @format */

import Container from '@/components/Container';
import HeroServices from '@/components/HeroServices';
import { DataService } from '@/lib/types';
import React from 'react';

export default function ContentPhone({ data }: { data: DataService }) {
	return (
		<div className='text-zinc-900 h-full min-h-screen w-full'>
			<Container>
				<HeroServices data={data.allServicepages[4]} />
			</Container>
		</div>
	);
}