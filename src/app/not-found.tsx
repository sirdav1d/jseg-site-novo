/** @format */

import React from 'react';
import LotttieComponent from '@/components/Lottie';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Container from '@/components/Container';
import notFound from '@/assets/lotties/notfound.json';

export default function NotFound() {
	return (
		<div>
			<Container>
				<div className='flex flex-col items-center justify-center w-full mt-20 m-auto gap-20 h-full'>
					<h2 className='font-bold text-brand-green-500 text-3xl'>
						Página Não Encontrada
					</h2>
					<Link
						href={'/'}
						legacyBehavior>
						<Button
							variant={'brand'}
							className='group text-xl py-4 pl-5 pr-3'>
							Voltar Ao Site
							<ChevronRight
								size={28}
								className='group-hover:translate-x-2 transition-all duration-200 ease-linear'
							/>
						</Button>
					</Link>
					<LotttieComponent data={notFound}></LotttieComponent>
				</div>
			</Container>
		</div>
	);
}
