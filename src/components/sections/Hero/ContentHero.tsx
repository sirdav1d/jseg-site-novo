/** @format */

'use client';
import Container from '@/components/Container';
import { Button } from '@/components/ui/button';
import { AllHomepageHero } from '@/lib/datocms';
import React, { useEffect, useState } from 'react';
import { useQuerySubscription, Image as ResponsiveImage } from 'react-datocms';
import { ChevronRight, Plus } from 'lucide-react';
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
			<div className='h-full w-full py-20 flex items-center justify-center'>
				<Container>
					<>
						<div className='h-full'>
							{results.map((res: AllHomepageHero, index: number) => {
								return (
									<div
										key={index}
										className='h-full'>
										<div className='flex flex-col h-full justify-between py-5'>
											<div className='flex flex-col gap-5'>
												<h1 className='text-zinc-900 font-extrabold text-4xl '>
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
												<p className='text-base font-light max-w-3xl mb-10'>
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
											<div className='flex w-full justify-between'>
												<div className='w-1/3 flex gap-5'>
													<ResponsiveImage
														data={res.imagehero[4].responsiveImage}
														className='object-contain'
													/>
													<ResponsiveImage
														data={res.imagehero[3].responsiveImage}
														className='object-contain'
													/>
												</div>
												<div className='flex items-center justify-center flex-col gap-5'>
													<h2 className='font-bold text-xl'>
														{res.status01.title}
													</h2>
													<div className='flex gap-2 items-center justify-center'>
														<Plus size={24} />
														<p className='text-brand-green-500 font-semibold text-4xl'>
															{res.status01.value}
														</p>
													</div>
												</div>
												<div className='flex items-center justify-center flex-col gap-5'>
													<h2 className='font-bold text-xl'>
														{res.status02.title}
													</h2>
													<div className='flex gap-2 items-center justify-center'>
														<Plus size={24} />
														<p className='text-brand-green-500 font-semibold text-4xl'>
															{res.status02.value}
														</p>
													</div>
												</div>
												<div className='flex items-center justify-center flex-col gap-5'>
													<h2 className='font-bold text-xl'>
														{res.status03.title}
													</h2>
													<div className='flex gap-2 items-center justify-center'>
														<Plus size={24} />
														<p className='text-brand-green-500 font-semibold text-4xl'>
															{res.status03.value}
														</p>
													</div>
												</div>
											</div>
										</div>
										<div>
											<div className='absolute top-0 -z-10 right-0 object-contain w-[38%]'>
												<ResponsiveImage
													data={
														res.imagehero[0].responsiveImage
													}></ResponsiveImage>
												<div className='flex w-[60%] object-contain -translate-y-32'>
													<ResponsiveImage
														data={
															res.imagehero[1].responsiveImage
														}></ResponsiveImage>
													<ResponsiveImage
														data={
															res.imagehero[2].responsiveImage
														}></ResponsiveImage>
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
