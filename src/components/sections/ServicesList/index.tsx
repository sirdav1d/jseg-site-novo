/** @format */

import { request } from '@/lib/datocms';
import ContentService from './ContentService';
import { queryServicesList } from '@/lib/queries';

export default async function ServicesListSection() {
	const data: any = await request({
		query: queryServicesList,
		revalidate: 30,
	});

	return (
		<div className='w-full  h-full text-zinc-900 py-10'>
			<ContentService
				subscription={{
					initialData: data,
					query: queryServicesList,
					token: process.env.NEXT_DATOCMS_TOKEN,
				}}></ContentService>
		</div>
	);
}
