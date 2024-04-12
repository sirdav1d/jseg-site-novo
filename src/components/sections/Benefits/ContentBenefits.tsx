/** @format */

import Container from '@/components/Container';
import { Data } from '@/lib/types';
import { Image as ResponsiveImage } from 'react-datocms';
import React from 'react';
import { MotionDiv, MotionLI } from '@/components/MotionComponents';
import { Trophy } from 'lucide-react';

export default function ContentBenefits({ data }: { data: Data }) {
	return (
		<div>
			<Container>
				<div className='flex items-start justify-between w-fit mx-auto bg-bgBenefits border-zinc-50/20 rounded-3xl p-5 pb-8 xl:p-10 max-h-[770px]'>
					<div className='relative w-1/3 hidden xl:flex'>
						<MotionDiv>
							<ResponsiveImage
								data={
									data.allHomepages[0].benefitimages[0].responsiveImage
								}></ResponsiveImage>
						</MotionDiv>
						<MotionDiv className='absolute w-60 bottom-10 -right-10 drop-shadow-md'>
							<ResponsiveImage
								data={
									data.allHomepages[0].benefitimages[1].responsiveImage
								}></ResponsiveImage>
						</MotionDiv>
					</div>
					<div className='xl:w-1/2 w-full flex flex-col gap-10 xl:gap-20'>
						<h2 className='text-3xl font-bold text-zinc-50 text-center xl:text-start'>
							{data.allHomepages[0].title}
						</h2>
						<div>
							<ul className='flex flex-col mx-auto w-full  gap-6 text-zinc-100 lg:text-xl prose prose-sm'>
								<MotionLI className='flex gap-3 items-center w-full'>
									<div>
										<Trophy size={28} />
									</div>

									{data.allHomepages[0].benefit01}
								</MotionLI>
								<MotionLI className='flex gap-3  items-center '>
									<div>
										<Trophy size={28} />
									</div>
									{data.allHomepages[0].benefit02}
								</MotionLI>
								<MotionLI className='flex gap-3  items-center '>
									<div>
										<Trophy size={28} />
									</div>

									{data.allHomepages[0].benefit03}
								</MotionLI>
								<MotionLI className='flex gap-3  items-center '>
									<div>
										<Trophy size={28} />
									</div>

									{data.allHomepages[0].benefit04}
								</MotionLI>
								<MotionLI className='flex gap-3 items-center '>
									<div>
										<Trophy size={28} />
									</div>

									{data.allHomepages[0].benefit05}
								</MotionLI>
								<MotionLI className='flex gap-3  items-center '>
									<div>
										<Trophy size={28} />
									</div>

									{data.allHomepages[0].benefit06}
								</MotionLI>
							</ul>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
}
