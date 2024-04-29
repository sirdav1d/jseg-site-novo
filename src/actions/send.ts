/** @format */

'use server';

import { Resend } from 'resend';
import { EmailTemplate } from '@/components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

interface SendEmailProps {
	role: string;
	email: string;
	name: string;
	cel: string;
	sector: string;
}

export async function sendEmail(values: SendEmailProps) {
	const senderEmail = values.email;
	const role = values.role;
	const fullname = values.name;
	const cel = values.cel;
	const sector = values.sector;
	try {
		const data = await resend.emails.send({
			from: 'JSEG Equipamentos - Website Institucional <onboarding@resend.dev>',
			to: 'contato@jsegequipamentos.com.br',
			subject: 'Um Novo Lead Chegou do Seu Site',
			react: EmailTemplate({
				fullName: fullname,
				cel: cel,
				email: senderEmail,
				sector: sector,
				role: role,
			}),
			text: '',
		});
		console.log({ data });
	} catch (err) {
		console.log(err);
	}
}
