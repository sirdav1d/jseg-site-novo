/** @format */

import Container from '@/components/Container';
import { MotionSpan } from '@/components/MotionComponents';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface HeroContactProps {
	heading: string;
	subheadline: string;
}

export default function HeroContact(props: HeroContactProps) {
	return (
		<div className=' w-full h-[90vh] relative flex items-center justify-center'>
			<span className='h-16 w-44 hover:translate-x-40 delay-200 transition-all duration-300 ease-linear lg:w-[400px] rounded-full blur-[120px] bg-brand-green-500  absolute top-40  lg:top-60 left-0  lg:left-28 -rotate-45'></span>
			<span className='h-16 w-40 hover:-translate-y-40 transition-all duration-300 ease-linear lg:w-96 blur-[120px] rounded-full bg-brand-green-500 absolute bottom-80 right-0 lg:right-1/4 rotate-45'></span>

			<Container>
				<div className='h-full flex flex-col gap-20 justify-center items-center z-50'>
					<a href='#solutions'>
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
						<h2 className='text-zinc-900 font-extrabold max-w-xs lg:max-w-2xl text-center xl:text-4xl text-3xl'>
							{props.heading}
						</h2>
						<p className='xl:prose-lg prose max-w-3xl text-center drop-shadow'>
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
