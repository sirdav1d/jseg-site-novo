/** @format */

import React from 'react';
import Image from 'next/image';
import logo from '@/assets/images/logo_jseg.png';
import Container from '../Container';
import NavigationJseg from '../NavigationJseg';
import MenuSheetJseg from '../MenuSheetJseg';

export default function Header() {
	return (
		<div className='py-4  w-full bg-zinc-50/40 backdrop-blur-md'>
			<Container>
				<div className='flex justify-between items-center '>
					<a href='/'>
						<Image
							src={logo}
							width={240}
							height={48}
							alt='Logo JSEG Equipamentos'></Image>
					</a>
					<div className='hidden lg:flex gap-20 border-l-brand-green-500 items-center'>
						<NavigationJseg />
					</div>
					<MenuSheetJseg />
				</div>
			</Container>
		</div>
	);
}
