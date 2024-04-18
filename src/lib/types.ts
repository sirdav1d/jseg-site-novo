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

export interface SectionContent {
	title: string;
	description: string;
}

export interface AllHomepageService {
	sectioncontent01: SectionContent;
	CardService: CardService;
	cardservice02: CardService;
	cardservice03: CardService;
	cardservice04: CardService;
	cardservice05: CardService;
	cardservice06: CardService;
}

export interface Featurecontent {
	title: string;
	tag: string;
	description: string;
	images: Image[];
}

export interface AllHomepageFeatures {
	sectioncontent02: SectionContent;
	Featurecontent: Featurecontent;
	featurecontent02: Featurecontent;
	featurecontent03: Featurecontent;
}

export interface AllHomepage {
	heading: string;
	keyword01: string;
	keyword02: string;
	keyword03: string;
	subheadline: string;
	imagehero: Image[];
	status01: Status;
	status02: Status;
	status03: Status;
	sectioncontent03: SectionContent;
	sectioncontent01: SectionContent;
	cardservice01: CardService;
	cardservice02: CardService;
	cardservice03: CardService;
	cardservice04: CardService;
	cardservice05: CardService;
	cardservice06: CardService;
	sectioncontent02: SectionContent;
	featurecontent01: Featurecontent;
	featurecontent02: Featurecontent;
	featurecontent03: Featurecontent;
	rating01: Rating;
	rating02: Rating;
	rating03: Rating;
	rating04: Rating;
	title: string;
	benefitimages: Image[];
	benefit01: string;
	benefit02: string;
	benefit03: string;
	benefit04: string;
	benefit05: string;
	benefit06: string;
}

interface Rating {
	id?: string;
	avatar: Image;
	name: string;
	testimony: string;
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
	featurecontent: Featurecontent[];
	titlesectionrating: string;
	descriptionsectionrating: string;
	ratingscontent: Rating[];
	titlesectionbenefit: string;
	benefitcontent: BenefitContent[];
}

interface BenefitContent {
	id: string;
	benefitdescription: string;
}
