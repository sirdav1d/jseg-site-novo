/** @format */

import React from 'react';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '../ui/sheet';
import { AlignJustify } from 'lucide-react';
import Image from 'next/image';
import logo from '@/assets/images/logo_jseg.png';
import { menuLinks } from '@/constants/MenuLinks';
import Link from 'next/link';
import { Button } from '../ui/button';
import { FaWhatsapp } from 'react-icons/fa6';

export default function MenuSheetJseg() {
	return (
		<div className='flex xl:hidden'>
			<Sheet>
				<SheetTrigger className='text-stone-100'>
					<AlignJustify
						aria-label='Abrir Menu'
						name='Abrir Menu'
						className='text-stone-900'
						size={40}
					/>
				</SheetTrigger>
				<SheetContent className='bg-stone-50 flex flex-col justify-between gap-8 items-center text-stone-900 border-l-4 border-brand-green-500'>
					<SheetHeader className='text-stone-900 '>
						<SheetTitle className='text-stone-900 text-xl mt-5'>
							<a href='/'>
								<Image
									src={logo}
									alt='Logo JSEG Equipamentos'
									width={180}
									height={64}
								/>
							</a>
						</SheetTitle>
					</SheetHeader>

					<ul className='gap-7 flex flex-col text-justify'>
						{menuLinks.map((l, index) => {
							return (
								<li key={index}>
									<Link
										className='hover:text-brand-green-500 group transition-all duration-300 ease-linear text-xl flex flex-col'
										href={l.href}>
										<SheetClose className='flex gap-2'>
											<l.icon color='rgb(3 166 14)' />
											<p className='text-stone-700 text-lg font-medium rounded-md hover:text-brand-green-500 transition-all ease-linear duration-200'>
												{l.label}
											</p>
										</SheetClose>
									</Link>
								</li>
							);
						})}
					</ul>
					<Link
						href={'/'}
						target='_blank'>
						<Button
							variant={'brand'}
							className='flex gap-4 bg-left transition-all duration-200 ease-linear hover:bg-right bg-[length:496px_100px] rounded-lg drop-shadow-lg hover:drop-shadow-xl text-xl text-zinc-50 hover:bg-brand-green-700'>
							<FaWhatsapp size={28} />
							Whatsapp
						</Button>
					</Link>
				</SheetContent>
			</Sheet>
		</div>
	);
}
