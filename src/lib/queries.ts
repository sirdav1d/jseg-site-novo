/** @format */

import { gql } from 'graphql-request';

export const Query = gql`
	# -----------------------------------------------
	#  Welcome to the Content Delivery API Playground!
	# -----------------------------------------------
	#
	# Here you can write, validate, and test your GraphQL queries.
	#
	# Type queries into this side of the screen, and you will see intelligent
	# typeaheads aware of the current GraphQL type schema and live syntax and
	# validation errors highlighted within the text.
	#
	# An example GraphQL query might look like:

	query {
		allHomes {
			heading
			subheadline
			keyword01
			keyword02
			keyword03
			statushero {
				id
				title
				value
			}
			imagehero {
				id
				responsiveImage {
					alt
					aspectRatio
					base64
					bgColor
					height
					sizes
					src
					srcSet
					title
					webpSrcSet
					width
					__typename
				}
			}
			headlineabout
			subheadlineabout
			headlinecontact
			subheadlinecontact
			heroservices {
				id
				headline
				subheadline
				imageshero {
					id
					responsiveImage {
						alt
						aspectRatio
						base64
						bgColor
						height
						sizes
						src
						srcSet
						title
						webpSrcSet
						width
						__typename
					}
				}
			}
			titlesectionservs
			descriptionsectionservs
			cardservices {
				id
				title
				description
			}
			titleculture
			descriptionculture
			cardcultures {
				id
				icon {
					id
					responsiveImage {
						alt
						aspectRatio
						base64
						bgColor
						height
						sizes
						src
						srcSet
						title
						webpSrcSet
						width
						__typename
					}
				}
			}
			headingtimeline
			descriptiontimeline
			times {
				id
				title
				description
			}
			titlehomefeat
			descriptionhomefeat
			featurehome {
				id
				title
				tag
				description
				image {
					id
					responsiveImage {
						alt
						aspectRatio
						base64
						bgColor
						height
						sizes
						src
						srcSet
						title
						webpSrcSet
						width
						__typename
					}
				}
			}
			titlesmarthome
			descriptionsmarthome
			featuresmarthome {
				id
				title
				tag
				description
				image {
					id
					responsiveImage {
						alt
						aspectRatio
						base64
						bgColor
						height
						sizes
						src
						srcSet
						title
						webpSrcSet
						width
						__typename
					}
				}
			}
			titlecftv
			descriptioncftv
			featurecftv {
				id
				title
				tag
				description
				image {
					responsiveImage {
						alt
						aspectRatio
						base64
						bgColor
						height
						sizes
						src
						srcSet
						title
						webpSrcSet
						width
						__typename
					}
				}
			}
			titleinternet
			descriptioninternet
			featureinternet {
				id
				title
				tag
				description
				image {
					id
					responsiveImage {
						alt
						aspectRatio
						base64
						bgColor
						height
						sizes
						src
						srcSet
						title
						webpSrcSet
						width
						__typename
					}
				}
			}
			titleaccess
			descriptionaccess
			featureaccess {
				id
				title
				tag
				description
				image {
					id
					responsiveImage {
						alt
						aspectRatio
						base64
						bgColor
						height
						sizes
						src
						srcSet
						title
						webpSrcSet
						width
						__typename
					}
				}
			}
			titletel
			descriptiontel
			featuretel {
				id
				title
				tag
				description
				image {
					id
					responsiveImage {
						alt
						aspectRatio
						base64
						bgColor
						height
						sizes
						src
						srcSet
						title
						webpSrcSet
						width
						__typename
					}
				}
			}
			titlealarm
			descriptionalarm
			featurealarm {
				id
				title
				tag
				description
				image {
					id
					responsiveImage {
						alt
						aspectRatio
						base64
						bgColor
						height
						sizes
						src
						srcSet
						title
						webpSrcSet
						width
						__typename
					}
				}
			}
			titlesectionrating
			descriptionsectionrating
			ratingscontent {
				id
				testimony
				name
				avatar {
					id
					responsiveImage {
						alt
						aspectRatio
						base64
						bgColor
						height
						sizes
						src
						srcSet
						title
						webpSrcSet
						width
						__typename
					}
				}
			}
			titlesectionbenefit
			benefitimages {
				id
				responsiveImage {
					alt
					aspectRatio
					base64
					bgColor
					height
					sizes
					src
					srcSet
					title
					webpSrcSet
					width
					__typename
				}
			}
			benefitcontent {
				id
				benefitdescription
			}
		}
	}
`;
