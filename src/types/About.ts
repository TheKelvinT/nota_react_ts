 export type AboutModel = {
  aboutHero: {
    image: string;
  };
  sectionOne: {
    statement:string,
    statementTldr:string
    title: string;
    callToAction: {
      cta: string;
      buttonText: string;
      routes: string;
    };
    image: string;
    description: {
      style: string;
      _key: string;
      markDefs: any[];
      children: {
        marks: any[];
        text: string;
        _key: string;
        _type: string;
      }[];
      _type: string;
    }[];
  };
  sectionTwo: {
    description: {
      markDefs: any[];
      children: {
        _key: string;
        _type: string;
        marks: any[];
        text: string;
      }[];
      _type: string;
      style: string;
      _key: string;
    }[];
    title: string;
    image: string;
  };
  sectionThree: {
    image: string;
    description: {
      children: {
        marks: any[];
        text: string;
        _key: string;
        _type: string;
      }[];
      _type: string;
      style: string;
      _key: string;
      markDefs: any[];
    }[];
    title: string;
    callToAction: {
      cta: string;
      buttonText: string;
      routes: string;
    };
  };
};