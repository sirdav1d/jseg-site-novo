/** @format */

import React from 'react';
import Image from 'next/image';
import logo from '@/assets/images/logo_jseg.png';
import Container from '../Container';
import NavigationJseg from '../NavigationJseg';
import MenuSheetJseg from '../MenuSheetJseg';
import { MotionDiv } from '../MotionComponents';
import Link from 'next/link';
import { Button } from '../ui/button';
import { FaWhatsapp } from 'react-icons/fa6';

export default function Header() {
	return (
		<MotionDiv
			initial={{ y: '-100%' }}
			animate={{ y: 0 }}
			transition={{ delay: 1, duration: 0.5, ease: 'linear' }}
			className=' bg-zinc-50/40 backdrop-blur-sm border-b border-zinc-600/10 '>
			<Container>
				<div className='flex justify-between py-4 w-full items-center'>
					<a href='/'>
						<Image
							src={logo}
							width={240}
							height={48}
							alt='Logo JSEG Equipamentos'></Image>
					</a>
					<div className='hidden xl:flex gap-20 '>
						<NavigationJseg />
						<Link
							href={'/'}
							target='_blank'>
							<Button
								variant={'brand'}
								className='flex gap-2  transition-all duration-200 ease-linear rounded-lg drop-shadow-lg hover:drop-shadow-xl text-base text-zinc-50 hover:bg-brand-green-700'>
								<FaWhatsapp size={24} />
								Whatsapp
							</Button>
						</Link>
					</div>
					<MenuSheetJseg />
				</div>
			</Container>
		</MotionDiv>
	);
}
