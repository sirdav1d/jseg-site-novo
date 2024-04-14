/** @format */

import { Variants } from 'framer-motion';

export const SlideUp: Variants = {
	open: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			delay: 0.2,
			ease: 'linear',
		},
	},
	close: {
		opacity: 0,
		y: '-50%',
	},
};
