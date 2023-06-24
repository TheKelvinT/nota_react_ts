import { PortableTextBlock } from "sanity";

export type EventModel = {
  banner: {
    image: string;
  };
  sectionOne: {
    title: string;
    desc: string;
    callToAction: {
      cta: string;
      buttonText: string;
      routes: string;
    };
  };
  sectionTwo: {
    image: string;
    title: string;
    callToAction: {
      cta: string;
      buttonText: string;
      routes: string;
    };
    Sectioncontent: {
      _type: "block";
      style: "normal";
      _key: string;
      markDefs: [];
      children: {
        _type: "span";
        marks: [];
        text: string;
        _key: string;
      }[];
    }[];
  };
  sectionThree: {
    title: string;
    Sectioncontent: {
      markDefs: [];
      children: {
        _key: string;
        _type: "span";
        marks: [];
        text: string;
      }[];
      _type: "block";
      style: "normal";
      _key: string;
    }[];
    callToAction: {
      routes: string;
      cta: string;
      buttonText: string;
    };
    carousel: {
      image: string;
    }[];
  };
};

export type ModalModel = {
  title: string, 
  body: PortableTextBlock[]
}