/** @format */

import { Variants } from 'framer-motion';

export const SlideRight: Variants = {
	open: {
		scale: 1,
		opacity: 1,
		x: 0,
	},
	close: {
		scale: 0,
		opacity: 0,
		x: -200,
	},
};
