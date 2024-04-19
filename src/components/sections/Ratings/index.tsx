/** @format */

import { Data } from '@/lib/types';
import ContentRatings from './ContentRatings';

export default function Ratings({ data }: { data: any }) {
	return (
		<div className='w-full h-full py-10 text-zinc-900'>
			<ContentRatings data={data}></ContentRatings>
		</div>
	);
}
