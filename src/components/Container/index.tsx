/** @format */

import React from 'react';

export default function Container({ children }: { children: React.ReactNode }) {
	return (
		<div className='max-w-7xl h-full mx-4 xl:mx-auto '>{children}</div>
	);
}
