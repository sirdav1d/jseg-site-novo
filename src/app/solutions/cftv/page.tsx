/** @format */

import { request } from '@/lib/datocms';
import { QueryCFTV } from '@/lib/queries';
import WrapperRequest from '../../../components/WrapperRequest';

export default async function Cftv() {
	const data: any = await request({
		query: QueryCFTV,
		revalidate: 30,
	});
	return (
		<main className='overflow-x-hidden'>
			<WrapperRequest
				subscription={{
					initialData: data,
					query: QueryCFTV,
					token: process.env.NEXT_DATOCMS_TOKEN,
				}}
				page='cftv'
			/>
		</main>
	);
}
