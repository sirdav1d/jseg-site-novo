/** @format */

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import BrainCircuit from '@/assets/icons/brainCircuit';

interface CardServiceProps {
	title: string;
	description: string;
	icon: JSX.Element;
}

export default function CardService(props: CardServiceProps) {
	return (
		<div>
			<Card className='w-full xl:max-w-[364px] h-full '>
				<CardHeader>
					<CardTitle className='flex flex-col items-start gap-3 text-xl bg-cardColor text-transparent bg-clip-text bg-contain font-extrabold w-fit'>
						{props.icon}
						{props.title}
					</CardTitle>
				</CardHeader>
				<CardContent>
					<p className='prose prose-sm'>{props.description}</p>
				</CardContent>
			</Card>
		</div>
	);
}
