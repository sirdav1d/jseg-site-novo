/** @format */

export interface Status {
	id?: string;
	title: string;
	value: number;
}

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

interface Image {
	id?: string;
	responsiveImage: ResponsiveImage;
}

export interface HeroService {
	id: string;
	headline: string;
	subheadline: string;
	imageshero: Image[];
}

export interface CardService {
	id: string;
	title: string;
	description: string;
}

interface CardCulture {
	id: string;
	icon: Image;
}

export interface Feature {
	id: string;
	tag: string;
	title: string;
	description: string;
	image: Image;
}

interface Rating {
	id?: string;
	avatar: Image;
	name: string;
	testimony: string;
}

interface Benefit {
	id: string;
	benefitdescription: string;
}

export interface DataServiceList {
	titlesectionservs: string;
	descriptionsectionservs: string;
	cardservices: CardService[];
}

export interface AllHome {
	heading: string;
	subheadline: string;
	keyword01: string;
	keyword02: string;
	keyword03: string;
	statushero: Status[];
	imagehero: Image[];
	headlineabout: string;
	subheadlineabout: string;
	headlinecontact: string;
	subheadlinecontact: string;
	heroservices: HeroService[];
	titlesectionservs: string;
	descriptionsectionservs: string;
	cardservices: CardService[];
	titleculture: string;
	descriptionculture: string;
	cardcultures: CardCulture[];
	headingtimeline: string;
	descriptiontimeline: string;
	times: CardService[];
	titlehomefeat: string;
	descriptionhomefeat: string;
	featurehome: Feature[];
	titlesmarthome: string;
	descriptionsmarthome: string;
	featuresmarthome: Feature[];
	titlecftv: string;
	descriptioncftv: string;
	featurecftv: Feature[];
	titleinternet: string;
	descriptioninternet: string;
	featureinternet: Feature[];
	titleaccess: string;
	descriptionaccess: string;
	featureaccess: Feature[];
	titletel: string;
	descriptiontel: string;
	featuretel: Feature[];
	titlealarm: string;
	descriptionalarm: string;
	featurealarm: Feature[];
	titlesectionrating: string;
	descriptionsectionrating: string;
	ratingscontent: Rating[];
	titlesectionbenefit: string;
	benefitimages: Image[];
	benefitcontent: Benefit[];
}

export interface Data {
	allHomes: AllHome[];
}
