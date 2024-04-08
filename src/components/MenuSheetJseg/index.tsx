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
import { links } from '@/constants/links';
import Link from 'next/link';
import { Button } from '../ui/button';
import { FaWhatsapp } from 'react-icons/fa6';

export default function MenuSheetJseg() {
	return (
		<div className='flex lg:hidden'>
			<Sheet>
				<SheetTrigger className='text-stone-100'>
					<AlignJustify
						className='text-stone-900'
						size={40}
					/>
				</SheetTrigger>
				<SheetContent className='bg-stone-50 flex flex-col justify-start gap-40 items-center text-stone-900'>
					<SheetHeader className='text-stone-900 '>
						<SheetTitle className='text-stone-900 text-xl mt-5'>
							<a href='/'>
								<Image
									src={logo}
									alt='Logo JSEG Equipamentos'
									width={220}
									height={80}
								/>
							</a>
						</SheetTitle>
					</SheetHeader>

					<ul className='gap-5 font-semibold flex flex-col'>
						{links.map((l, index) => {
							return (
								<Link
									key={index}
									className='hover:text-brand-green-500 group transition-all duration-300 ease-linear text-xl flex flex-col'
									href={l.href}>
									<SheetClose>
										<li className='text-stone-700 text-xl hover:text-brand-green-500 transition-all ease-linear duration-200'>
											{l.label}
										</li>
									</SheetClose>
								</Link>
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
