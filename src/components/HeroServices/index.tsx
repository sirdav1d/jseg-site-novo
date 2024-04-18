/** @format */

import { SlideUp } from '@/animations/SlideUp';
import { AllServicepage } from '@/lib/types';
import { ChevronRight, SquareArrowOutUpRight } from 'lucide-react';
import { Image as ResponsiveImage } from 'react-datocms';
import { MotionDiv } from '../MotionComponents';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { HoverBorderGradient } from '../ui/hover-border-gradient';

export default function HeroServices({ data }: { data: AllServicepage }) {
	return (
		<div>
			<div className='h-full'>
				<div className='h-full'>
					<div className='flex flex-col h-full justify-between gap-5  py-5'>
						<div className='flex flex-col lg:flex-row gap-5 align-middle my-auto justify-between'>
							<h1 className='text-zinc-900 font-extrabold  max-w-xs lg:max-w-lg text-3xl leading-10'>
								{data.headline}
							</h1>
							<p className='text-base prose font-normal max-w-2xl mb-10'>
								{data.subheadline}
							</p>
						</div>
						<div>
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
						<div className='flex w-full relative flex-row gap-5 pt-32'>
							<div className='flex flex-col gap-5 '>
								<MotionDiv
									className='xl:flex gap-5 hidden w-[220px]'
									variants={SlideUp}
									whileInView='open'
									transition={{
										delay: 0.2,
										type: 'tween',
										duration: 0.5,
										ease: 'linear',
									}}
									initial='close'>
									<ResponsiveImage
										data={data.imagesheroservice[0].responsiveImage}
										className='object-cover h-[120px] drop-shadow-sm w-[220px] rounded-lg'
									/>
								</MotionDiv>
								<MotionDiv
									className='xl:flex hidden w-[220px]'
									variants={SlideUp}
									whileInView='open'
									transition={{
										delay: 0.2,
										type: 'tween',
										duration: 0.5,
										ease: 'linear',
									}}
									initial='close'>
									<a
										href='#ratings'
										className='hover:opacity-80 transition-all duration-200 ease-linear'>
										<Card className='w-[220px] bg-brand-green-500 border-1 border-white/20 text-white'>
											<CardContent className='w-[220px] flex flex-col items-center justify-center gap-2 h-full py-2.5 px-3'>
												<h4 className='flex text-base font-bold text-center items-center gap-2 w-full'>
													Ver Avaliações
													<SquareArrowOutUpRight size={20} />
												</h4>
												<p className='text-xs prose text-zinc-100'>
													Saiba porque nossos clientes priorizam a JSEG
													Equipamentos
												</p>
											</CardContent>
										</Card>
									</a>
								</MotionDiv>
							</div>

							<MotionDiv
								className='w-1/3 xl:flex gap-5 hidden '
								variants={SlideUp}
								whileInView='open'
								transition={{
									delay: 0.4,
									type: 'tween',
									duration: 0.5,
									ease: 'linear',
								}}
								initial='close'>
								<ResponsiveImage
									data={data.imagesheroservice[1].responsiveImage}
									className='object-cover rounded-lg drop-shadow-sm h-56 w-[348px]'
								/>
							</MotionDiv>

							<MotionDiv
								variants={SlideUp}
								whileInView='open'
								transition={{
									delay: 0.6,
									type: 'tween',
									duration: 0.5,
									ease: 'linear',
								}}
								animate='open'
								className='absolute right-0 -top-2 w-[588px] -z-10 '
								initial='close'>
								<ResponsiveImage
									className='object-contain rounded-xl drop-shadow-md h-[360px]'
									data={
										data.imagesheroservice[2].responsiveImage
									}></ResponsiveImage>
							</MotionDiv>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
