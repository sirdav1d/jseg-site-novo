/** @format */

import React from 'react';
import { HoverBorderGradient } from '../ui/hover-border-gradient';

export default function TagComponent({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<HoverBorderGradient className='text-xs'>{children}</HoverBorderGradient>
		</>
	);
}
