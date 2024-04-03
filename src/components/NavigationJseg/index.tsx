/** @format */

'use client';

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { links } from '@/constants/links';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavigationJseg() {
	const path = usePathname();
	return (
		<>
			<NavigationMenu>
				<NavigationMenuList className='gap-4 text-stone-700 font-semibold flex flex-col lg:flex-row '>
					{links.map((l, i) => {
						return (
							<>
								{l.label === 'Soluções' ? (
									<>
										<NavigationMenuItem>
											<NavigationMenuTrigger>
												<Link
													href={l.href}
													legacyBehavior
													passHref>
													<NavigationMenuLink className='hover:text-brand-green-500 group transition-all duration-200 ease-in-out text-base xl:text-lg flex flex-col font-semibold'>
														{l.label}
													</NavigationMenuLink>
												</Link>
											</NavigationMenuTrigger>{' '}
											<NavigationMenuContent>
												<ul className='grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
													{l.opt?.map((o, index) => {
														return (
															<li
																key={index}
																className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground '>
																<Link
																	href={o.href}
																	legacyBehavior
																	passHref>
																	<NavigationMenuLink className='hover:text-brand-green-500 group transition-all duration-300 ease-in-out xl:text-lg flex flex-col'>
																		<div className='text-sm font-bold leading-none flex items-center justify-start gap-2'>
																			<o.icon />
																			{o.label}
																		</div>
																		<p className='line-clamp-2 text-stone-700 text-sm leading-snug text-muted-foreground mt-2 font-light'>
																			{o.description}
																		</p>
																	</NavigationMenuLink>
																</Link>
															</li>
														);
													})}
												</ul>
											</NavigationMenuContent>
										</NavigationMenuItem>
									</>
								) : (
									<NavigationMenuItem
										key={i}
										className={`${
											path === l.href
												? 'text-brand-green-500'
												: 'text-stone-700'
										} hover:text-brand-orange-500 transition-all ease-in-out duration-200 font-semibold`}>
										<Link
											href={l.href}
											legacyBehavior
											passHref>
											<NavigationMenuLink className='hover:text-brand-green-500 group transition-all duration-200 ease-in-out text-base xl:text-lg flex flex-col'>
												{l.label}
											</NavigationMenuLink>
										</Link>
									</NavigationMenuItem>
								)}
							</>
						);
					})}
				</NavigationMenuList>
			</NavigationMenu>
		</>
	);
}
