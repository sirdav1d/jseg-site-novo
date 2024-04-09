/** @format */

import { Variants } from 'framer-motion';

export const RevealRight: Variants = {
	open: {
		opacity: 1,
		x: 0,
	},
	close: {
		opacity: 0,
		x: -40,
	},
};
