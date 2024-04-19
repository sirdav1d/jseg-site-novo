/** @format */

import ContentService from './ContentService';

export default function ServicesListSection({ data }: { data: any }) {
	{
		return (
			<div className='w-full  h-full text-zinc-900 py-20'>
				<ContentService data={data}></ContentService>
			</div>
		);
	}
}
