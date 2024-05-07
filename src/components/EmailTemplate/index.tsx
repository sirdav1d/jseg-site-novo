/** @format */

import {
	Body,
	Container,
	Head,
	Hr,
	Html,
	Preview,
	Section,
	Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';
import React from 'react';

interface EmailTemplateProps {
	fullName: string;
	email?: string;
	cel?: string;
	sector?: string;
	role?: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
	fullName,
	cel,
	email,
	sector,
	role,
}) => (
	<Html>
		<Head />
		<Preview>Você Recebeu Um Novo Lead!</Preview>
		<Tailwind>
			<Body className='bg-stone-200 text-stone-900 p-8'>
				<Container>
					<Section className='bg-stone-50 border border-stone-950/80 rounded-lg p-6'>
						<Text className='text-center font-bold text-xl'>
							{fullName} Preencheu o formulário em seu Website, confira os dados
							enviados abaixo:
						</Text>
						<Hr />
						<Text className='px-2 mx-auto'>{fullName}</Text>
						<Text className='px-2 mx-auto'>{email}</Text>
						<Text className='px-2 mx-auto'>{cel}</Text>
						<Hr />
						<Text className='px-2 mx-auto'>{sector}</Text>
						<Hr />
						<Text className='px-2 mx-auto'>{role}</Text>
						<Hr />
						<Text className='px-2 mx-auto text-xs text-stone-400'>
							Retornaremos em breve com novidades
						</Text>
					</Section>
				</Container>
			</Body>
		</Tailwind>
	</Html>
);
