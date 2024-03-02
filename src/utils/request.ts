import axios from "axios";
import reservationStore from "@/store/reservationStore.ts";
import reservationConfigStore from "@/store/reservationConfigStore.ts";

export const fetchCarousel = async () => {
  const response = await axios.get(
    "https://9cqbua0r.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22homeCarousel%22%20%5D%7Bcarousel%5B%5D%20%7B%0A%20%20%20%20%20%20%22imageURL%22%3A%20asset%20-%3E%20url%0A%20%20%20%20%7D%7D",
  );
  return response.data.result[0].carousel;
};

export const fetchContent = async () => {
  const response = await axios.get(
    "https://9cqbua0r.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22homeContent%22%5D%20%7B%0A%20%20homeSectionTwo%20%7B%0A%20%20%20%20description%2C%0A%20%20%20%20title%2C%0A%20%20%20%20Images%5B%5D%20%7B%0A%20%20%20%20%20%20%22imageURL%22%3A%20asset%20-%3E%20url%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%20%20homeSectionOne%20%7B%0A%20%20%20%20description%2C%0A%20%20%20%20title%2C%0A%20%20%20%20callToAction%20-%3E%20%7B%0A%20%20%20%20%20%20cta%2C%0A%20%20%20%20%20%20buttonText%2C%0A%20%20%20%20%20%20routes%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22Logo%22%3A%20Logo.asset%20-%3E%20url%0A%20%20%7D%2C%0A%20%20homeMidBanner%20%7B%0A%20%20%20%20%22bannerURL%22%3A%20banner.asset%20-%3E%20url%0A%20%20%7D%2C%0A%20%20%20%20cards%20%5B%5D%7B%0A%20%20%20%20description%2C%0A%20%20%20%20%22image%22%3Aimage.asset%20-%3E%20url%2C%0A%20%20%20%20title%2C%0A%20%20%20%20callToAction%20-%3E%20%7B%0A%20%20%20%20%20%20cta%2C%0A%20%20%20%20%20%20buttonText%2C%0A%20%20%20%20%20%20routes%0A%20%20%20%20%7D%2C%0A%20%20%7D%2C%0A%20%20homeNavigation%20%5B%5D%7B%0A%20%20%20%20description%2C%0A%20%20%20%20%22image%22%3Aimage.asset%20-%3E%20url%2C%0A%20%20%20%20title%2C%0A%20%20%20%20callToAction%20-%3E%20%7B%0A%20%20%20%20%20%20cta%2C%0A%20%20%20%20%20%20buttonText%2C%0A%20%20%20%20%20%20routes%0A%20%20%20%20%7D%2C%0A%20%20%7D%0A%7D",
  );
  return response.data.result[0];
};

export const fetchAbout = async () => {
  const response = await axios.get(
    "https://9cqbua0r.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22aboutContent%22%5D%7B%0A%20%20aboutHero%7B%0A%20%20%20%20%22image%22%3Aimage.asset%20-%3E%20url%2C%0A%20%20%7D%2C%0A%20%20sectionOne%7B%0A%20%20%20%20%22image%22%3Aimage.asset%20-%3E%20url%2C%0A%20%20%20%20%20%20description%2C%0A%20%20%20%20%20%20title%2C%0A%20%20%20%20%20%20statement%2C%0A%20%20%20%20%20%20statementTldr%2C%0A%20%20%20%20%20%20%20callToAction%20-%3E%20%7B%0A%20%20%20%20%20%20cta%2C%0A%20%20%20%20%20%20buttonText%2C%0A%20%20%20%20%20%20routes%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20sectionTwo%7B%0A%20%20%20%20%20%20description%2C%0A%20%20%20%20%20%20%20%20title%2C%0A%20%20%20%20%20%20%22image%22%3Amidbanner.asset%20-%3E%20url%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20sectionThree%7B%0A%20%20%20%20%20%20%20%20%22image%22%3Aimage.asset%20-%3E%20url%2C%0A%20%20%20%20%20%20%20%20%20%20%20description%2C%0A%20%20%20%20%20%20title%2C%0A%20%20%20%20%20%20%20callToAction%20-%3E%20%7B%0A%20%20%20%20%20%20cta%2C%0A%20%20%20%20%20%20buttonText%2C%0A%20%20%20%20%20%20routes%0A%20%20%20%20%7D%2C%0A%20%20%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%20%20%20%20%0A%7D",
  );
  return response.data.result[0];
};

export const fetchEvents = async () => {
  const response = await axios.get(
    "https://9cqbua0r.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22events%22%5D%7B%0A%20%20banner%7B%22image%22%3A%20asset-%3Eurl%7D%2C%0AsectionOne%7B%0A%20%20title%2C%0Adesc%2C%0AcallToAction-%3E%7B%0A%20%20%20%20cta%2C%0A%20%20%20%20buttonText%2C%0A%20%20%20%20routes%0A%20%20%7D%2C%0A%7D%2C%0AsectionTwo%7B%0A%20%20%22image%22%3A%20image.asset-%3Eurl%2C%0A%20%20%20%20title%2C%0A%20%20%20%20%20%20callToAction-%3E%7B%0A%20%20%20%20cta%2C%0A%20%20%20%20buttonText%2C%0A%20%20%20%20routes%0A%20%20%7D%2C%0ASectioncontent%2C%0A%20%20%20%20%20%20%0A%7D%2C%0AsectionThree%7B%0A%20%20%20%20%20%20%20carousel%5B%5D%7B%0A%20%20%20%20%22image%22%3A%20asset-%3Eurl%0A%20%20%7D%2C%0A%20%20title%2C%0A%20%20Sectioncontent%2C%0A%20%20callToAction-%3E%7B%0A%20%20%20%20cta%2C%0A%20%20%20%20buttonText%2C%0A%20%20%20%20routes%0A%20%20%7D%0A%7D%0A%7D",
  );
  return response.data.result[0];
};

export const fetchCareers = async () => {
  const response = await axios.get(
    "https://9cqbua0r.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22careerContent%22%20%5D%7B%0A%20%20valuesSection%7B%0A%20%20%20%20description%2C%0A%20%20%20%20valuesTitle%2C%0A%20%20%20%20values%5B%5D%7B%0A%20%20%20%20%20%20value%2C%0A%20%20%20%20%20%20description%2C%0A%20%20%20%20%20%20%22image%22%3Aimage.asset-%3Eurl%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%20sectionTwo%7B%0A%20%20%20%20%20%20%20%20pageHeader%2C%0A%20%20description%2C%0A%20%20%20%20callToAction1%20-%3E%20%7B%0A%20%20%20%20cta%2C%0A%20%20%20%20%20%20buttonText%2C%0A%20%20%20%20%20%20routes%0A%20%20%0A%20%20%20%20%7D%7D%2C%0A%20%20%20lastSection%7B%0A%20%20%20%20%20%20pageHeader%2C%0A%20%20description%2C%0A%20%20%20callToAction1%20-%3E%20%7B%0A%20%20%20%20%20cta%2C%0A%20%20%20%20%20%20buttonText%2C%0A%20%20%20%20%20%20routes%0A%20%20%20%20%7D%2C%0A%20%20%20%20callToAction2%20-%3E%20%7B%0A%20%20%20%20cta%2C%0A%20%20%20%20%20%20buttonText%2C%0A%20%20%20%20%20%20routes%0A%20%20%0A%20%20%20%20%7D%0A%20%20%20%7D%2C%0A%20%20sectionOne%20%7B%0A%20%20%20%20%20pageHeader%2C%0A%20%20description%2C%0A%20%20%20%20callToAction1%20-%3E%20%7B%0A%20%20%20%20%20cta%2C%0A%20%20%20%20%20%20buttonText%2C%0A%20%20%20%20%20%20routes%0A%20%20%20%20%7D%2C%0A%20%20%20%20callToAction2%20-%3E%20%7B%0A%20%20%20%20cta%2C%0A%20%20%20%20%20%20buttonText%2C%0A%20%20%20%20%20%20routes%0A%20%20%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D",
  );
  return response.data.result[0];
};

export const fetchOpenings = async () => {
  const response = await axios.get(
    "https://9cqbua0r.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22openings%22%20%5D%20%7C%20order(_createdAt%20asc)",
  );
  return response.data.result;
};

export const fetchReservations = async () => {
  const response = await axios.get(
    "https://9cqbua0r.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22reservations%22%20%5D%20%7B_id%2C_createdAt%2C%22banner%22%3A%20banner.asset%20-%3E%20url%2Cdesc%2CgroupDesc%2CgroupTitle%2CgroupCTA-%3E%20%7B%0A%20%20%20%20%20cta%2C%0A%20%20%20%20%20%20buttonText%2C%0A%20%20%20%20%20%20routes%0A%20%20%20%20%7D%2CcallToAction%2CopeningHours%2Ctitle%7D",
  );
  return response.data.result[0];
};

export const fetchFaqs = async () => {
  const response = await axios.get(
    "https://9cqbua0r.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22faq%22%20%5D%7C%20order(_createdAt%20asc)%20%7B_id%2C_createdAt%2Cquestion%2Canswer%7D",
  );
  return response.data.result;
};

export const fetchBlogHero = async () => {
  const response = await axios.get(
    "https://9cqbua0r.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22blogHero%22%20%5D%7B%0A%20%20featured-%3E%7B%0A%20%20%20%20title%2C%0A%20%20%20%20summary%2C%0A%20%20%20%20_createdAt%2C%0A%20%20%20%20%22slug%22%3Aslug.current%2C%0A%20%20%20%20%22image%22%3A%20image.asset%20-%3E%20url%2C%0A%20%20%20%20content%0A%20%20%7D%2C%0A%20%20%20%22image%22%3A%20image.asset%20-%3E%20url%2C%0A%20%20%20%20header%2CblogDesc%2Ctitle%0A%20%20%0A%7D%0A",
  );
  return response.data.result[0];
};

export const fetchBlogPost = async () => {
  const response = await axios.get(
    "https://9cqbua0r.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22blog%22%20%5D%7B%0A%20%20%20%20%20%20%20%20_id%2C%0A%20%20%20%20%20%20%20%20_createdAt%2C%0A%20%20%20%20%20%20%20%20summary%2C%0A%20%20%20%20%20%20%20%20title%2C%0A%20%20%20%20%20%20%20%20%22slug%22%3Aslug.current%2C%0A%20%20%20%20%20%20%20%20%22image%22%3A%20image.asset%20-%3E%20url%2C%0A%20%20%20%20%20%20%20%20content%0A%20%20%20%20%7D",
  );
  return response.data.result;
};

export const fetchMenuContent = async () => {
  const response = await axios.get(
    "https://9cqbua0r.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22menuSectionOne%22%5D%20%7B%0A%20%20%22banner%22%3A%20banner.asset-%3Eurl%2C%0A%20%20%20%20title%2C%0A%20%20_id%2C%0A%20%20%22image%22%3A%20image.asset-%3Eurl%2C%0A%20%20description%2C%0A%20%20callToAction-%3E%7B%0A%20%20%20%20cta%2C%0A%20%20%20%20buttonText%2C%0A%20%20%20%20routes%0A%20%20%7D%2C%0A%20%20%22images%22%3A%20Images%5B%5D.asset-%3Eurl%0A%7D",
  );
  return response.data.result[0];
};

export const fetchMenuList = async () => {
  const response = await axios.get(
    "https://9cqbua0r.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22menus%22%5D%20%7B%0A%20%20%0A%20%20%20%20title%2C%0A%20%20%20%20time%2C%0A%20%20%20%20date%2C%0A%20%20_id%2C%0A%20%20%22image%22%3A%20image.asset-%3Eurl%2C%0A%20%20description%2C%0A%20%20callToAction-%3E%7B%0A%20%20%20%20cta%2C%0A%20%20%20%20buttonText%2C%0A%20%20%20%20routes%0A%20%20%7D%2C%0A%20%20%22images%22%3A%20Images%5B%5D.asset-%3Eurl%0A%7D",
  );
  return response.data.result;
};

export const fetchSpecialMenu = async () => {
  const response = await axios.get(
    "https://9cqbua0r.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22specialMenu%22%5D%20%7B%0A%20%20title%2C%0A%20%20%20%20intro%2C%0A%20%20%20%20time%2C%0A%20%20%20%20date%2C%0A%20%20_id%2C%0A%20%20description%2C%0A%20%20callToAction-%3E%7B%0A%20%20%20%20cta%2C%0A%20%20%20%20buttonText%2C%0A%20%20%20%20routes%0A%20%20%7D%2C%0A%20%20%22image%22%3A%20specialImage.asset-%3Eurl%0A%7D",
  );
  return response.data.result[0];
};

export const fetchSingleBlog = async (slug: string) => {
  const response = await axios.get(
    `https://9cqbua0r.api.sanity.io/v2021-10-21/data/query/production?query=*%5Bslug.current%20%3D%3D%20%22${slug}%22%5D%7B%0A%20%20%20%20%20%20%20%20%20%20%20_id%2C%0A%20%20%20%20%20%20%20%20_createdAt%2C%0A%20%20%20%20%20%20%20%20summary%2C%0A%20%20%20%20%20%20%20%20title%2C%0A%20%20%20%20%20%20%20%20author%2C%0A%20%20%20%20%20%20%20%20%22slug%22%3Aslug.current%2C%0A%20%20%20%20%20%20%20%20%22image%22%3A%20image.asset%20-%3E%20url%2C%0A%20%20%20%20%20%20%20%20content%0A%20%20%20%20%20%20%20%7D`,
  );

  return response.data.result[0];
};

export const fetchFooter = async () => {
  const response = await axios.get(
    `https://9cqbua0r.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22footer%22%5D%20%7B%0A%20%20%20left%2C%0A%20%20%20%20mid%7B%0A%20%20%20%20%20%22image%22%3A%20asset-%3Eurl%2C%0A%20%20%20%20%7D%2C%0A%20%20right%2C%0A%20%20footerNote%20%0A%7D`,
  );

  return response.data.result[0];
};

export const fetchEventAlert = async () => {
  const response = await axios.get(
    `https://9cqbua0r.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22eventAlert%22%5D%20%7B%0A%20%20title%2C%0A%20%20%20%20body%0A%7D`,
  );

  return response.data.result[0];
};

export const fetchReservationAlert = async () => {
  try {
    const response = await axios.get(
      "https://9cqbua0r.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22reservationAlert%22%5D%20%7B%0A%20%20title%2C%0A%20%20%20%20body%0A%7D",
    );
    const reservationAlert = response.data.result[0];

    reservationStore.setState((state) => ({
      ...state,
      reservationAlert,
    }));
    return reservationAlert;
  } catch (error) {
    console.error("Error fetching reservation alert", error);
  }
};

export const fetchReservationConfig = async () => {
  try {
    const response = await axios.get(
      // 'https://9cqbua0r.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22reservationConfig%22%5D%7B%0A%20%20title%2C%20to%2C%20from%0A%7D'
      "https://9cqbua0r.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22reservationProto%22%20%5D%0A",
    );

    const reservationConfig = response.data.result;

    reservationConfigStore.setState((state) => ({
      ...state,
      reservationConfig,
    }));
    return reservationConfig;
  } catch (error) {
    console.error("Error fetching reservation alert", error);
  }
};
 
export const fetchMembershipConfig = async () => {
  try {
    const response = await axios.get(
      'https://9cqbua0r.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22membership%22%5D%7B%0A%20membershipHero%20%7B%0A%20%20%20%20desktopImage%7B%22image%22%3A%20asset-%3Eurl%7D%2C%0A%20%20%20%20mobileImage%7B%22image%22%3A%20asset-%3Eurl%7D%0A%20%20%7D%2C%0A%20%20terms%2C%0AmembershipSectionOne%7B%0A%20%20title%2C%0Adescription%2C%0AcallToAction-%3E%7B%0A%20%20%20%20cta%2C%0A%20%20%20%20buttonText%2C%0A%20%20%20%20routes%0A%20%20%7D%2C%0A%7D%2C%0A%20%20membershipSectionTwo%20%7B%0A%20%20%20%20title%2C%0A%20%20%20%20description%2C%0A%20%20%20%20privilegesImage%20%7B%0A%20%20%20%20%20%20desktopImage%7B%22image%22%3A%20asset-%3Eurl%7D%2C%0A%20%20%20%20%20%20mobileImage%7B%22image%22%3A%20asset-%3Eurl%7D%0A%20%20%20%20%7D%2C%0A%20%20%7D%2C%0A%7D'
    );

   return response.data.result[0]
  } catch (error) {
    console.error("Error fetching membership alert", error);
  }
};