/** @format */

import React from 'react';
import { MotionPath, MotionSVG } from '@/components/MotionComponents';
import { SVGVariants } from '@/animations/svgAnimations';

export default function Alarm() {
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
				d='M7 18v-6a5 5 0 1 1 10 0v6'
			/>
			<MotionPath
				variants={SVGVariants}
				initial='close'
				animate={'open'}
				d='M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z'
			/>
			<MotionPath
				variants={SVGVariants}
				initial='close'
				animate={'open'}
				d='M21 12h1'
			/>
			<MotionPath
				variants={SVGVariants}
				initial='close'
				animate={'open'}
				d='M18.5 4.5 18 5'
			/>
			<MotionPath
				variants={SVGVariants}
				initial='close'
				animate={'open'}
				d='M2 12h1'
			/>
			<MotionPath
				variants={SVGVariants}
				initial='close'
				animate={'open'}
				d='M12 2v1'
			/>
			<MotionPath
				variants={SVGVariants}
				initial='close'
				animate={'open'}
				d='m4.929 4.929.707.707'
			/>
			<MotionPath
				variants={SVGVariants}
				initial='close'
				animate={'open'}
				d='M12 12v6'
			/>
		</MotionSVG>
	);
}
