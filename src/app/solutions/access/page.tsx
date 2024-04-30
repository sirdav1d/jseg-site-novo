/** @format */

import { request } from '@/lib/datocms';
import { Query } from '@/lib/queries';
import ContentAccess from './ContentAccess';

export default async function Access() {
	const data: any = await request({
		query: Query,
		revalidate: 30,
	});
	return (
		<main className='overflow-x-hidden'>
			<ContentAccess
				subscription={{
					initialData: data,
					query: Query,
					token: process.env.NEXT_DATOCMS_TOKEN,
				}}
			/>
		</main>
	);
}
