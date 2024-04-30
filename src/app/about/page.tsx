/** @format */

import { request } from '@/lib/datocms';
import { Query } from '@/lib/queries';
import ContentAbout from './ContentAbout';

export default async function About() {
	const data: any = await request({
		query: Query,
		revalidate: 30,
	});
	return (
		<ContentAbout
			subscription={{
				initialData: data,
				query: Query,
				token: process.env.NEXT_DATOCMS_TOKEN,
			}}
		/>
	);
}
