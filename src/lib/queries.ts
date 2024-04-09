/** @format */

import { gql } from "graphql-request";

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
