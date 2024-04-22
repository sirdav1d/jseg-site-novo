/** @format */

import Container from '@/components/Container';
import { AllHomepage } from '@/lib/types';
import Testimony from './Testimony';

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';

export default function ContentRatings({ data }: { data: AllHomepage }) {
	return (
		<div>
			<Container>
				<div className='gap-8 flex flex-col'>
					<div className='text-center flex flex-col gap-5'>
						<h2 className='text-3xl font-bold'>{data.titlesectionrating}</h2>
						<p className='prose mx-auto prose-sm max-w-lg'>
							{data.descriptionsectionrating}
						</p>
					</div>

					<Carousel
						opts={{
							align: 'start',
							loop: true,
						}}
						className='w-full mx-auto'>
						<CarouselContent className='mx-auto w-full'>
							{data.ratingscontent.map((rating: any) => {
								return (
									<CarouselItem
										key={rating.id}
										className=' md:basis-1/2 lg:basis-1/3 '>
										<Testimony
											text={rating.testimony}
											name={rating.name}
											avatar={rating.avatar.responsiveImage}></Testimony>
									</CarouselItem>
								);
							})}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</div>
			</Container>
		</div>
	);
}
