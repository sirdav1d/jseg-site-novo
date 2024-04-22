/** @format */

import { request } from '@/lib/datocms';
import { QuerySmartHome } from '@/lib/queries';
import WrapperRequest from '../../../components/WrapperRequest';

export default async function SmartHome() {
	const data: any = await request({
		query: QuerySmartHome,
	});
	return (
		<main className='overflow-x-hidden'>
			<WrapperRequest
				subscription={{
					initialData: data,
					query: QuerySmartHome,
					token: process.env.NEXT_DATOCMS_TOKEN,
				}}
				page='smartHome'
			/>
		</main>
	);
}
