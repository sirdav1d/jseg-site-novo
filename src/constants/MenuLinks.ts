/** @format */

import {
	Cctv,
	ContactRound,
	Home,
	Siren,
	UsersRound,
	BrainCircuit,
	Wifi,
	Phone,
	Construction,
} from 'lucide-react';

export const menuLinks = [
	{ href: '/', label: 'Home', icon: Home },
	{ href: '/about', label: 'Sobre Nós', icon: UsersRound },
	{ href: '/solutions/cftv', label: 'Câmeras De Segurança', icon: Cctv },
	{ href: '/solutions/internet', label: 'Equipamentos De Rede', icon: Wifi },
	{
		href: '/solutions/smartHome',
		label: 'Casa Inteligente',
		icon: BrainCircuit,
	},
	{ href: '/solutions/alarm', label: 'Sistemas De Alarme', icon: Siren },
	{ href: '/solutions/phone', label: 'Telefonia Corporativa', icon: Phone },
	{
		href: '/solutions/access',
		label: 'Controle De Acesso',
		icon: Construction,
	},
	{ href: '/contact', label: 'Contato', icon: ContactRound },
];
