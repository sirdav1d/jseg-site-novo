/** @format */

import ContentFeature from './ContentFeature';

export default function Feature({ data }: { data: any }) {
	return (
		<div className='w-full h-full text-zinc-900 py-10'>
			<ContentFeature data={data}></ContentFeature>
		</div>
	);
}
