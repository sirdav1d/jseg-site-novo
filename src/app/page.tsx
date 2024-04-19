/** @format */

import ContentHome from '@/components/ContentHome';
import WrapperRequest from '@/components/WrapperRequest';
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
			<WrapperRequest
				subscription={{
					initialData: data,
					query: QueryHomePage,
					token: process.env.NEXT_DATOCMS_TOKEN,
				}}
				page={'home'}></WrapperRequest>
		</main>
	);
}
