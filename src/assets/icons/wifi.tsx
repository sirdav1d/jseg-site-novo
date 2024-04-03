/** @format */

import React from 'react';
import { MotionPath, MotionSVG } from '@/components/MotionComponents';
import { SVGVariants } from '@/animations/svgAnimations';

export default function Wifi() {
	return (
		<MotionSVG
			animate={{ stroke: '#03A60E' }}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			stroke-width='2'
			stroke-linecap='round'
			stroke-linejoin='round'>
			<MotionPath
				variants={SVGVariants}
				initial='close'
				animate={'open'}
				d='M12 20h.01'
			/>
			<MotionPath
				variants={SVGVariants}
				initial='close'
				animate={'open'}
				d='M2 8.82a15 15 0 0 1 20 0'
			/>
			<MotionPath
				variants={SVGVariants}
				initial='close'
				animate={'open'}
				d='M5 12.859a10 10 0 0 1 14 0'
			/>
			<MotionPath
				variants={SVGVariants}
				initial='close'
				animate={'open'}
				d='M8.5 16.429a5 5 0 0 1 7 0'
			/>
		</MotionSVG>
	);
}
