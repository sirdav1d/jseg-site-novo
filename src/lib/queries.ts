/** @format */

import { gql } from 'graphql-request';

export const QueryHomePage = gql`
	query {
		allHomepages {
			heading
			subheadline
			keyword01
			keyword02
			keyword03
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
			titlesectionservs
			descriptionsectionservs
			cardservices {
				id
				title
				description
			}
			titlesectionfeat
			descriptionsectionfeat
			featurecontent {
				id
				tag
				title
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
			titlesectionrating
			descriptionsectionrating
			ratingscontent {
				id
				name
				testimony
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
			benefitcontent {
				id
				benefitdescription
			}
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
		}
	}
`;

export const QuerySmartHome = gql`
	query {
		allSmarthomepages {
			headline
			subheadline
			imagesheroservice {
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
			titlesectionservs
			descriptionsectionservs
			cardservices {
				id
				title
				description
			}
			titlesectionfeat
			descriptionsectionfeat
			featurecontent {
				id
				tag
				title
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
			titlesectionrating
			descriptionsectionrating
			ratingscontent {
				id
				name
				testimony
				avatar {
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
			benefitcontent {
				id
				benefitdescription
			}
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
		}
	}
`;

export const QueryInternet = gql`
	query {
		allInternetpages {
			headline
			subheadline
			imagesheroservice {
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
			titlesectionservs
			descriptionsectionservs
			cardservices {
				id
				title
				description
			}
			titlesectionfeat
			descriptionsectionfeat
			featurecontent {
				id
				tag
				title
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
			titlesectionrating
			descriptionsectionrating
			ratingscontent {
				id
				name
				testimony
				avatar {
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
			benefitcontent {
				id
				benefitdescription
			}
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
		}
	}
`;

export const QueryCFTV = gql`
	query {
		allCftvpages {
			headline
			subheadline
			imagesheroservice {
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
			titlesectionservs
			descriptionsectionservs
			cardservices {
				id
				title
				description
			}
			titlesectionfeat
			descriptionsectionfeat
			featurecontent {
				id
				tag
				title
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
			titlesectionrating
			descriptionsectionrating
			ratingscontent {
				id
				name
				testimony
				avatar {
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
			benefitcontent {
				id
				benefitdescription
			}
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
		}
	}
`;

export const QueryAccess = gql`
	query {
		allAccesspages {
			headline
			subheadline
			imagesheroservice {
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
			titlesectionservs
			descriptionsectionservs
			cardservices {
				id
				title
				description
			}
			titlesectionfeat
			descriptionsectionfeat
			featurecontent {
				id
				tag
				title
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
			titlesectionrating
			descriptionsectionrating
			ratingscontent {
				id
				name
				testimony
				avatar {
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
			benefitcontent {
				id
				benefitdescription
			}
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
		}
	}
`;

export const QueryPhone = gql`
	query {
		allPhonepages {
			headline
			subheadline
			imagesheroservice {
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
			titlesectionservs
			descriptionsectionservs
			cardservices {
				id
				title
				description
			}
			titlesectionfeat
			descriptionsectionfeat
			featurecontent {
				id
				tag
				title
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
			titlesectionrating
			descriptionsectionrating
			ratingscontent {
				id
				name
				testimony
				avatar {
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
			benefitcontent {
				id
				benefitdescription
			}
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
		}
	}
`;

export const QueryAlarm = gql`
	query {
		allAlarmpages {
			headline
			subheadline
			imagesheroservice {
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
			titlesectionservs
			descriptionsectionservs
			cardservices {
				id
				title
				description
			}
			titlesectionfeat
			descriptionsectionfeat
			featurecontent {
				id
				tag
				title
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
			titlesectionrating
			descriptionsectionrating
			ratingscontent {
				id
				name
				testimony
				avatar {
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
			benefitcontent {
				id
				benefitdescription
			}
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
		}
	}
`;
