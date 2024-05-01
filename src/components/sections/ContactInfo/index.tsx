/** @format */

import { RevealRight } from '@/animations/RevealRight';
import { SlideUp } from '@/animations/SlideUp';
import Container from '@/components/Container';
import FormComponent from '@/components/FormComponent';
import { MotionDiv } from '@/components/MotionComponents';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { contactInfos } from '@/constants/contactInfos';
import { Phone } from 'lucide-react';

export default function ContactInfo() {
	return (
		<div
			id='formComponent'
			className='py-24'>
			<Container>
				<>
					<div
						id='form'
						className='flex w-full justify-between items-baseline flex-col gap-10 lg:gap-0 lg:flex-row'>
						<div className='lg:w-1/2 justify-between flex flex-col gap-10 lg:gap-20'>
							<div className='flex flex-col gap-5 '>
								<MotionDiv
									variants={RevealRight}
									viewport={{ once: true }}
									transition={{ delay: 0.2, type: 'spring' }}
									whileInView={'open'}
									initial='close'>
									<h2 className='font-bold text-2xl lg:text-3xl  mt-2'>
										Explore Oportunidades de Colaboração
									</h2>
								</MotionDiv>
								<MotionDiv
									variants={RevealRight}
									viewport={{ once: true }}
									transition={{ delay: 0.4, type: 'spring' }}
									whileInView={'open'}
									initial='close'>
									<p className='lg:prose prose-sm'>
										Estamos abertos a parcerias e colaborações. Preencha nosso
										formulário para iniciar uma conversa sobre como podemos
										trabalhar juntos para alcançar seus objetivos tecnológicos
									</p>
								</MotionDiv>
							</div>
							<ul className='flex gap-5 flex-col lg:flex-row'>
								{contactInfos.map((c, index) => {
									return (
										<li key={index}>
											<MotionDiv
												className='flex flex-col gap-4 justify-start items-start w-[356px] lg:w-[368px]'
												variants={SlideUp}
												viewport={{ once: true }}
												transition={{ delay: 0.25 * index, type: 'spring' }}
												whileInView={'open'}
												initial='close'>
												<Card className='h-full w-full'>
													<CardHeader>
														<div className='flex gap-3 items-center'>
															<Phone
																size={28}
																className='text-brand-green-500'
															/>
															<h3 className='uppercase font-bold text-xl text-brand-green-500'>
																{c.title}
															</h3>
														</div>
													</CardHeader>
													<CardContent className='gap-2 flex flex-col'>
														<p className='prose lg:prose-lg'>{c.tel}</p>
														<p className='prose'>{c.email}</p>
													</CardContent>
												</Card>
											</MotionDiv>
										</li>
									);
								})}
							</ul>
						</div>

						<MotionDiv
							variants={RevealRight}
							viewport={{ once: true }}
							transition={{ delay: 0.25, type: 'spring' }}
							whileInView={'open'}
							initial='close'
							className='lg:w-1/2 w-full flex items-end justify-center lg:justify-end'>
							<FormComponent />
						</MotionDiv>
					</div>
				</>
			</Container>
		</div>
	);
}
