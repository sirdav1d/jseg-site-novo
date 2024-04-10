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

export interface AllHomepageHero {
	heading: string;
	keyword01: string;
	keyword02: string;
	keyword03: string;
	subheadline: string;
	imagehero: Image[];
	status01: Status;
	status02: Status;
	status03: Status;
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
	cardservice01: CardService;
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
	featurecontent01: Featurecontent;
	featurecontent02: Featurecontent;
	featurecontent03: Featurecontent;
}
