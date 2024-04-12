/** @format */

import React from 'react';
import { Image as ResponsiveImage } from 'react-datocms';

interface TestimonyProps {
	text: string;
	name: string;
	avatar: any;
}

export default function Testimony(props: TestimonyProps) {
	return (
		<div>
			<p>{props.text}</p>
			<div>
				<ResponsiveImage data={props.avatar} />
				<h4>{props.name}</h4>
			</div>
		</div>
	);
}
