/** @format */

import React from 'react';
import Container from '@/components/Container';
import { culture } from '@/constants/Culture';
import Image from 'next/image';
import { MotionDiv } from '@/components/MotionComponents';
import { SlideUp } from '@/animations/SlideUp';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export default function Culture() {
	return (
		<div
			id='culture'
			className='xl:pt-20 w-full flex flex-col'>
			<Container>
				<div className='flex flex-col gap-12'>
					<div className='w-full flex items-start flex-col gap-5 '>
						<MotionDiv
							variants={SlideUp}
							viewport={{ once: true }}
							transition={{ delay: 0.2, type: 'spring' }}
							whileInView={'open'}
							initial='close'>
							<h2 className='mt-2 font-bold text-2xl lg:text-3xl'>
								Sobre a JSEG Equipamentos
							</h2>
						</MotionDiv>
						<MotionDiv
							variants={SlideUp}
							viewport={{ once: true }}
							transition={{ delay: 0.4, type: 'spring' }}
							whileInView={'open'}
							initial='close'>
							<p className='prose prose-sm lg:prose'>
								Nós somos uma empresa de tecnologia empenhada em oferecer
								soluções eficientes e inovadoras em rede e segurança para
								empresas e residências. Com nossa expertise de 7 anos no
								mercado, temos o conhecimento necessário para atender a qualquer
								desafio de segurança que nossos clientes possam enfrentar
							</p>
						</MotionDiv>
					</div>
					<ul className='flex gap-5 w-full flex-col lg:flex-row lg:justify-between'>
						{culture.map((c, index) => {
							return (
								<li key={index}>
									<MotionDiv
										className='flex flex-col gap-4 justify-start items-start w-[368px]'
										variants={SlideUp}
										viewport={{ once: true }}
										transition={{ delay: 0.25 * index, type: 'spring' }}
										whileInView={'open'}
										initial='close'>
										<Card className='xl:h-[220px]'>
											<CardHeader>
												<div className='flex gap-3 items-center '>
													<Image
														className='drop-shadow-icon'
														width={40}
														height={40}
														src={c.icon}
														alt={c.title}
													/>
													<h3 className='uppercase font-bold text-xl text-brand-green-500'>
														{c.title}
													</h3>
												</div>
											</CardHeader>
											<CardContent>
												<p className='prose prose-sm lg:prose'>
													{c.description}
												</p>
											</CardContent>
										</Card>
									</MotionDiv>
								</li>
							);
						})}
					</ul>
				</div>
			</Container>
		</div>
	);
}
