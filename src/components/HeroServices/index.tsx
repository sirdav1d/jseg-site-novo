/** @format */

import { SlideUp } from '@/animations/SlideUp';
import { AllServicepage, DataService } from '@/lib/types';
import { ChevronRight } from 'lucide-react';
import { Image as ResponsiveImage } from 'react-datocms';
import { MotionDiv } from '../MotionComponents';
import { Button } from '../ui/button';

export default function HeroServices({ data }: { data: AllServicepage }) {
	return (
		<div>
			<div className='h-full'>
				<div className='h-full'>
					<div className='flex flex-col h-full justify-between gap-5  py-5'>
						<div className='flex flex-col lg:flex-row gap-5 align-middle my-auto justify-between'>
							<h1 className='text-zinc-900 font-extrabold  max-w-xs lg:max-w-lg text-4xl '>
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
								<div className='xl:flex gap-5 hidden w-[220px]'>
									<MotionDiv
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
								</div>
								<div className='w-[200px] h-full xl:flex gap-5 hidden '>
									Espaço do card
								</div>
							</div>

							<div className='w-[348px] xl:flex gap-5 hidden '>
								<MotionDiv
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
							</div>

							<div className='w-[668px] hidden -z-10 xl:block align-top absolute bottom-0 right-0'>
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
									initial='close'>
									<ResponsiveImage
										className='object-fill rounded-xl drop-shadow-md h-[440px]'
										data={
											data.imagesheroservice[2].responsiveImage
										}></ResponsiveImage>
								</MotionDiv>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
