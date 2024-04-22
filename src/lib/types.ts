/** @format */

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

export interface Status {
	title: string;
	value: number;
}

export interface CardService {
	id: string;
	title: string;
	description: string;
}

export interface Feature {
	id?: string;
	title: string;
	tag: string;
	description: string;
	images: Image[];
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

export interface AllHomepage {
	heading: string;
	subheadline: string;
	keyword01: string;
	keyword02: string;
	keyword03: string;
	imagehero: Image[];
	status01: Status;
	status02: Status;
	status03: Status;
	titlesectionservs: string;
	descriptionsectionservs: string;
	cardservices: CardService[];
	titlesectionfeat: string;
	descriptionsectionfeat: string;
	featurecontent: Feature[];
	titlesectionrating: string;
	descriptionsectionrating: string;
	ratingscontent: Rating[];
	titlesectionbenefit: string;
	benefitcontent: Benefit[];
	benefitimages: Image[];
}

export interface Data {
	allHomepages: AllHomepage[];
}

export interface DataSmartHome {
	allSmarthomepages: AllServicepage[];
}

export interface DataInternet {
	allInternetpages: AllServicepage[];
}

export interface DataCFTV {
	allCftvpages: AllServicepage[];
}

export interface DataAccess {
	allAccesspages: AllServicepage[];
}

export interface DataPhone {
	allPhonepages: AllServicepage[];
}

export interface DataAlarm {
	allAlarmpages: AllServicepage[];
}

export interface AllServicepage {
	headline: string;
	subheadline: string;
	imagesheroservice: Image[];
	titlesectionservs: string;
	descriptionsectionservs: string;
	cardservices: CardService[];
	titlesectionfeat: string;
	descriptionsectionfeat: string;
	featurecontent: Feature[];
	titlesectionrating: string;
	descriptionsectionrating: string;
	ratingscontent: Rating[];
	titlesectionbenefit: string;
	benefitcontent: Benefit[];
}
