/** @format */

'use client';
import React from 'react';
import Lottie from 'lottie-react';

export default function LotttieComponent({ data }: { data: any }) {
	return (
		<div className='w-full lg:w-1/2 mx-auto'>
			<Lottie
				animationData={data}
				loop={true}></Lottie>
		</div>
	);
}
