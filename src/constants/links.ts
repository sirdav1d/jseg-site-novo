/** @format */

import BrainCircuit from '@/assets/icons/brainCircuit';
import Cftv from '@/assets/icons/cftv';
import Wifi from '@/assets/icons/wifi';
import Access from '@/assets/icons/access';
import Phone from '@/assets/icons/phone';
import Alarm from '@/assets/icons/alarm';

export const links = [
	{ href: '/', label: 'Home' },
	{ href: '/about', label: 'Sobre Nós' },
	{
		href: '/solutions',
		label: 'Soluções',
		opt: [
			{
				label: 'Casa Inteligente',
				icon: BrainCircuit,
				description: 'Torne sua casa inteligente com nossas soluções',
				href: '/solutions/smartHome',
			},
			{
				label: 'Equipamentos De Rede',
				icon: Wifi,
				description:
					'Impulsione sua produtividade com nossos equipamentos de rede',
				href: '/solutions/internet',
			},
			{
				label: 'Câmeras De Segurança',
				icon: Cftv,
				description:
					'Garanta sua tranquilidade com nossas câmeras de segurança',
				href: '/solutions/cftv',
			},
			{
				label: 'Controle De Acesso',
				icon: Access,
				description:
					'Proteja seu espaço com nosso sistema de controle de acesso',
				href: '/solutions/access',
			},
			{
				label: 'Telefonia Corporativa',
				icon: Phone,
				description:
					'Comunique-se de forma eficiente com nossas soluções de telefonia corporativa',
				href: '/solutions/phone',
			},
			{
				label: 'Sistemas De Alarme',
				icon: Alarm,
				description:
					'Esteja preparado com nossas opções de sistema de alarme completo',
				href: '/solutions/alarm',
			},
		],
	},
	{ href: '/contact', label: 'Contato' },
];
