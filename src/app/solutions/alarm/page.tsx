/** @format */

import { request } from '@/lib/datocms';
import { QueryAlarm } from '@/lib/queries';
import WrapperRequest from '../../../components/WrapperRequest';

export default async function Alarm() {
	const data: any = await request({
		query: QueryAlarm,
		revalidate: 30,
	});
	return (
		<main className='overflow-x-hidden'>
			<WrapperRequest
				subscription={{
					initialData: data,
					query: QueryAlarm,
					token: process.env.NEXT_DATOCMS_TOKEN,
				}}
				page='alarm'
			/>
		</main>
	);
}
