/** @format */

import logo from '@/assets/images/logo_jseg.png';
import { siteMap } from '@/constants/siteMap';
import { Instagram, Mail } from 'lucide-react';
import Image from 'next/image';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa6';
import Container from '../Container';

export default function Footer() {
	return (
		<>
			<div className='w-full z-50 h-[2px] rounded-full bg-bgDivider'></div>
			<div
				id='contact'
				className='w-full h-full bg-brand-blue-900 pt-7 bg-bgFooter'>
				<Container>
					<>
						<Image
							className='mb-7 mx-auto'
							src={logo}
							width={200}
							height={100}
							alt='logo JSEG Equipamentos de Rede e Segurança'></Image>
						<div className='w-full flex flex-col lg:flex-row gap-7 items-end'>
							<div className='flex w-full flex-col justify-between'>
								<div className='flex flex-col gap-3 items-start w-full mb-10'>
									<h2 className=' tracking-wider text-zinc-900 font-bold text-center m7-2'>
										Siga-nos Nas Redes Sociais
									</h2>
									<div className=' flex gap-5 items-center justify-center'>
										<a
											aria-label='contato direto via instagram'
											href='https://www.instagram.com/defenderinfo/'
											target='_blank'
											rel='noopener noreferrer'>
											<Instagram
												className='hover:text-brand-green-500 text-brand-green-500 transition-all duration-300 ease-linear lg:text-zinc-900'
												size={32}
											/>
										</a>

										<a
											aria-label='contato direto via whatsapp'
											className='hover:text-brand-green-500 transition-all duration-300 ease-linear text-brand-green-500 lg:text-zinc-900'
											href='https://api.whatsapp.com/send?phone=5521998966588&text=Ol%C3%A1,%20estava%20navegando%20em%20seu%20site%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento'
											target='_blank'
											rel='noopener noreferrer'>
											<FaWhatsapp size={32} />
										</a>
										<a
											aria-label='contato direto via facebook'
											className='hover:text-brand-green-500 transition-all duration-300 ease-linear text-brand-green-500 lg:text-zinc-900'
											href='https://www.facebook.com/defenderinformatica'
											target='_blank'
											rel='noopener noreferrer'>
											<FaFacebook size={32} />
										</a>
										<a
											aria-label='pagina de envio de email'
											href='/contact'
											rel='noopener noreferrer'>
											<Mail
												className='hover:text-brand-green-500 transition-all duration-300 ease-linear text-brand-green-500 lg:text-zinc-900'
												size={32}
											/>
										</a>
									</div>
								</div>
								<div className='flex flex-col gap-1 '>
									<h2 className=' tracking-wide text-zinc-900 font-bold text-lg'>
										Telefone
									</h2>
									<p className='text-zinc-700 text-sm lg:text-base'>
										(21) 99896 - 6588
									</p>
								</div>
							</div>

							<div className='grid lg:grid-cols-2 gap-4 w-full h-fit '>
								{siteMap.map((s, index) => {
									return (
										<a
											href={s.href}
											className='text-zinc-900 text-sm font-medium  w-fit  hover:text-brand-green-500 transition-all duration-300 ease-linear '
											key={index}>
											{s.label}
										</a>
									);
								})}
							</div>
						</div>

						<div className='w-full z-50 h-[2px] rounded-full bg-bgDivider my-4 lg:mt-10 lg:mb-5'></div>

						<div className='w-full text-center flex pb-5 lg:justify-center text-zinc-900  tracking-wide  gap-3 items-center text-[8px] lg:text-xs flex-col md:flex-row'>
							<p>
								Desenvolvido por {''}
								<a
									className='transition-all duration-300 ease-linear text-zinc-900 hover:text-brand-green-500 '
									href='http://tarsprojetos.com/'
									target='_blank'
									rel='noopener noreferrer'>
									Tars Projetos LTDA
								</a>
								® 2024 - Todos os Direitos Reservados
							</p>
						</div>
					</>
				</Container>
			</div>
		</>
	);
}
