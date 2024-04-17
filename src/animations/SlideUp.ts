/** @format */

import { Variants } from 'framer-motion';

export const SlideUp: Variants = {
	open: {
		opacity: 1,
		y: 0,
	},
	close: {
		opacity: 0,
		y: -40,
	},
};
