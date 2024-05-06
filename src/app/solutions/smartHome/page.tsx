/** @format */

import { request } from '@/lib/datocms';
import { Query } from '@/lib/queries';
import ContentSmartHome from './ContentSmartHome';

export default async function SmartHome() {
	const data: any = await request({
		query: Query,
		revalidate: 30,
	});
	return (
		<main className='overflow-x-hidden'>
			<ContentSmartHome
				subscription={{
					initialData: data,
					query: Query,
					token: process.env.NEXT_DATOCMS_TOKEN,
				}}
			/>
		</main>
	);
}
