/** @format */
'use client';

import { AllHomepageService } from '@/lib/types';
import React, { useEffect, useState } from 'react';
import { useQuerySubscription } from 'react-datocms';
import CardService from './CardService';
import Container from '@/components/Container';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import BrainCircuit from '@/assets/icons/brainCircuit';
import Access from '@/assets/icons/access';
import Alarm from '@/assets/icons/alarm';
import Cftv from '@/assets/icons/cftv';
import Phone from '@/assets/icons/phone';
import Wifi from '@/assets/icons/wifi';

export default function ContentService({
	subscription,
}: {
	subscription: any;
}) {
	const [hydrated, setHydrated] = useState(false);

	useEffect(() => setHydrated(true), []);
	const { query, initialData, token } = subscription;

	const { data, error, status } = useQuerySubscription({
		query: query,
		enabled: true,
		token,
		initialData,
	});

	const results: AllHomepageService[] = data.allHomepages;

	return (
		hydrated && (
			<div className='h-full w-full py-10 flex items-center justify-center'>
				<Container>
					{results.map((res, index) => {
						return (
							<div
								key={index}
								className='flex flex-col gap-10  w-full'>
								<div className='w-full'>
									<div className='flex flex-col gap-5 lg:flex-row'>
										<h2 className='text-3xl w-full font-bold'>
											{res.sectioncontent01.title}
										</h2>
										<p className='prose mb-10 lg:mb-0'>{res.sectioncontent01.description}</p>{' '}
									</div>
									<Button
										variant={'brand'}
										className='group text-lg py-3 pl-5 pr-3'>
										Saiba Mais
										<ChevronRight
											size={28}
											className='group-hover:translate-x-2 transition-all duration-200 ease-linear'
										/>
									</Button>
								</div>

								<div className='grid md:grid-cols-2 xl:grid-cols-3 gap-5 w-full'>
									<CardService
										icon={<BrainCircuit />}
										title={res.cardservice01.title}
										description={res.cardservice01.description}></CardService>
									<CardService
										icon={<Wifi />}
										title={res.cardservice02.title}
										description={res.cardservice02.description}></CardService>
									<CardService
										icon={<Cftv />}
										title={res.cardservice03.title}
										description={res.cardservice03.description}></CardService>
									<CardService
										icon={<Access />}
										title={res.cardservice04.title}
										description={res.cardservice04.description}></CardService>
									<CardService
										icon={<Phone />}
										title={res.cardservice05.title}
										description={res.cardservice05.description}></CardService>
									<CardService
										icon={<Alarm />}
										title={res.cardservice06.title}
										description={res.cardservice06.description}></CardService>
								</div>
							</div>
						);
					})}
				</Container>
			</div>
		)
	);
}
