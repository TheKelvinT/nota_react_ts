import { PortableTextBlock } from "sanity";

export type JobOpeningModel = {
  _rev: string;
  jobDescription: string[];
  position: string;
  lowSalaryRange: string;
  _updatedAt: string;
  summary: string;
  _createdAt: string;
  _type: string;
  jobReq: string[];
  _id: string;
  highSalaryRange: string;
};

export type CareersModel = {
  _id: string;
  _createdAt: string;
  desc: string;
  callToAction: {
    _type: string;
    _ref: string;
  };
  openingHours: {
    lastCall: string;
    openingHoursTitle: string;
    openingHour: string;
    closeHoursTitle: string;
    _type: string;
  };
  title: string;
  valuesSection: {
    valuesTitle: string;
    description: PortableTextBlock[];
    values: {
      image: string;
      alt: string;
      value: string;
      description: string;
    }[];
  };
  sectionOne: {
    pageHeader: string;
    description: PortableTextBlock[] 
    callToAction1: {
      routes: string;
      buttonText: string;
    };
    callToAction2: {
      routes: string;
      buttonText: string;
    };
  };
  lastSection: {
    pageHeader: string;
    description: PortableTextBlock[]
    callToAction1: {
      routes: string;
      buttonText: string;
    };
    callToAction2: {
      routes: string;
      buttonText: string;
    };
  };
};
