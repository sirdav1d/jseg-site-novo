/** @format */

import { request } from '@/lib/datocms';
import { Query } from '@/lib/queries';
import ContentAlarm from './ContentAlarm';

export default async function Alarm() {
	const data: any = await request({
		query: Query,
		revalidate: 30,
	});
	return (
		<main className='overflow-x-hidden'>
			<ContentAlarm
				subscription={{
					initialData: data,
					query: Query,
					token: process.env.NEXT_DATOCMS_TOKEN,
				}}
			/>
		</main>
	);
}
