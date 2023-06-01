import { PortableTextBlock } from "sanity";
export type MenuList = {
  callToAction: {
    cta: string;
    buttonText: string;
    routes: string;
  };
  banner: string;
  images: null;
  title: string;
  time: string;
  _id: string;
  image: string | null; // Add the 'image' property to the type
  description: PortableTextBlock[];
};

export type MenuContent = {
  callToAction: {
    cta: string;
    buttonText: string;
    routes: string;
  };
  images: string[] | null;
  banner: string;
  title: string;
  _id: string;
  image: string | null; // Add the 'image' property to the type
  description: PortableTextBlock[];
};
