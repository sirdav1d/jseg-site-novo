/** @format */

import { SlideRight } from '@/animations/SlideRight';
import Container from '@/components/Container';
import { MotionDiv } from '@/components/MotionComponents';
import { Button } from '@/components/ui/button';
import { AllHome } from '@/lib/types';
import { ChevronRight, Plus } from 'lucide-react';
import { Image as ResponsiveImage } from 'react-datocms';
import HeroTypeAnimation from './HeroTypeAnimation';
import NumbersAnimatedHero from './NumbersAnimatedhero';

export default function HeroSection({ data }: { data: AllHome }) {
	return (
		<div className='h-[90vh] w-full py-10 flex items-center justify-center'>
			<Container>
				<>
					<div className='h-full'>
						<div className='h-full'>
							<div className='flex flex-col h-full justify-between gap-5 py-5'>
								<div className='flex flex-col gap-5 align-middle my-auto'>
									<h1 className='text-zinc-900 font-extrabold  max-w-xs lg:max-w-lg text-4xl '>
										{data.heading}&nbsp;
										<span className='text-brand-green-500'>
											<HeroTypeAnimation
												words={[data.keyword01, data.keyword02, data.keyword03]}
											/>
										</span>
									</h1>
									<p className='text-base prose font-normal max-w-2xl mb-10'>
										{data.subheadline}
									</p>
									<Button
										variant={'brand'}
										className='group text-xl py-4 pl-5 pr-3'>
										Solicitar Orçamento
										<ChevronRight
											size={28}
											className='group-hover:translate-x-2 transition-all duration-200 ease-linear'
										/>
									</Button>
								</div>
								<div className='flex w-full items-center flex-row py-3 justify-between border-t border-b bg-zinc-50/40 backdrop-blur-sm border-zinc-600/10'>
									<div className='w-1/3 xl:flex gap-5 hidden'>
										<MotionDiv
											variants={SlideRight}
											whileInView='open'
											transition={{
												delay: 0.9,
												type: 'tween',
												duration: 0.5,
											}}
											initial='close'>
											<ResponsiveImage
												data={data.imagehero[4].responsiveImage}
												className='object-contain'
											/>
										</MotionDiv>
										<MotionDiv
											variants={SlideRight}
											whileInView='open'
											transition={{
												delay: 1.2,
												type: 'tween',
												duration: 0.5,
											}}
											initial='close'>
											<ResponsiveImage
												data={data.imagehero[3].responsiveImage}
												className='object-contain'
											/>
										</MotionDiv>
									</div>
									{data.statushero.map((d) => {
										return (
											<div
												key={d.id}
												className='flex items-center justify-center flex-col gap-3'>
												<h2 className='font-bold text-sm text-center lg:text-xl'>
													{d.title}
												</h2>
												<div className='flex gap-1 lg:gap-2 items-center justify-center'>
													<Plus size={20} />
													<NumbersAnimatedHero value={d.value} />
												</div>
											</div>
										);
									})}
								</div>
							</div>

							<div className='absolute top-0 -z-10 right-0 w-1/3 hidden xl:block border '>
								<ResponsiveImage
									data={data.imagehero[0].responsiveImage}></ResponsiveImage>

								<div className=' -translate-y-28 -translate-x-20 2xl:flex hidden '>
									<MotionDiv
										className='h-[200px] w-[200px]'
										variants={SlideRight}
										transition={{
											delay: 0.3,
											duration: 0.5,
											ease: 'linear',
										}}
										whileInView='open'
										initial='close'>
										<ResponsiveImage
											data={
												data.imagehero[1].responsiveImage
											}></ResponsiveImage>
									</MotionDiv>
									<MotionDiv
										className='h-[200px] w-[200px]'
										variants={SlideRight}
										transition={{
											delay: 0.6,
											ease: 'linear',
											duration: 0.5,
										}}
										whileInView='open'
										initial='close'>
										<ResponsiveImage
											data={
												data.imagehero[2].responsiveImage
											}></ResponsiveImage>
									</MotionDiv>
								</div>
							</div>
						</div>
					</div>
				</>
			</Container>
		</div>
	);
}
