/** @format */

'use client';

import { sendEmail } from '@/actions/send';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { formSchema } from '@/helpers/formSchemaHelper';
import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '../ui/select';

export default function FormComponent() {
	const [disabled, setDisabled] = useState(true);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			name: '',
			cel: '',
			sector: '',
			role: '',
			consent: false,
		},
	});
	const { toast } = useToast();

	useEffect(() => {
		const cel = form.getValues('cel');
		const name = form.getValues('name');
		const email = form.getValues('email');
		const consent = form.getValues('consent');

		if (!cel || !name || !email || !consent) {
			setDisabled(true);
		} else {
			setDisabled(false);
		}
	}, [form.formState, disabled]);

	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		try {
			sendEmail(values);
			toast({
				title: 'Formulário Enviado Com Sucesso 🚀',
				description: 'Em breve, nosso setor comercial entrará em contato ',
				variant: 'success',
			});
			form.reset();
			setDisabled(true);

			console.log(values);
		} catch (error) {
			console.log(error);
			toast({
				title: 'Algo Deu Errado',
				description: 'Não foi possível enviar sua mensagem, tente novamente',
				variant: 'destructive',
			});
		}
		setDisabled(true);
	}

	return (
		<div className=' w-full flex justify-center lg:justify-end'>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='border rounded-lg border-brand-green-500/20 shadow-cardShadow flex flex-col bg-white items-center py-5 px-10 justify-center gap-7 w-full lg:max-w-[480px]'>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem className='w-full flex flex-col gap-1'>
								<FormLabel className=' font-bold text-base flex gap-1'>
									<span className='text-sm text-red-500'>*</span>
									E-mail:
								</FormLabel>
								<FormControl>
									<Input
										required
										className='bg-stone-50 border-b rounded-sm border-brand-green-500 focus-visible:ring-1 focus-visible:ring-brand-green-300'
										placeholder='Digite Seu E-mail'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='name'
						render={({ field }) => (
							<FormItem className='w-full flex flex-col gap-1'>
								<FormLabel className=' font-bold text-base flex gap-1'>
									<span className='text-sm text-red-500'>*</span>
									Nome Completo:
								</FormLabel>
								<FormControl>
									<Input
										required
										className='bg-stone-50 border-b rounded-sm border-brand-green-500 focus-visible:ring-1 focus-visible:ring-brand-green-300'
										placeholder='Digite Seu Nome Completo'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='cel'
						render={({ field }) => (
							<FormItem className='w-full flex flex-col gap-1'>
								<FormLabel
									aria-required
									className=' font-bold text-base flex gap-1'>
									<span className='text-sm text-red-500'>*</span>
									Telefone:
								</FormLabel>
								<FormControl>
									<Input
										required
										className='bg-stone-50 border-b rounded-sm border-brand-green-500 focus-visible:ring-1 focus-visible:ring-brand-green-300'
										placeholder='Digite Seu Telefone'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='role'
						render={({ field }) => (
							<FormItem className='w-full flex flex-col gap-1'>
								<FormLabel
									aria-required
									className=' font-bold text-base flex gap-1'>
									<span className='text-sm text-red-500'>*</span>
									Ambiente:
								</FormLabel>
								<FormControl>
									<RadioGroup
										className='flex w-full justify-between items-center checked:bg-brand-green-500'
										required
										onValueChange={field.onChange}
										defaultValue={field.value}
										{...field}>
										<FormItem className='flex items-center space-x-3 space-y-0'>
											<FormControl>
												<RadioGroupItem
													value='Residência'
													className='border-2 border-brand-green-500'
												/>
											</FormControl>
											<FormLabel className='font-normal'>Residência</FormLabel>
										</FormItem>
										<FormItem className='flex items-center space-x-3 space-y-0'>
											<FormControl>
												<RadioGroupItem
													className='border-2 border-brand-green-500'
													value='Condomínio'
												/>
											</FormControl>
											<FormLabel className='font-normal'>Condomínio</FormLabel>
										</FormItem>
										<FormItem className='flex items-center space-x-3 space-y-0'>
											<FormControl>
												<RadioGroupItem
													className='border-2 border-brand-green-500'
													value='Empresa'
												/>
											</FormControl>
											<FormLabel className='font-normal'>Empresa</FormLabel>
										</FormItem>
									</RadioGroup>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='sector'
						render={({ field }) => (
							<FormItem className='w-full flex flex-col gap-1 '>
								<FormLabel
									aria-required
									className=' font-bold text-base flex gap-1'>
									<span className='text-sm text-red-500'>*</span>Solução
									Desejada:
								</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
									{...field}>
									<FormControl>
										<SelectTrigger className='text-stone-900 placeholder:font-light'>
											<SelectValue
												className='font-bold'
												placeholder='Selecione o setor em que deseja atendimento'
											/>
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										<SelectItem value='Casa Inteligente'>
											Casa Inteligente
										</SelectItem>
										<SelectItem value='Sistemas CFTV'>Sistemas CFTV</SelectItem>
										<SelectItem value='Equipamentos de Rede'>
											Equipamentos de Rede
										</SelectItem>
										<SelectItem value='Controle de Acesso'>
											Controle de Acesso
										</SelectItem>
										<SelectItem value='Telefonia Corporativa'>
											Telefonia Corporativa
										</SelectItem>
										<SelectItem value='Sistemas de Alarme'>
											Sistemas de Alarme
										</SelectItem>
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='consent'
						render={({ field }) => (
							<FormItem className='w-full flex gap-2 items-center justify-center'>
								<FormControl>
									<Checkbox
										checked={field.value}
										onCheckedChange={field.onChange}
										required
										className='bg-stone-50 border-2 checked:bg-brand-green-300 border-brand-green-500 focus-visible:ring-1 focus-visible:ring-brand-green-300'
									/>
								</FormControl>
								<FormLabel className='text-xs text-stone-600 flex gap-1 flex-row'>
									<p>
										Aceito receber contatos, {''}
										<a
											className='underline text-brand-green-500 duration-200 ease-linear transition-all'
											href='/terms'
											target='_blank'
											rel='noopener noreferrer'>
											Termos de Uso
										</a>
										, {''} e {''}
										<a
											className='underline text-brand-green-500 duration-200 ease-linear transition-all'
											href='/politics'
											target='_blank'
											rel='noopener noreferrer'>
											Políticas de Privacidade
										</a>
									</p>
								</FormLabel>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button
						variant={'brand'}
						disabled={form.formState !== null ? disabled : true}
						className=' active:bg-brand-green-500 disabled:grayscale hover:disabled:grayscale checked:bg-right w-full tracking-wider text-xl py-4 pl-5 pr-3 flex gap-4 bg-brand-green-500 bg-left transition-all duration-200 ease-linear hover:bg-brand-green-700 group drop-shadow-xl'
						type='submit'>
						Enviar Mensagem
						<ChevronRight
							size={28}
							className='group-hover:translate-x-2 transition-all duration-200 ease-linear'
						/>
					</Button>
				</form>
			</Form>
		</div>
	);
}
