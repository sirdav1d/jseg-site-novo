/** @format */

import { RevealRight } from '@/animations/RevealRight';
import { SlideUp } from '@/animations/SlideUp';
import { HeroService } from '@/lib/types';
import { ChevronRight, SquareArrowOutUpRight } from 'lucide-react';
import { Image as ResponsiveImage } from 'react-datocms';
import Container from '../Container';
import { MotionDiv, MotionHeading, MotionP } from '../MotionComponents';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import Link from 'next/link';

export default function HeroServices({ data }: { data: HeroService }) {
	return (
		<div className='h-[90vh] w-full py-10'>
			<Container>
				<div className='flex flex-col md:flex-row w-full  xl:flex-col gap-20 xl:gap-0 h-full justify-center lg:justify-between items-start  '>
					<div className='w-full align-middle xl:mt-10 flex flex-col xl:gap-5'>
						<div className='flex flex-col xl:flex-row gap-5 w-full justify-between '>
							<MotionHeading
								variants={RevealRight}
								animate='open'
								initial='close'
								exit={'exit'}
								transition={{ delay: 0.2, ease: 'linear', duration: 0.3 }}
								className='text-zinc-900 font-extrabold  lg:max-w-lg text-2xl lg:text-3xl xl:leading-10'>
								{data.headline}
							</MotionHeading>
							<MotionP
								variants={RevealRight}
								animate='open'
								initial='close'
								exit={'exit'}
								transition={{ delay: 0.4, ease: 'linear', duration: 0.3 }}
								className='text-base prose font-normal max-w-2xl mb-10 -z-10'>
								{data.subheadline}
							</MotionP>
						</div>
						<MotionDiv
							variants={RevealRight}
							animate='open'
							initial='close'
							exit={'exit'}
							transition={{ delay: 0.6, ease: 'linear', duration: 0.3 }}>
							<Link
								href={'/contact#formComponent'}
								legacyBehavior>
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
						</MotionDiv>
					</div>

					<div className='flex w-full flex-row gap-5 h-fit xl:-translate-y-20  xl:items-end '>
						<div className='xl:flex hidden flex-col gap-5 justify-between w-[40%]'>
							<MotionDiv
								className='flex gap-5  h-[134px]'
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
									data={data.imageshero[0].responsiveImage}
									className='object-cover drop-shadow-sm rounded-lg h-full'
								/>
							</MotionDiv>
							<MotionDiv
								className='xl:flex hidden rounded-lg w-full'
								variants={SlideUp}
								whileInView='open'
								transition={{
									delay: 0.8,
									type: 'tween',
									duration: 0.5,
									ease: 'linear',
								}}
								initial='close'>
								<a
									href='#ratings'
									className='hover:drop-shadow-xl hover:scale-105 transition-all duration-200 ease-linear'>
									<Card className=' hover:border-zinc-50 transition-all duration-200 ease-linear bg-bgFooter text-zinc-800'>
										<CardContent className='flex flex-col items-center justify-center gap-2 h-full py-2.5 px-3 '>
											<h4 className='flex text-base font-extrabold text-center items-center gap-2 w-full'>
												Ver Avaliações
												<SquareArrowOutUpRight size={20} />
											</h4>
											<p className='text-xs prose font-medium text-zinc-600 drop-shadow-md'>
												Saiba porque nossos clientes priorizam a JSEG
												Equipamentos
											</p>
										</CardContent>
									</Card>
								</a>
							</MotionDiv>
						</div>

						<MotionDiv
							className='xl:flex gap-5 hidden w-3/4'
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
								data={data.imageshero[1].responsiveImage}
								className='object-cover rounded-lg drop-shadow-sm h-60'
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
							className='w-full -z-10 flex'
							initial='close'>
							<ResponsiveImage
								className='object-contain rounded-xl drop-shadow-md'
								data={data.imageshero[2].responsiveImage}></ResponsiveImage>
						</MotionDiv>
					</div>
				</div>
			</Container>
		</div>
	);
}
