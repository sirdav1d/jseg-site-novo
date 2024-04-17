/** @format */

'use client';
import React, { useEffect, useState } from 'react';
import { useQuerySubscription } from 'react-datocms';
import ContentSmartHome from '../app/solutions/smartHome/ContentSmartHome';
import ContentAccess from '@/app/solutions/access/ContentAccess';
import ContentAlarm from '@/app/solutions/alarm/ContentAlarm';
import ContentCFTV from '@/app/solutions/cftv/ContentCFTV';
import ContentInternet from '@/app/solutions/internet/ContentInternet';
import ContentPhone from '@/app/solutions/phone/ContentPhone';

export default function WrapperRequest({
	subscription,
	page,
}: {
	subscription: any;
	page: string;
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
					{page === 'smartHome' && (
						<ContentSmartHome data={data}></ContentSmartHome>
					)}
					{page === 'internet' && (
						<ContentInternet data={data}></ContentInternet>
					)}
					{page === 'cftv' && <ContentCFTV data={data}></ContentCFTV>}
					{page === 'access' && <ContentAccess data={data}></ContentAccess>}
					{page === 'phone' && <ContentPhone data={data}></ContentPhone>}
					{page === 'alarm' && <ContentAlarm data={data}></ContentAlarm>}
				</div>
			)
		);
	}
}
