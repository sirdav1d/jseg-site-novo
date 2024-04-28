/** @format */

import Divider from '@/components/Divider';
import HeroPages from '@/components/HeroPages';
import Culture from '@/components/sections/Culture';
import Timeline from './Timeline';

export default function About() {
	return (
		<>
			<HeroPages
				heading={'Descubra Como Transformamos Ideias Em Realidade'}
				subheadline={
					'Explore nossa empresa e saiba como estamos promovendo a inovação e a colaboração entre pessoas, ideias e tecnologia, levando segurança e conforto para famílias e negócios'
				}
				anchor={'#culture'}></HeroPages>
			<Culture />
			<Divider />
			<Timeline />
			<Divider />
		</>
	);
}
