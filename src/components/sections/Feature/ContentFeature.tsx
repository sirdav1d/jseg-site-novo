/** @format */

import Container from '@/components/Container';
import { Button } from '@/components/ui/button';
import { AllHomepage } from '@/lib/types';
import { ChevronRight } from 'lucide-react';
import FeatureS from './FeatureS';

export default function ContentFeature({ data }: { data: AllHomepage }) {
	return (
		<div>
			<Container>
				<div className='flex flex-col gap-20 '>
					<div className=' flex flex-col items-start gap-5'>
						<div className='flex flex-col xl:flex-row items-start justify-between w-full gap-5'>
							<h2 className='text-2xl font-bold max-w-md'>
								{data.titlesectionfeature}
							</h2>
							<p className='prose'>{data.descriptionsectionfeature}</p>
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
					<div className='gap-20 xl:gap-10 flex flex-col w-full h-full item-center justify-center'>
						{data.features.map((features) => {
							return (
								<FeatureS
									key={features.id}
									title={features.title}
									tag={features.tag}
									description={features.description}
									images={features.images}></FeatureS>
							);
						})}
					</div>
				</div>
			</Container>
		</div>
	);
}
