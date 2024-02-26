import { PortableTextBlock } from "sanity";

export type FaqModel = {
  _id: string;
  _createdAt: string;
  question: string;
  answer: string;
}[];

export type ReservationsModel = {
  _id: string;
  _createdAt: string;
  banner: string;
  desc: string;
  callToAction: {
    _type: string;
    _ref: string;
  };
  groupCTA: {
    _type: string;
    _ref: string;
    buttonText: string;
    routes: string;
  };
  groupTitle: string;
  groupDesc: PortableTextBlock[];

  openingHours: {
    lastCall: string;
    openingHoursTitle: string;
    openingHour: string;
    closeHoursTitle: string;
    _type: string;
  };
  title: string;
};
