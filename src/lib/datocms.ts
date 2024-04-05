/** @format */

import { gql, GraphQLClient } from 'graphql-request';

interface RequestProps {
	query: string;
	variables?: any;
	revalidate: number;
}

export function request({ query, variables, revalidate }: RequestProps) {
	const endpoint = process.env.NEXT_DATOCMS_ENDPOINT || '';
	const token = process.env.NEXT_DATOCMS_TOKEN;
	const graphQLClient = new GraphQLClient(endpoint, {
		method: 'POST',
		next: { revalidate: revalidate },
		headers: {
			authorization: `Bearer ${token}`,
		},
	});

	return graphQLClient.request(query, variables);
}

export const queryHeroSection = gql`
	query {
		allHomepages {
			heading
			keyword01
			keyword02
			keyword03
			subheadline
			imagehero {
				responsiveImage {
					alt
					aspectRatio
					base64
					bgColor
					height
					sizes
					src
					srcSet
					__typename
					width
					webpSrcSet
					title
				}
			}
			status01 {
				title
				value
			}
			status02 {
				title
				value
			}
			status03 {
				title
				value
			}
		}
	}
`;

export interface ResponsiveImage {
	alt: string | null;
	aspectRatio: number;
	base64: string;
	height: number;
	sizes: string;
	src: string;
	srcSet: string;
	title?: string | null;
	webpSrcSet: string;
	width: number;
	__typename: string;
}

interface Imagehero {
	responsiveImage: ResponsiveImage;
}

export interface Status {
	title: string;
	value: number;
}

export interface AllHomepageHero {
	heading: string;
	keyword01: string;
	keyword02: string;
	keyword03: string;
	subheadline: string;
	imagehero: Imagehero[];
	status01: Status;
	status02: Status;
	status03: Status;
}
