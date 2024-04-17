/** @format */

import Benefits from '@/components/sections/Benefits';
import Feature from '@/components/sections/Feature';
import Ratings from '@/components/sections/Ratings';
import ServicesList from '@/components/sections/ServicesList';
import { request } from '@/lib/datocms';
import { QueryService } from '@/lib/queries';
import React from 'react';
import WrapperRequest from './WrapperRequest';

export default async function SmartHome() {
	const data: any = await request({
		query: QueryService,
		revalidate: 30,
	});
	return (
		<main className='overflow-x-hidden'>
			{/* <ServicesList
				subscription={{
					initialData: data,
					query: QueryService,
					token: process.env.NEXT_DATOCMS_TOKEN,
				}}
			/> */}
			{/* <Feature
				subscription={{
					initialData: data,
					query: QueryService,
					token: process.env.NEXT_DATOCMS_TOKEN,
				}}
			/> */}
			<WrapperRequest
				subscription={{
					initialData: data,
					query: QueryService,
					token: process.env.NEXT_DATOCMS_TOKEN,
				}}
			/>
		</main>
	);
}
