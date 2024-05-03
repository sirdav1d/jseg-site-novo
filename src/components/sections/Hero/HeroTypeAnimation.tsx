/** @format */

'use client';

import { MotionSpan } from '@/components/MotionComponents';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface HeroTypeAnimationprops {
	words: string[];
}
export default function HeroTypeAnimation(props: HeroTypeAnimationprops) {
	const [state, setState] = useState(props.words[0]);

	function handleChange() {
		setTimeout(() => {
			if (state === props.words[0]) {
				setState(props.words[1]);
			}
		}, 1500);
		setTimeout(() => {
			if (state === props.words[1]) setState(props.words[2]);
		}, 1500);
		setTimeout(() => {
			if (state === props.words[2]) {
				setState(props.words[0]);
			}
		}, 1500);

		
	}

	useEffect(() => {
		handleChange();
	}, [state, setState]);

	return (
		<AnimatePresence
			mode='wait'
			key={state}>
			<MotionSpan
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.2, ease: 'linear' }}
				initial={{ y: -40, opacity: 0 }}
				exit={{ y: 40, opacity: 0 }}>
				{state}
			</MotionSpan>
		</AnimatePresence>
	);
}
