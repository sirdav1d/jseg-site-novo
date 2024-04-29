/** @format */

import Divider from '@/components/Divider';
import HeroPages from '@/components/HeroPages';
import ContactInfo from '@/components/sections/ContactInfo';

export default function Contact() {
	return (
		<>
			<HeroPages
				heading={'Preencha Nosso Formulário Abaixo E Faça Um Orçamento'}
				subheadline={
					'Entre em contato conosco para tirar dúvidas, solicitar informações sobre nossos produtos, ou simplesmente para dizer olá. Estamos prontos para atendê-lo!'
				}
				anchor={'#formComponent'}></HeroPages>

			<ContactInfo />
		</>
	);
}
