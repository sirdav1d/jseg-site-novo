/** @format */

import React from 'react';
import Image from 'next/image';
import logo from '@/assets/images/logo_jseg.png';
import Container from '../Container';
import NavigationJseg from '../NavigationJseg';

export default function Header() {
	return (
		<div className='py-4'>
			<Container>
				<div className='flex justify-between w-full items-center'>
					<a href='/'>
						<Image
							src={logo}
							width={264}
							height={64}
							alt='Logo JSEG Equipamentos'></Image>
					</a>
					<div className='hidden lg:flex gap-20 border-l-brand-orange-500 items-center'>
						<NavigationJseg />
					</div>
				</div>
			</Container>
		</div>
	);
}
