/** @format */

import React from 'react';

export default function Container({ children }: { children: React.ReactNode }) {
	return (
		<div className='2xl:max-w-7xl h-full 2xl:w-full  mx-4 2xl:mx-auto '>
			{children}
		</div>
	);
}
