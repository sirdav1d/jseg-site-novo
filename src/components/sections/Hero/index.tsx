/** @format */

import { request } from '@/lib/datocms';
import ContentHero from './ContentHero';
import { queryHeroSection } from '@/lib/queries';

export default async function HeroSection() {
	const data: any = await request({
		query: queryHeroSection,
		revalidate: 30,
	});

	return (
		<div className='w-full h-[94vh] text-zinc-900'>
			<ContentHero
				subscription={{
					initialData: data,
					query: queryHeroSection,
					token: process.env.NEXT_DATOCMS_TOKEN,
				}}></ContentHero>
		</div>
	);
}
