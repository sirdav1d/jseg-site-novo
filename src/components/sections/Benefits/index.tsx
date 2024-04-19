/** @format */

import ContentBenefits from './ContentBenefits';

export default function Benefits({ data }: { data: any }) {
	return (
		<div className='w-full h-full text-zinc-900 py-20'>
			<ContentBenefits data={data}></ContentBenefits>
		</div>
	);
}
