/** @format */

import { AllHomepage } from '@/lib/types';
import ContentHero from './ContentHero';

export default function HeroSection({ data }: { data: AllHomepage }) {
	return (
		<div className='w-full h-[90vh] text-zinc-900'>
			<ContentHero data={data}></ContentHero>
		</div>
	);
}
