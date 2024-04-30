/** @format */

import { request } from '@/lib/datocms';
import { Query } from '@/lib/queries';
import ContentCFTV from './ContentCFTV';

export default async function Cftv() {
	const data: any = await request({
		query: Query,
	});
	return (
		<main className='overflow-x-hidden'>
			<ContentCFTV
				subscription={{
					initialData: data,
					query: Query,
					token: process.env.NEXT_DATOCMS_TOKEN,
				}}
			
			/>
		</main>
	);
}
