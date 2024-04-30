/** @format */

import { request } from '@/lib/datocms';
import { Query } from '@/lib/queries';
import ContentContact from './ContentContact';

export default async function About() {
	const data: any = await request({
		query: Query,
		revalidate: 30,
	});
	return (
		<ContentContact
			subscription={{
				initialData: data,
				query: Query,
				token: process.env.NEXT_DATOCMS_TOKEN,
			}}
		/>
	);
}
