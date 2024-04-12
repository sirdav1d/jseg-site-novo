/** @format */

import Container from '@/components/Container';
import { Data } from '@/lib/types';
import Testimony from './Testimony';

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';

export default function ContentRatings({ data }: { data: Data }) {
	return (
		<div>
			<Container>
				{data.allHomepages.map((d, index) => {
					return (
						<div
							key={index}
							className='gap-10 flex flex-col'>
							<div className='text-center flex flex-col gap-5'>
								<h2 className='text-3xl font-bold'>
									{d.sectioncontent03.title}
								</h2>
								<p className='prose mx-auto prose-sm max-w-lg'>
									{d.sectioncontent03.description}
								</p>
							</div>

							<Carousel className='mx-auto w-full'>
								<CarouselContent className='mx-auto w-full'>
									<CarouselItem className=' md:basis-1/2 lg:basis-1/3'>
										<Testimony
											text={d.rating01.testimony}
											name={d.rating01.name}
											avatar={d.rating01.avatar.responsiveImage}></Testimony>
									</CarouselItem>
									<CarouselItem className='md:basis-1/2 lg:basis-1/3'>
										<Testimony
											text={d.rating02.testimony}
											name={d.rating02.name}
											avatar={d.rating02.avatar.responsiveImage}></Testimony>
									</CarouselItem>
									<CarouselItem className='md:basis-1/2 lg:basis-1/3'>
										<Testimony
											text={d.rating03.testimony}
											name={d.rating03.name}
											avatar={d.rating03.avatar.responsiveImage}></Testimony>
									</CarouselItem>
									<CarouselItem className='md:basis-1/2 lg:basis-1/3'>
										<Testimony
											text={d.rating04.testimony}
											name={d.rating04.name}
											avatar={d.rating04.avatar.responsiveImage}></Testimony>
									</CarouselItem>
								</CarouselContent>
								<CarouselPrevious />
								<CarouselNext />
							</Carousel>
						</div>
					);
				})}
			</Container>
		</div>
	);
}
