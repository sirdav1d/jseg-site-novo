/** @format */

import type { Metadata } from 'next';
import { Montserrat, Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import BannerLGPD from '@/components/BannerLGPD';

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--montserrat',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	display: 'swap',
});
const poppins = Poppins({
	subsets: ['latin'],
	weight: ['300', '400', '500', '800'],
	variable: '--poppins',
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'JSEG Equipamentos | Especializada Em Segurança Eletrõnica',
	description:
		'Loja de Equipamentos de Rede e Segurança, focada no cliente, abrangente em soluções e produtos',
	icons: '/images/frame.png',
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
				<BannerLGPD />
				{children}
				<Toaster />
				<Footer />
			</body>
		</html>
	);
}
