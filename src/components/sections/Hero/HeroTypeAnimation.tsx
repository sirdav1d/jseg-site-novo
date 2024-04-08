/** @format */

import { TypeAnimation } from 'react-type-animation';

export default function HeroTypeAnimation({ words }: { words: string[] }) {
	return (
		<TypeAnimation
			sequence={[
				// Same substring at the start will only be typed out once, initially
				words[0],
				1500, // wait 1s before replacing "Mice" with "Hamsters"
				words[1],
				1500,
				words[2],
				1500,
			]}
			wrapper='span'
			speed={40}
			cursor={false}
			repeat={Infinity}
		/>
	);
}
