/** @format */

import Divider from '@/components/Divider';
import HeroServices from '@/components/HeroServices';
import Benefits from '@/components/sections/Benefits';
import Feature from '@/components/sections/Feature';
import Ratings from '@/components/sections/Ratings';
import ServicesList from '@/components/sections/ServicesList';
import { DataSmartHome } from '@/lib/types';

export default function ContentSmartHome({ data }: { data: DataSmartHome }) {
	return (
		<>
			<HeroServices data={data.allSmarthomepages[0]} />
			<Divider />
			<ServicesList data={data.allSmarthomepages[0]} />
			<Divider />
			<Feature data={data.allSmarthomepages[0]} />
			<Divider />
			<Ratings data={data.allSmarthomepages[0]} />
			<Benefits data={data.allSmarthomepages[0]} />
		</>
	);
}
