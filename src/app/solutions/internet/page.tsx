/** @format */

import { request } from '@/lib/datocms';
import { QueryInternet } from '@/lib/queries';
import WrapperRequest from '../../../components/WrapperRequest';

export default async function Internet() {
	const data: any = await request({
		query: QueryInternet,
	});
	return (
		<main className='overflow-x-hidden'>
			<WrapperRequest
				subscription={{
					initialData: data,
					query: QueryInternet,
					token: process.env.NEXT_DATOCMS_TOKEN,
				}}
				page='internet'
			/>
		</main>
	);
}
