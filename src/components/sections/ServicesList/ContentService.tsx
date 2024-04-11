/** @format */

import { RevealRight } from '@/animations/RevealRight';
import Access from '@/assets/icons/access';
import Alarm from '@/assets/icons/alarm';
import BrainCircuit from '@/assets/icons/brainCircuit';
import Cftv from '@/assets/icons/cftv';
import Phone from '@/assets/icons/phone';
import Wifi from '@/assets/icons/wifi';
import Container from '@/components/Container';
import { MotionDiv } from '@/components/MotionComponents';
import { Button } from '@/components/ui/button';
import { Data } from '@/lib/types';
import { ChevronRight } from 'lucide-react';
import CardService from './CardService';

export default function ContentService({ data }: { data: Data }) {
	return (
		<div className='h-full w-full flex items-center justify-center'>
			<Container>
				{data.allHomepages.map((res, index) => {
					return (
						<div
							key={index}
							className='flex flex-col gap-10  w-full'>
							<div className='w-full'>
								<div className='flex flex-col gap-5 lg:flex-row'>
									<h2 className='text-2xl w-full font-bold'>
										{res.sectioncontent01.title}
									</h2>
									<p className='prose mb-10 lg:mb-0'>
										{res.sectioncontent01.description}
									</p>{' '}
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

							<div className='grid md:grid-cols-2 xl:grid-cols-3 gap-5 w-full h-full'>
								<MotionDiv
									variants={RevealRight}
									transition={{ ease: 'linear', duration: 0.5, delay: 0.2 }}
									whileInView='open'
									viewport={{ once: true }}
									initial='close'>
									<CardService
										icon={<BrainCircuit />}
										title={res.cardservice01.title}
										description={res.cardservice01.description}></CardService>
								</MotionDiv>
								<MotionDiv
									variants={RevealRight}
									transition={{ ease: 'linear', duration: 0.5, delay: 0.4 }}
									whileInView='open'
									viewport={{ once: true }}
									initial='close'>
									<CardService
										icon={<Wifi />}
										title={res.cardservice02.title}
										description={res.cardservice02.description}></CardService>
								</MotionDiv>
								<MotionDiv
									transition={{ ease: 'linear', duration: 0.5, delay: 0.6 }}
									variants={RevealRight}
									whileInView='open'
									viewport={{ once: true }}
									initial='close'>
									<CardService
										icon={<Cftv />}
										title={res.cardservice03.title}
										description={res.cardservice03.description}></CardService>
								</MotionDiv>
								<MotionDiv
									transition={{ ease: 'linear', duration: 0.5, delay: 0.8 }}
									variants={RevealRight}
									whileInView='open'
									viewport={{ once: true }}
									initial='close'>
									<CardService
										icon={<Access />}
										title={res.cardservice04.title}
										description={res.cardservice04.description}></CardService>
								</MotionDiv>
								<MotionDiv
									transition={{ ease: 'linear', duration: 0.5, delay: 1 }}
									variants={RevealRight}
									whileInView='open'
									viewport={{ once: true }}
									initial='close'>
									<CardService
										icon={<Phone />}
										title={res.cardservice05.title}
										description={res.cardservice05.description}></CardService>
								</MotionDiv>
								<MotionDiv
									transition={{ ease: 'linear', duration: 0.5, delay: 1.2 }}
									variants={RevealRight}
									whileInView='open'
									viewport={{ once: true }}
									initial='close'>
									<CardService
										icon={<Alarm />}
										title={res.cardservice06.title}
										description={res.cardservice06.description}></CardService>
								</MotionDiv>
							</div>
						</div>
					);
				})}
			</Container>
		</div>
	);
}
