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
				</SheetContent>
			</Sheet>
		</div>
	);
}
