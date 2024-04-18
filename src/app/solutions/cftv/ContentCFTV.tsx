/** @format */

import Container from '@/components/Container';
import HeroServices from '@/components/HeroServices';
import { DataCFTV } from '@/lib/types';
import React from 'react';

export default function ContentCFTV({ data }: { data: DataCFTV }) {
	return (
		<div className='text-zinc-900 h-full min-h-screen w-full'>
			<Container>
				<HeroServices data={data.allCftvpages[0]} />
			</Container>
		</div>
	);
}
