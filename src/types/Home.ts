import { Key } from "react";
import { PortableTextBlock } from "sanity";

export type CarouselImage = {
  imageURL: string;
};

export type HomeContent = {
  carousel: CarouselImage[];
  homeSectionOne: {
    description: PortableTextBlock[];
    title: string;
    callToAction: {
      cta: string;
      buttonText: string 
      routes: string;
    };
     Logo: string; 
  };
  homeSectionTwo: {
    description: PortableTextBlock[];
    title: string;
    Images: {
      imageURL: string;
    }[];
  };
  homeMidBanner: {
    bannerURL: string;
  };
  cards: {
    description: PortableTextBlock[] ;
    image: string;
    title: string;
    callToAction: {
      cta: string;
      buttonText: string;
      routes: string;
    };
  }[];
  homeNavigation: {
    index: Key | null | undefined;
    description: string;
    image: string;
    title: string;
    callToAction: {
      cta: string;
      buttonText: string;
      routes: string;
    };
  }[];
};