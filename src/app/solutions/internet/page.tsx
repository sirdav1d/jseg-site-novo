/** @format */

import { request } from '@/lib/datocms';
import { Query } from '@/lib/queries';
import ContentInternet from './ContentInternet';

export default async function Internet() {
	const data: any = await request({
		query: Query,
	});
	return (
		<main className='overflow-x-hidden'>
			<ContentInternet
				subscription={{
					initialData: data,
					query: Query,
					token: process.env.NEXT_DATOCMS_TOKEN,
				}}
				
			/>
		</main>
	);
}
