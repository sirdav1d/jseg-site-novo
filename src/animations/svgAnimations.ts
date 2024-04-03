/** @format */

import { Variants, spring } from 'framer-motion';

export const SVGVariants: Variants = {
	open: {
		scale: 1,
		pathLength: 1,
		transition: {
			duration: 1,
			delay: 0.2,
			type: 'spring',
		},
	},
	close: {
		scale: 0,
		pathLength: 0,
	},
};
