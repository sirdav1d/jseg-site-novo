/** @format */

import { request } from '@/lib/datocms';
import { QueryService } from '@/lib/queries';
import WrapperRequest from '../../../components/WrapperRequest';

export default async function Internet() {
	const data: any = await request({
		query: QueryService,
		revalidate: 30,
	});
	return (
		<main className='overflow-x-hidden'>
			<WrapperRequest
				subscription={{
					initialData: data,
					query: QueryService,
					token: process.env.NEXT_DATOCMS_TOKEN,
				}}
				page='internet'
			/>
		</main>
	);
}
