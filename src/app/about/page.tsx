/** @format */

import Culture from '@/components/sections/Culture';
import HeroAbout from './HeroAbout';
import Divider from '@/components/Divider';
import Timeline from './Timeline';
import Ratings from '@/components/sections/Ratings';

export default function About() {
	return (
		<div className='h-full'>
			<HeroAbout
				heading={'Descubra Como Transformamos Ideias Em Realidade'}
				subheadline={
					'Explore nossa empresa e como estamos construindo pontes entre pessoas, ideias e tecnologia, impactando positivamente pessoas, famílias e negócios'
				}></HeroAbout>
			<Culture />
			<Divider />
			<Timeline />
			<Divider />
		</div>
	);
}
