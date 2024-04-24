/** @format */

import Container from '@/components/Container';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import bgImage from '@/assets/images/sean-pollock-PhYq704ffdA-unsplash.jpg';

interface HeroAboutProps {
	heading: string;
	subheadline: string;
}

export default function HeroAbout(props: HeroAboutProps) {
	return (
		<div className=' bg-brand-green-100/30 w-full h-[90vh] bg-grid-brand-green-500/[0.1] relative flex items-center justify-center'>
			<div className='-z-10 w-full h-full absolute pointer-events-none inset-0 flex items-center justify-center  bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,green)]'></div>
			<Image
				className='grayscale opacity-20 absolute object-cover w-full h-full'
				src={bgImage}
				width={1440}
				height={770}
				alt='Prédios'></Image>
			<Container>
				<div className='h-full flex flex-col gap-20 justify-center items-center z-50 border'>
					<div className='flex flex-col gap-5 items-center justify-center'>
						<h2 className='text-zinc-900 font-extrabold max-w-xs lg:max-w-2xl text-center xl:text-4xl text-3xl'>
							{props.heading}
						</h2>
						<p className='xl:prose-lg prose font-normal max-w-xl text-center'>
							{props.subheadline}
						</p>
					</div>
					<Link href={'/contact'}>
						<Button
							variant={'brand'}
							className='group text-xl py-4 pl-5 pr-3'>
							Solicitar Orçamento
							<ChevronRight
								size={28}
								className='group-hover:translate-x-2 transition-all duration-200 ease-linear'
							/>
						</Button>
					</Link>
				</div>
			</Container>
		</div>
	);
}
