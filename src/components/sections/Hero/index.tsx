/** @format */

import { AllHomepageHero, queryHeroSection, request } from '@/lib/datocms';
import { Image as ResponsiveImage } from 'react-datocms';
import ContentHero from './ContentHero';

export default async function HeroSection() {
	const data: any = await request({
		query: queryHeroSection,
		revalidate: 30,
	});

	return (
		<div className='w-full h-screen text-zinc-900'>
			<ContentHero
				subscription={{
					initialData: data,
					query: queryHeroSection,
					token: process.env.NEXT_DATOCMS_TOKEN,
				}}></ContentHero>
		</div>
	);
}
