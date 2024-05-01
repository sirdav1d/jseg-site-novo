/** @format */

import React from 'react';
import { Image as ResponsiveImage } from 'react-datocms';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface TestimonyProps {
	text: string;
	name: string;
	avatar: any;
}

export default function Testimony(props: TestimonyProps) {
	return (
		<Card className=' p-4 pb-0 pt-8 max-w-[368px] w-full mx-auto '>
			<CardContent className='flex flex-col gap-5 justify-between items-start aspect-square '>
				<div className='flex gap-1 text-brand-green-500'>
					<Star />
					<Star />
					<Star />
					<Star />
					<Star />
				</div>
				<p className='prose text-start max-w-sm'>{props.text}</p>
				<div className=' flex w-full justify-start items-center gap-5'>
					<div className='w-16'>
						<ResponsiveImage data={props.avatar} />
					</div>
					<h3 className='text-lg font-bold'>{props.name}</h3>
				</div>
			</CardContent>
		</Card>
	);
}
