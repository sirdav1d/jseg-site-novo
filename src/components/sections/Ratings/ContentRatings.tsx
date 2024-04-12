/** @format */

import Container from '@/components/Container';
import { Data } from '@/lib/types';
import { Image as ResponsiveImage } from 'react-datocms';
import React from 'react';
import Testimony from './Testimony';

export default function ContentRatings({ data }: { data: Data }) {
	return (
		<div>
			<Container>
				{data.allHomepages.map((d, index) => {
					return (
						<div key={index}>
							<div>
								<h2>{d.sectioncontent03.title}</h2>
								<p>{d.sectioncontent03.description}</p>
							</div>
							<div>
								<Testimony
									text={d.rating01.testimony}
									name={d.rating01.name}
									avatar={d.rating01.avatar.responsiveImage}></Testimony>
								<Testimony
									text={d.rating02.testimony}
									name={d.rating02.name}
									avatar={d.rating02.avatar.responsiveImage}></Testimony>
								<Testimony
									text={d.rating03.testimony}
									name={d.rating03.name}
									avatar={d.rating03.avatar.responsiveImage}></Testimony>
								<Testimony
									text={d.rating04.testimony}
									name={d.rating04.name}
									avatar={d.rating04.avatar.responsiveImage}></Testimony>
							</div>
						</div>
					);
				})}
			</Container>
		</div>
	);
}
