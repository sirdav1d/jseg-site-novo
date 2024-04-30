/** @format */

import ContentHome from '@/components/ContentHome';
import { request } from '@/lib/datocms';
import { Query } from '@/lib/queries';

export default async function Home() {
	const data: any = await request({
		query: Query,
		revalidate: 30,
	});
	return (
		<main className='overflow-x-hidden'>
			<ContentHome
				subscription={{
					initialData: data,
					query: Query,
					token: process.env.NEXT_DATOCMS_TOKEN,
				}}></ContentHome>
		</main>
	);
}
