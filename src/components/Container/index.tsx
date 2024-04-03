/** @format */

import React from 'react';

export default function Container({ children }: { children: React.ReactNode }) {
	return (
		<div className='max-w-7xl h-full mx-4 lg:mx-auto '>{children}</div>
	);
}
