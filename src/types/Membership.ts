// Define types for the membershipHero images
interface Image {
    image: string;
  }
  
  // Define types for the callToAction
  interface CallToAction {
    cta: string;
    buttonText: string;
    routes: string[];
  }
  
  // Define the Membership interface with all nested interfaces and fields
 export interface MembershipModel {
    membershipHero: {
      desktopImage: Image;
      mobileImage: Image;
    };
    terms: string[];
    membershipSectionOne: {
      title: string;
      desc: string;
      callToAction: CallToAction;
    };
    membershipSectionTwo: {
      title: string;
      description: string;
      privilegesImage: {
        desktopImage: Image;
        mobileImage: Image;
      };
    };
  }
  
 