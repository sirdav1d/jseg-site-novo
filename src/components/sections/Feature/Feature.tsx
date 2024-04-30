/** @format */

import Container from '@/components/Container';
import { Button } from '@/components/ui/button';
import { Feature } from '@/lib/types';
import { ChevronRight } from 'lucide-react';
import FeatureS from './FeatureList';

interface ContentFeatureProps {
	title: string;
	description: string;
	features: Feature[];
}

export default function FeatureComponent(props: ContentFeatureProps) {
	return (
		<div className='pt-20'>
			<Container>
				<div className='flex flex-col gap-20 xl:gap-0 '>
					<div className=' flex flex-col items-start gap-5'>
						<div className='flex flex-col xl:flex-row items-start justify-between w-full gap-5'>
							<h2 className='text-2xl font-bold max-w-md'>{props.title}</h2>
							<p className='prose'>{props.description}</p>
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
					<div className='gap-12 xl:gap-0 flex flex-col w-full h-full item-center justify-center'>
						{props.features.map((feat) => {
							return (
								<FeatureS
									key={feat.id}
									title={feat.title}
									tag={feat.tag}
									description={feat.description}
									image={feat.image}
									id={feat.id}></FeatureS>
							);
						})}
					</div>
				</div>
			</Container>
		</div>
	);
}
