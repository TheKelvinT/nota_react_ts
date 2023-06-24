import { PortableTextBlock } from "sanity";

export type FooterData = {
    mid: {
      image: string;
    };
    right: string;
    footerNote: PortableTextBlock[]
;
    left: {
      line: string;
      _key: string;
    }[];
  };
  
