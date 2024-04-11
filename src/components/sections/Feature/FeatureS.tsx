/** @format */

import { MotionDiv, MotionSpan } from '@/components/MotionComponents';
import TagComponent from '@/components/TagComponent';
import { Featurecontent } from '@/lib/types';
import { Image as ResponsiveImage } from 'react-datocms';

export default function FeatureS(props: Featurecontent) {
	return (
		<div
			data-tag={props.tag}
			className='w-fit flex flex-col mx-auto items-start lg:items-center gap-5 lg:gap-10 xl:gap-32 xl:flex-row-reverse data-[tag=Confiabilidade]:xl:flex-row  justify-center'>
			<div className='flex flex-col gap-5'>
				<TagComponent>{props.tag}</TagComponent>
				<h2 className='text-xl font-bold'>{props.title}</h2>
				<p className='prose prose-sm'>{props.description}</p>
			</div>
			<div className='relative '>
				<div className='relative'>
					<MotionDiv className='w-full max-w-[324px] h-auto rounded-md'>
						<ResponsiveImage
							className='rounded-md'
							data={props.images[0].responsiveImage}
						/>
					</MotionDiv>
					<MotionSpan className='w-[324px] h-[264px] bg-brand-green-500 absolute top-10 rounded-md -z-10 left-4'></MotionSpan>
				</div>
				<MotionDiv className='w-28 absolute top-3 -right-12'>
					<ResponsiveImage data={props.images[1].responsiveImage} />
				</MotionDiv>
				<MotionDiv className='w-28 absolute bottom-2 -right-12'>
					<ResponsiveImage data={props.images[2].responsiveImage} />
				</MotionDiv>
			</div>
		</div>
	);
}
