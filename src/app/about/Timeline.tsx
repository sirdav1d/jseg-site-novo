/** @format */

import { RevealRight } from '@/animations/RevealRight';
import { SlideRight } from '@/animations/SlideRight';
import { SlideUp } from '@/animations/SlideUp';
import Container from '@/components/Container';
import { MotionDiv } from '@/components/MotionComponents';
import React from 'react';

export default function Timeline() {
	return (
		<div>
			<Container>
				<>
					<div className='w-full flex  gap-10 flex-col lg:flex-row'>
						<div className='xl:w-1/2 w-full flex items-start flex-col gap-5'>
							<MotionDiv
								variants={SlideUp}
								viewport={{ once: true }}
								transition={{ delay: 0.2, type: 'spring' }}
								whileInView={'open'}
								initial='close'>
								<h2 className='font-bold text-2xl lg:text-3xl xl:w-[80%] mt-2'>
									Conheça Nossa Jornada De Inovação E Resiliência
								</h2>
							</MotionDiv>
							<MotionDiv
								variants={SlideUp}
								viewport={{ once: true }}
								transition={{ delay: 0.4, type: 'spring' }}
								whileInView={'open'}
								initial='close'>
								<p className='prose prose-sm lg:prose'>
									Descubra como enfrentamos desafios, crescemos e prosperamos ao
									longo dos anos, mantendo nossos valores e compromissos
									intactos
								</p>
							</MotionDiv>
						</div>
						<div className='xl:w-1/2 w-full'>
							<div className='relative flex flex-col gap-10 w-full h-full justify-between '>
								<span className='absolute h-[75%] w-1 rounded-full -z-10 bg-brand-green-500 translate-x-3.5 xl:translate-x-5' />

								<MotionDiv
									variants={RevealRight}
									viewport={{ once: true }}
									transition={{ delay: 0.2, type: 'spring' }}
									whileInView={'open'}
									initial='close'
									className='flex gap-5 w-full '>
									<span className='rounded-full bg-brand-green-300 h-8 w-12 md:h-10 flex items-center justify-center text-brand-green-900 xl:text-xl drop-shadow-md'>
										1
									</span>
									<div className='flex flex-col gap-2'>
										<h3 className='font-bold uppercase text-base'>
											2019 - Inauguração Da JSEG Equipametos
										</h3>
										<p className='prose lg:prose-sm text-xs'>
											Uma empresa que se dedica a resolver problemas, com
											consultores de vendas especializados em segurança
											eletrônica
										</p>
									</div>
								</MotionDiv>

								<MotionDiv
									variants={RevealRight}
									viewport={{ once: true }}
									transition={{ delay: 0.4, type: 'spring' }}
									whileInView={'open'}
									initial='close'
									className='flex gap-5 w-full '>
									<span className=' rounded-full bg-brand-green-300 w-12 h-8  md:h-10  flex items-center justify-center text-brand-green-900 xl:text-xl drop-shadow-md'>
										2
									</span>
									<div className='flex flex-col gap-2'>
										<h3 className='font-bold uppercase text-base'>
											2021 - Parcerias De Sucesso
										</h3>
										<p className='prose lg:prose-sm text-xs'>
											A fim de ampliar nosso alcance, consolidamos parcerias com
											técnicos especialistas e atuamos ativamente na divulgação
											e cooperação para atendermos nossos cliente em todas as
											demandas
										</p>
									</div>
								</MotionDiv>
								<MotionDiv
									variants={RevealRight}
									viewport={{ once: true }}
									transition={{ delay: 0.6, type: 'spring' }}
									whileInView={'open'}
									initial='close'
									className='flex gap-5 w-full '>
									<span className=' rounded-full bg-brand-green-300 w-12 h-8 md:h-10  flex items-center justify-center text-brand-green-900 xl:text-xl drop-shadow-md'>
										3
									</span>
									<div className='flex flex-col gap-2'>
										<h3 className='font-bold uppercase text-base'>
											Atualmente - Projetos Escaláveis
										</h3>
										<p className='prose lg:prose-sm text-xs'>
											Hoje a JSEG Equipamentos é uma empresa que entrega
											diversos tipos de serviços, conseguindo atender
											condomínios, empresas e instaladores que buscam parcerias
											duradouras
										</p>
									</div>
								</MotionDiv>
							</div>
						</div>
					</div>
				</>
			</Container>
		</div>
	);
}
