/** @format */

import Container from '@/components/Container';
import React from 'react';

export default function Terms() {
	return (
		<div className='mt-10 py-10'>
			<Container>
				<div className='grid grid-cols-2 gap-10 w-full'>
					<div>
						<h2 className='text-3xl text-brand-green-500 font-bold'>
							Termos De Uso
						</h2>
						<br />
						<p className='prose w-full prose-base'>
							Ao acessar ao site&nbsp;
							<a
								className='text-brand-green-500 underline'
								href='http://jsegequipamentos.com.br/'>
								Jseg Equipamentos
							</a>
							, concorda em cumprir estes termos de serviço, todas as leis e
							regulamentos aplicáveis ​​e concorda que é responsável pelo
							cumprimento de todas as leis locais aplicáveis. Se você não
							concordar com algum desses termos, está proibido de usar ou
							acessar este site. Os materiais contidos neste site são protegidos
							pelas leis de direitos autorais e marcas comerciais aplicáveis.
						</p>
						<br />
						<h2 className='text-2xl text-brand-green-500 font-bold'>
							Uso de Licença
						</h2>
						<br />
						<p className='prose w-full prose-base'>
							É concedida permissão para baixar temporariamente uma cópia dos
							materiais (informações ou software) no site Jseg Equipamentos ,
							apenas para visualização transitória pessoal e não comercial. Esta
							é a concessão de uma licença, não uma transferência de título e,
							sob esta licença, você não pode:&nbsp;
						</p>
						<ol className='prose w-full prose-base'>
							<li>modificar ou copiar os materiais;&nbsp;</li>
							<li>
								usar os materiais para qualquer finalidade comercial ou para
								exibição pública (comercial ou não comercial);&nbsp;
							</li>
							<li>
								tentar descompilar ou fazer engenharia reversa de qualquer
								software contido no site Jseg Equipamentos;&nbsp;
							</li>
							<li>
								remover quaisquer direitos autorais ou outras notações de
								propriedade dos materiais; ou&nbsp;
							</li>
							<li>
								transferir os materiais para outra pessoa ou 'espelhe' os
								materiais em qualquer outro servidor.
							</li>
						</ol>
						<br />
						<p className='prose w-full prose-base'>
							Esta licença será automaticamente rescindida se você violar alguma
							dessas restrições e poderá ser rescindida por Jseg Equipamentos a
							qualquer momento. Ao encerrar a visualização desses materiais ou
							após o término desta licença, você deve apagar todos os materiais
							baixados em sua posse, seja em formato eletrónico ou impresso.
						</p>
						<br />
						<h2 className='text-2xl text-brand-green-500 font-bold'>
							Isenção de responsabilidade
						</h2>
						<br />
						<p className='prose w-full prose-base'>
							Os materiais no site da Jseg Equipamentos são fornecidos 'como
							estão'. Jseg Equipamentos não oferece garantias, expressas ou
							implícitas, e, por este meio, isenta e nega todas as outras
							garantias, incluindo, sem limitação, garantias implícitas ou
							condições de comercialização, adequação a um fim específico ou não
							violação de propriedade intelectual ou outra violação de direitos.
						</p>
						<br />
						<p className='prose w-full prose-base'>
							Além disso, o Jseg Equipamentos não garante ou faz qualquer
							representação relativa à precisão, aos resultados prováveis ​​ou à
							confiabilidade do uso dos materiais em seu site ou de outra forma
							relacionado a esses materiais ou em sites vinculados a este site.
						</p>
					</div>
					<div>
						<h2 className='text-2xl text-brand-green-500 font-bold'>
							Limitações
						</h2>
						<br />
						<p className='prose w-full prose-base'>
							Em nenhum caso o Jseg Equipamentos ou seus fornecedores serão
							responsáveis ​​por quaisquer danos (incluindo, sem limitação,
							danos por perda de dados ou lucro ou devido a interrupção dos
							negócios) decorrentes do uso ou da incapacidade de usar os
							materiais em Jseg Equipamentos, mesmo que Jseg Equipamentos ou um
							representante autorizado da Jseg Equipamentos tenha sido
							notificado oralmente ou por escrito da possibilidade de tais
							danos. Como algumas jurisdições não permitem limitações em
							garantias implícitas, ou limitações de responsabilidade por danos
							conseqüentes ou incidentais, essas limitações podem não se aplicar
							a você.
						</p>
						<br />
						<h2 className='text-2xl text-brand-green-500 font-bold'>
							Precisão dos materiais
						</h2>
						<br />
						<p className='prose w-full prose-base'>
							Os materiais exibidos no site da Jseg Equipamentos podem incluir
							erros técnicos, tipográficos ou fotográficos. Jseg Equipamentos
							não garante que qualquer material em seu site seja preciso,
							completo ou atual. Jseg Equipamentos pode fazer alterações nos
							materiais contidos em seu site a qualquer momento, sem aviso
							prévio. No entanto, Jseg Equipamentos não se compromete a
							atualizar os materiais.
						</p>
						<br />
						<h2 className='text-2xl text-brand-green-500 font-bold'>Links</h2>
						<br />
						<p className='prose w-full prose-base'>
							O Jseg Equipamentos não analisou todos os sites vinculados ao seu
							site e não é responsável pelo conteúdo de nenhum site vinculado. A
							inclusão de qualquer link não implica endosso por Jseg
							Equipamentos do site. O uso de qualquer site vinculado é por conta
							e risco do usuário.
						</p>

						<br />

						<h3 className='text-2xl text-brand-green-500 font-bold'>
							Modificações
						</h3>
						<br />
						<p className='prose w-full prose-base'>
							O Jseg Equipamentos pode revisar estes termos de serviço do site a
							qualquer momento, sem aviso prévio. Ao usar este site, você
							concorda em ficar vinculado à versão atual desses termos de
							serviço.
						</p>
						<br />
						<h3 className='text-2xl text-brand-green-500 font-bold'>
							Lei aplicável
						</h3>
						<br />
						<p className='prose w-full prose-base'>
							Estes termos e condições são regidos e interpretados de acordo com
							as leis do Jseg Equipamentos e você se submete irrevogavelmente à
							jurisdição exclusiva dos tribunais naquele estado ou localidade.
						</p>
					</div>
				</div>
			</Container>
		</div>
	);
}
