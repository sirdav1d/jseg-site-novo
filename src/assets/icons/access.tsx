/** @format */

import React from 'react';
import { MotionPath, MotionSVG } from '@/components/MotionComponents';
import { SVGVariants } from '@/animations/svgAnimations';

export default function Access() {
	return (
		<MotionSVG
			animate={{ stroke: '#03A60E' }}
			initial={{ stroke: '#0f0f0f' }}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			stroke-width='2'
			stroke-linecap='round'
			stroke-linejoin='round'>
			<rect
				x='2'
				y='6'
				width='20'
				height='8'
				rx='1'
			/>
			<MotionPath
				variants={SVGVariants}
				initial='close'
				animate={'open'}
				d='M17 14v7'
			/>
			<MotionPath
				variants={SVGVariants}
				initial='close'
				animate={'open'}
				d='M7 14v7'
			/>
			<MotionPath
				variants={SVGVariants}
				initial='close'
				animate={'open'}
				d='M17 3v3'
			/>
			<MotionPath
				variants={SVGVariants}
				initial='close'
				animate={'open'}
				d='M7 3v3'
			/>
			<MotionPath
				variants={SVGVariants}
				initial='close'
				animate={'open'}
				d='M10 14 2.3 6.3'
			/>
			<MotionPath
				variants={SVGVariants}
				initial='close'
				animate={'open'}
				d='m14 6 7.7 7.7'
			/>
			<MotionPath
				variants={SVGVariants}
				initial='close'
				animate={'open'}
				d='m8 6 8 8'
			/>
		</MotionSVG>
	);
}
