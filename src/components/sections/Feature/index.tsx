/** @format */

import { request } from '@/lib/datocms';
import ContentFeature from './ContentFeature';
import { queryFeatures } from '@/lib/queries';

export default async function Feature() {
	const data: any = await request({
		query: queryFeatures,
		revalidate: 30,
	});

	return (
		<div className='w-full h-full min-h-[90vh] text-zinc-900 py-20'>
			<ContentFeature
				subscription={{
					initialData: data,
					query: queryFeatures,
					token: process.env.NEXT_DATOCMS_TOKEN,
				}}></ContentFeature>
		</div>
	);
}
