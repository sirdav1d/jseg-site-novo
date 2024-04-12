/** @format */

import { RevealRight } from '@/animations/RevealRight';
import { SlideRight } from '@/animations/SlideRight';
import { MotionDiv, MotionSpan } from '@/components/MotionComponents';
import TagComponent from '@/components/TagComponent';
import { Featurecontent } from '@/lib/types';
import { Image as ResponsiveImage } from 'react-datocms';

export default function FeatureS(props: Featurecontent) {
	return (
		<div
			data-tag={props.tag}
			className='w-full h-full flex flex-col mx-auto py-5 xl:py-10 items-center gap-5 lg:gap-10 xl:gap-32 xl:flex-row-reverse data-[tag=Confiabilidade]:xl:flex-row justify-between'>
			<div className='flex flex-col gap-5 h-full'>
				<TagComponent>{props.tag}</TagComponent>
				<h2 className='text-xl font-bold'>{props.title}</h2>
				<p className='prose prose-sm'>{props.description}</p>
			</div>
			<div className='relative h-full	mx-auto lg:mx-0 '>
				<div className='relative h-full '>
					<MotionDiv
						variants={RevealRight}
						whileInView={'open'}
						transition={{ delay: 0.3, duration: 0.5, ease: 'linear' }}
						viewport={{ once: true }}
						initial='close'
						className='w-full h-full max-w-[280px] xl:h-[240px] xl:max-w-[340px] -translate-x-8 lg:-translate-x-0 rounded-md'>
						<ResponsiveImage
							className='rounded-md'
							data={props.images[0].responsiveImage}
						/>
					</MotionDiv>
					<MotionSpan
						variants={RevealRight}
						viewport={{ once: true }}
						whileInView={'open'}
						transition={{ delay: 0.6, duration: 0.5, ease: 'linear' }}
						initial='close'
						data-tag={props.tag}
						className={`w-full h-full max-w-[280px] ${
							props.tag == 'Confiabilidade' ? 'right-4' : 'left-4'
						}  xl:h-[276px] xl:max-w-[340px] bg-brand-green-500 absolute top-4 xl:top-10 rounded-md -z-10 `}></MotionSpan>
				</div>
				<MotionDiv
					variants={RevealRight}
					viewport={{ once: true }}
					whileInView={'open'}
					transition={{ delay: 1, duration: 0.5, ease: 'linear' }}
					initial='close'
					className='w-28 absolute top-3 -right-8'>
					<ResponsiveImage data={props.images[1].responsiveImage} />
				</MotionDiv>
				<MotionDiv
					variants={RevealRight}
					viewport={{ once: true }}
					whileInView={'open'}
					transition={{ delay: 1, duration: 0.5, ease: 'linear' }}
					initial='close'
					className='w-28 absolute bottom-0 xl:-bottom-12 -left-8'>
					<ResponsiveImage data={props.images[2].responsiveImage} />
				</MotionDiv>
			</div>
		</div>
	);
}
