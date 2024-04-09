/** @format */

'use client';
import { SlideRight } from '@/animations/SlideRight';
import { SlideUp } from '@/animations/SlideUp';
import Container from '@/components/Container';
import { MotionDiv } from '@/components/MotionComponents';
import { Button } from '@/components/ui/button';
import { AllHomepageHero } from '@/lib/types';
import { ChevronRight, Plus } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Image as ResponsiveImage, useQuerySubscription } from 'react-datocms';
import HeroTypeAnimation from './HeroTypeAnimation';

export default function ContentHero({ subscription }: { subscription: any }) {
	const [hydrated, setHydrated] = useState(false);

	useEffect(() => setHydrated(true), []);
	const { query, initialData, token } = subscription;

	const { data, error, status } = useQuerySubscription({
		query: query,
		enabled: true,
		token,
		initialData,
	});

	const results: AllHomepageHero[] = data.allHomepages;

	return (
		hydrated && (
			<div className='h-full w-full py-10 flex items-center justify-center'>
				<Container>
					<>
						<div className='h-full'>
							{results.map((res: AllHomepageHero, index: number) => {
								return (
									<div
										key={index}
										className='h-full'>
										<div className='flex flex-col h-full justify-between gap-5 py-5'>
											<div className='flex flex-col gap-5 align-middle my-auto'>
												<h1 className='text-zinc-900 font-extrabold  max-w-xs lg:max-w-lg text-4xl '>
													{res.heading}&nbsp;
													<span className='text-brand-green-500'>
														<HeroTypeAnimation
															words={[
																res.keyword01,
																res.keyword02,
																res.keyword03,
															]}
														/>
													</span>
												</h1>
												<p className='text-base prose font-normal max-w-2xl mb-10'>
													{res.subheadline}
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
												<div className='w-1/3 lg:flex gap-5 hidden'>
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
															data={res.imagehero[4].responsiveImage}
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
															data={res.imagehero[3].responsiveImage}
															className='object-contain'
														/>
													</MotionDiv>
												</div>
												<div className='flex items-center justify-center flex-col gap-3'>
													<h2 className='font-bold text-sm text-center lg:text-xl'>
														{res.status01.title}
													</h2>
													<div className='flex gap-1 lg:gap-2 items-center justify-center'>
														<Plus size={24} />
														<p className='text-brand-green-500 font-semibold text-2xl lg:text-5xl'>
															{res.status01.value}
														</p>
													</div>
												</div>
												<div className='flex items-center justify-center flex-col gap-3'>
													<h2 className='font-bold text-sm text-center lg:text-xl'>
														{res.status02.title}
													</h2>
													<div className='flex gap-1 lg:gap-2 items-center justify-center'>
														<Plus size={24} />
														<p className='text-brand-green-500 font-semibold text-2xl lg:text-5xl'>
															{res.status02.value}
														</p>
													</div>
												</div>
												<div className='flex items-center justify-center flex-col gap-3'>
													<h2 className='font-bold text-sm text-center lg:text-xl'>
														{res.status03.title}
													</h2>
													<div className='flex gap-1 lg:gap-2 items-center justify-center'>
														<Plus size={24} />
														<p className='text-brand-green-500 font-semibold text-2xl lg:text-5xl'>
															{res.status03.value}
														</p>
													</div>
												</div>
											</div>
										</div>
										<div>
											<div className='absolute top-0 -z-10 right-0 object-contain w-[38%] hidden lg:block'>
												<MotionDiv
													variants={SlideUp}
													whileInView='open'
													animate='open'
													initial='close'>
													<ResponsiveImage
														data={
															res.imagehero[0].responsiveImage
														}></ResponsiveImage>
												</MotionDiv>
												<div className='w-[56%] object-contain -translate-y-40 -translate-x-20 flex'>
													<MotionDiv
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
																res.imagehero[1].responsiveImage
															}></ResponsiveImage>
													</MotionDiv>
													<MotionDiv
														variants={SlideRight}
														transition={{
															delay: 0.6,
															ease: 'linear',
															duration: 0.5,
														}}
														whileInView='open'
														className='w-full'
														initial='close'>
														<ResponsiveImage
															data={
																res.imagehero[2].responsiveImage
															}></ResponsiveImage>
													</MotionDiv>
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</>
				</Container>
			</div>
		)
	);
}
