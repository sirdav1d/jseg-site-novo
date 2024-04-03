/** @format */

import React from 'react';

export default function Container({ children }: { children: React.ReactNode }) {
	return (
		<div className='max-w-7xl w-full h-full mx-4 lg:mx-auto'>{children}</div>
	);
}
