/** @format */

import { request } from '@/lib/datocms';
import { Query } from '@/lib/queries';
import ContentPhone from './ContentPhone';

export default async function Phone() {
	const data: any = await request({
		query: Query,
	});
	return (
		<main className='overflow-x-hidden'>
			<ContentPhone
				subscription={{
					initialData: data,
					query: Query,
					token: process.env.NEXT_DATOCMS_TOKEN,
				}}
			
			/>
		</main>
	);
}
