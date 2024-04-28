/** @format */

import Container from '@/components/Container';
import { MotionSpan } from '@/components/MotionComponents';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface HeroPagesProps {
	heading: string;
	subheadline: string;
	anchor: string;
}

export default function HeroPages(props: HeroPagesProps) {
	return (
		<div className=' w-full h-[90vh] relative flex items-center justify-center'>
			<span className='h-16 w-44 hover:translate-x-40 transition-all delay-100 duration-300 ease-linear lg:w-[400px] rounded-full blur-[120px] bg-brand-green-500  absolute top-20 lg:top-60 left-0  lg:left-28 -rotate-45'></span>
			<span className='h-16 w-40 delay-100 hover:-translate-y-40 transition-all duration-300 ease-linear lg:w-96 blur-[120px] rounded-full bg-brand-green-500 absolute bottom-40 lg:bottom-80 right-0 lg:right-1/4 rotate-45'></span>

			<Container>
				<div className='h-full flex flex-col xl:gap-20 gap-10 items-center mt-20 lg:justify-center lg:mt-0 z-50'>
					<a href={props.anchor}>
						<div className='absolute bottom-20  lg:bottom-10 h-12 w-6 border-2 rounded-full border-brand-green-500 bg-transparent'>
							<MotionSpan
								animate={{ y: 24 }}
								initial={{ y: 0 }}
								transition={{
									type: 'spring',
									repeatType: 'reverse',
									repeat: Infinity,
								}}
								className='bg-brand-green-500 flex w-4 h-4 rounded-full z-10 m-auto'></MotionSpan>
						</div>
					</a>
					<div className='flex flex-col gap-5 items-center justify-center'>
						<h2 className='text-zinc-900 font-extrabold w-full md:max-w-xs lg:max-w-2xl text-center xl:text-4xl text-3xl'>
							{props.heading}
						</h2>
						<p className='xl:prose-lg prose w-full xl:max-w-3xl text-center drop-shadow'>
							{props.subheadline}
						</p>
					</div>
					<a href={'/contact#formComponent'}>
						<Button
							variant={'brand'}
							className='group text-xl py-4 pl-5 pr-3'>
							Solicitar Orçamento
							<ChevronRight
								size={28}
								className='group-hover:translate-x-2 transition-all duration-200 ease-linear'
							/>
						</Button>
					</a>
				</div>
			</Container>
		</div>
	);
}
