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
