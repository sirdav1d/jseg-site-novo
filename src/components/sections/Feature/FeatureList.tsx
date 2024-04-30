/** @format */

import { RevealRight } from '@/animations/RevealRight';
import { MotionDiv } from '@/components/MotionComponents';
import TagComponent from '@/components/TagComponent';
import { Feature } from '@/lib/types';
import { Image as ResponsiveImage } from 'react-datocms';

export default function FeatureList(props: Feature) {
	return (
		<div
			data-tag={props.tag}
			className='w-full h-full flex flex-col mx-auto xl:py-10 items-center gap-5 lg:gap-10 xl:gap-32 xl:flex-row justify-between xl:data-[tag=CONFIABILIDADE]:flex-row-reverse xl:data-[tag=MONITORAMENTO]:flex-row-reverse  xl:data-[tag=CORPORATIVO]:flex-row-reverse'>
			<div className='flex flex-col gap-5 h-full '>
				<TagComponent>{props.tag}</TagComponent>
				<h2 className='text-xl font-bold'>{props.title}</h2>
				<p className='prose prose-sm'>{props.description}</p>
			</div>

			<div className='flex relative '>
				<MotionDiv
					className='max-w-[368px] lg:max-w-[600px]'
					variants={RevealRight}
					whileInView={'open'}
					transition={{ delay: 0.2, duration: 0.5, ease: 'linear' }}
					viewport={{ once: true }}
					initial='close'>
					<ResponsiveImage
						className='rounded-md lg:h-[400px]'
						data={props.image.responsiveImage}
					/>
				</MotionDiv>
			</div>
		</div>
	);
}
