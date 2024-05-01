/** @format */

'use client';
import dynamic from 'next/dynamic';

const AnimatedNumbers = dynamic(
	() => {
		return import('react-animated-numbers');
	},
	{ ssr: false },
);

interface NumbersAnimatedHeroProps {
	value: number;
}

export default function NumbersAnimatedHero(props: NumbersAnimatedHeroProps) {
	return (
		<h3 className='text-brand-green-500 font-bold text-2xl lg:text-5xl'>
			<AnimatedNumbers
				includeComma
				animateToNumber={props.value}
				locale='pt-BR'
				transitions={(index) => ({
					type: 'spring',
					duration: index + 0.1,
				})}
			/>
		</h3>
	);
}
