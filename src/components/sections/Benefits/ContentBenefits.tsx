/** @format */

import { RevealRight } from '@/animations/RevealRight';
import Container from '@/components/Container';
import { MotionDiv, MotionLI } from '@/components/MotionComponents';
import { Button } from '@/components/ui/button';
import { Trophy } from 'lucide-react';
import { Image as ResponsiveImage } from 'react-datocms';
import { FaWhatsapp } from 'react-icons/fa6';

export default function ContentBenefits({ data }: { data: any }) {
	return (
		<div>
			<Container>
				<div className='flex items-start justify-between w-fit mx-auto bg-bgBenefits border-zinc-50/20 rounded-3xl p-5 pb-8 xl:p-10 max-h-[770px]'>
					<div className='relative w-1/3 hidden xl:flex'>
						<MotionDiv>
							<ResponsiveImage
								data={data.benefitimages[0].responsiveImage}></ResponsiveImage>
						</MotionDiv>
						<MotionDiv className='absolute w-52 bottom-10 -right-10 drop-shadow-lg'>
							<ResponsiveImage
								data={data.benefitimages[1].responsiveImage}></ResponsiveImage>
						</MotionDiv>
					</div>
					<div className='xl:w-1/2 w-full flex flex-col gap-10 '>
						<h2 className='text-3xl font-bold text-zinc-50 text-center xl:text-start'>
							{data.titlesectionbenefit}
						</h2>
						<div className='flex-col gap-20 flex'>
							<ul className='flex flex-col mx-auto w-full  gap-6 text-zinc-100 lg:text-xl prose prose-sm'>
								{data.benefitcontent.map((benefits: any) => {
									return (
										<MotionLI
											key={benefits.id}
											variants={RevealRight}
											whileInView={'open'}
											initial='close'
											viewport={{ once: true }}
											transition={{ delay: 0.2, ease: 'linear', duration: 0.5 }}
											className='flex gap-3 items-center w-full'>
											<div>
												<Trophy size={28} />
											</div>
											{benefits.benefitdescription}
										</MotionLI>
									);
								})}
							</ul>
							<Button className='group py-3 pl-3 pr-4 flex gap-3 transition-all hover:text-zinc-50 hover:bg-brand-green-700 duration-300 ease-linear w-fit items-center  bg-zinc-50 text-brand-green-700 text-lg font-semibold'>
								<FaWhatsapp size={32} />
								Falar Com Setor Comercial
							</Button>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
}
