/** @format */

import type { Metadata } from 'next';
import { Montserrat, Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--montserrat',
	display: 'swap',
});
const poppins = Poppins({
	subsets: ['latin'],
	weight: ['300', '500', '800'],
	variable: '--poppins',
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'JSEG Equipamentos | Especializada Em Segurança Eletrõnica',
	description:
		'Loja de Equipamentos de Rede e Segurança, focada no cliente, abrangente em soluções e produtos',
    icons:'/images/frame.png'
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='pt-BR'>
			<body className={`${montserrat.variable} ${poppins.variable}`}>
				<Header />
				{children}
			</body>
		</html>
	);
}
