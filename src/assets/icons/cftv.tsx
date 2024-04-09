/** @format */

import React from 'react';
import { MotionPath, MotionSVG } from '@/components/MotionComponents';
import { SVGVariants } from '@/animations/svgAnimations';

export default function Cftv() {
	return (
		<MotionSVG
			animate={{ stroke: '#03A60E' }}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'>
			<MotionPath
				variants={SVGVariants}
				initial='close'
				animate={'open'}
				d='M7 9h.01'
			/>
			<MotionPath
				variants={SVGVariants}
				initial='close'
				animate={'open'}
				d='M16.75 12H22l-3.5 7-3.09-4.32'
			/>
			<MotionPath
				variants={SVGVariants}
				initial='close'
				animate={'open'}
				d='M18 9.5l-4 8-10.39-5.2a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3Z'
			/>
			<MotionPath
				variants={SVGVariants}
				initial='close'
				animate={'open'}
				d='M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15'
			/>
			<MotionPath
				variants={SVGVariants}
				initial='close'
				animate={'open'}
				d='M2 21v-4'
			/>
		</MotionSVG>
	);
}
