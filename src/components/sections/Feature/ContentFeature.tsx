/** @format */

import Container from '@/components/Container';
import { Button } from '@/components/ui/button';
import { Data } from '@/lib/types';
import { ChevronRight } from 'lucide-react';
import FeatureS from './FeatureS';

export default function ContentFeature({ data }: { data: Data }) {
	return (
		<div>
			<Container>
				{data.allHomepages.map((res, index) => {
					return (
						<div
							key={index}
							className='flex flex-col gap-20 '>
							<div className=' flex flex-col items-start gap-5'>
								<div className='flex flex-col xl:flex-row items-start justify-between w-full gap-5'>
									<h2 className='text-2xl font-bold max-w-md'>
										{res.sectioncontent02.title}
									</h2>
									<p className='prose'>{res.sectioncontent02.description}</p>
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
							<div className='gap-20 xl:gap-10 flex flex-col w-full item-center justify-center'>
								<FeatureS
									title={res.featurecontent01.title}
									tag={res.featurecontent01.tag}
									description={res.featurecontent01.description}
									images={res.featurecontent01.images}></FeatureS>
								<FeatureS
									title={res.featurecontent02.title}
									tag={res.featurecontent02.tag}
									description={res.featurecontent02.description}
									images={res.featurecontent02.images}></FeatureS>
								<FeatureS
									title={res.featurecontent03.title}
									tag={res.featurecontent03.tag}
									description={res.featurecontent03.description}
									images={res.featurecontent03.images}></FeatureS>
							</div>
						</div>
					);
				})}
			</Container>
		</div>
	);
}
