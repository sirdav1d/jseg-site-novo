/** @format */

'use client';
import React, { useEffect, useState } from 'react';
import { useQuerySubscription } from 'react-datocms';
import Content from './Content';

export default function WrapperRequest({
	subscription,
}: {
	subscription: any;
}) {
	const [hydrated, setHydrated] = useState(false);

	useEffect(() => setHydrated(true), []);

	const { query, initialData, token } = subscription;

	const { data, error, status } = useQuerySubscription({
		query: query,
		enabled: true,
		token,
		initialData,
	});
	{
		return (
			hydrated && (
				<div className='w-full h-full text-zinc-900 py-20'>
					<Content data={data}></Content>
				</div>
			)
		);
	}
}
