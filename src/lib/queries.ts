/** @format */

import { gql } from 'graphql-request';

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

export const queryServicesList = gql`
	query {
		allHomepages {
			sectioncontent01 {
				title
				description
			}
			cardservice01 {
				id
				title
				description
			}
			cardservice02 {
				id
				title
				description
			}
			cardservice03 {
				id
				title
				description
			}
			cardservice04 {
				id
				title
				description
			}
			cardservice05 {
				id
				title
				description
			}
			cardservice06 {
				id
				title
				description
			}
		}
	}
`;

export const queryFeatures = gql`
	query {
		allHomepages {
			sectioncontent02 {
				title
				description
			}
			featurecontent01 {
				title
				tag
				description
				images {
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
			featurecontent02 {
				title
				tag
				description
				images {
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
			featurecontent03 {
				title
				tag
				description
				images {
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
		}
	}
`;


export const QueryHomePage = gql`
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
			sectioncontent03 {
				title
				description
			}
			sectioncontent01 {
				title
				description
			}
			cardservice01 {
				id
				title
				description
			}
			cardservice02 {
				id
				title
				description
			}
			cardservice03 {
				id
				title
				description
			}
			cardservice04 {
				id
				title
				description
			}
			cardservice05 {
				id
				title
				description
			}
			cardservice06 {
				id
				title
				description
			}
			sectioncontent02 {
				title
				description
			}
			featurecontent01 {
				title
				tag
				description
				images {
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
			featurecontent02 {
				title
				tag
				description
				images {
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
			featurecontent03 {
				title
				tag
				description
				images {
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
			rating01 {
				avatar {
					responsiveImage {
						width
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
						__typename
					}
				}
				name
				testimony
			}
			rating02 {
				name
				testimony
				avatar {
					responsiveImage {
						width
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
						__typename
					}
				}
			}
			rating03 {
				name
				testimony
				avatar {
					responsiveImage {
						width
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
						__typename
					}
				}
			}
			rating04 {
				name
				testimony
				avatar {
					responsiveImage {
						width
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
						__typename
					}
				}
			}
			title
			benefitimages {
				id
				responsiveImage {
					width
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
					__typename
				}
			}
			benefit01
			benefit02
			benefit03
			benefit04
			benefit05
			benefit06
		}
	}
`;