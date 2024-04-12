/** @format */

import React from 'react';
import { HoverBorderGradient } from '../ui/hover-border-gradient';
import { MotionDiv } from '../MotionComponents';
import { RevealRight } from '@/animations/RevealRight';

export default function TagComponent({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<MotionDiv
			variants={RevealRight}
			whileInView='open'
			transition={{ delay: 0.8, duration: 0.5, ease: 'linear' }}
			viewport={{ once: true }}
			initial='close'>
			<HoverBorderGradient className='text-xs'>{children}</HoverBorderGradient>
		</MotionDiv>
	);
}
