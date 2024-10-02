/** @format */

import logo from '@/assets/images/logo_jseg.png';
import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa6';
import Container from '../Container';
import MenuSheetJseg from '../MenuSheetJseg';
import NavigationJseg from '../NavigationJseg';
import { Button } from '../ui/button';

export default function Header() {
	return (
		<div className=' bg-zinc-50/40 backdrop-blur-sm border-b border-zinc-600/10 z-[999999999999999999999999999]'>
			<Container>
				<div className='flex justify-between py-4 w-full items-center'>
					<a href='/'>
						<Image
							src={logo}
							width={258}
							height={53}
							alt='Logo JSEG Equipamentos'></Image>
					</a>
					<div className='hidden xl:flex gap-20 z-50'>
						<NavigationJseg />
						<a
							id='WhatsappHeader'
							href={
								'https://api.whatsapp.com/send?phone=5521999624160&text=Ol%C3%A1,%20estava%20navegando%20em%20seu%20site%20institucional%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento'
							}
							target='_blank'>
							<Button className='flex gap-2 px-4 py-2 bg-brand-green-700 transition-all duration-200 ease-linear rounded-lg drop-shadow-lg hover:drop-shadow-xl text-base text-zinc-50 hover:bg-brand-green-500'>
								<FaWhatsapp size={24} />
								Whatsapp
							</Button>
						</a>
					</div>
					<MenuSheetJseg />
				</div>
			</Container>
		</div>
	);
}
