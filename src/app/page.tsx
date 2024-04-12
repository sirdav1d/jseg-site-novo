/** @format */

import Benefits from '@/components/sections/Benefits';
import Feature from '@/components/sections/Feature';
import HeroSection from '@/components/sections/Hero';
import Ratings from '@/components/sections/Ratings';
import ServicesList from '@/components/sections/ServicesList';
import { request } from '@/lib/datocms';
import { QueryHomePage } from '@/lib/queries';

export default async function Home() {
	const data: any = await request({
		query: QueryHomePage,
		revalidate: 30,
	});
	return (
		<main className='overflow-x-hidden'>
			<HeroSection
				subscription={{
					initialData: data,
					query: QueryHomePage,
					token: process.env.NEXT_DATOCMS_TOKEN,
				}}
			/>
			<ServicesList
				subscription={{
					initialData: data,
					query: QueryHomePage,
					token: process.env.NEXT_DATOCMS_TOKEN,
				}}
			/>
			<Feature
				subscription={{
					initialData: data,
					query: QueryHomePage,
					token: process.env.NEXT_DATOCMS_TOKEN,
				}}
			/>
			<Ratings
				subscription={{
					initialData: data,
					query: QueryHomePage,
					token: process.env.NEXT_DATOCMS_TOKEN,
				}}
			/>
			<Benefits
				subscription={{
					initialData: data,
					query: QueryHomePage,
					token: process.env.NEXT_DATOCMS_TOKEN,
				}}
			/>
		</main>
	);
}
