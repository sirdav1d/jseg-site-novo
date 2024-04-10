/** @format */

import Feature from '@/components/sections/Feature';
import HeroSection from '@/components/sections/Hero';
import ServicesList from '@/components/sections/ServicesList';

export default function Home() {
	return (
		<main>
			<HeroSection />
			<ServicesList />
			<Feature />
		</main>
	);
}
