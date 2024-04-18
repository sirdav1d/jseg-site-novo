/** @format */

import { request } from '@/lib/datocms';
import { QueryAccess } from '@/lib/queries';
import WrapperRequest from '../../../components/WrapperRequest';

export default async function Access() {
	const data: any = await request({
		query: QueryAccess,
		revalidate: 30,
	});
	return (
		<main className='overflow-x-hidden'>
			<WrapperRequest
				subscription={{
					initialData: data,
					query: QueryAccess,
					token: process.env.NEXT_DATOCMS_TOKEN,
				}}
				page='access'
			/>
		</main>
	);
}
