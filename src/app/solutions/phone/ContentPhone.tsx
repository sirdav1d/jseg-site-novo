/** @format */

import Container from '@/components/Container';
import HeroServices from '@/components/HeroServices';
import { DataPhone } from '@/lib/types';
import React from 'react';

export default function ContentPhone({ data }: { data: DataPhone }) {
	return (
		<div className='text-zinc-900 h-full min-h-screen w-full'>
			<Container>
				<HeroServices data={data.allPhonepages[0]} />
			</Container>
		</div>
	);
}
