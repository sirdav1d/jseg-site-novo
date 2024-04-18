/** @format */

import { request } from '@/lib/datocms';
import { QueryPhone} from '@/lib/queries';
import WrapperRequest from '../../../components/WrapperRequest';

export default async function Phone() {
	const data: any = await request({
		query: QueryPhone,
		revalidate: 30,
	});
	return (
		<main className='overflow-x-hidden'>
			<WrapperRequest
				subscription={{
					initialData: data,
					query: QueryPhone,
					token: process.env.NEXT_DATOCMS_TOKEN,
				}}
				page='phone'
			/>
		</main>
	);
}
