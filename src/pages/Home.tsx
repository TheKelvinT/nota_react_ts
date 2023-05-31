import  { useState, useEffect } from "react";
import axios from "axios";
import IndexCTA from "../components/home/IndexCTA";
import MainCarousel from "../components/home/MainCarousel";

import IndexCTA2 from "@/components/home/IndexCTA2";
import IndexDesc from "@/components/home/IndexDesc";
import IndexNavigation from "@/components/home/IndexNavigation";
import ContactSection from "@/components/ContactSection";
import Loading from "@/components/Loading";
import { CarouselImage, HomeContent } from "@/types/Home";


const HomePage = () => {
  const [carouselImages, setCarouselImages] = useState<CarouselImage[] | null>([]);
  const [homeContent, setHomeContent] = useState<HomeContent | null>(null);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const carouselResponse = await axios.get(
          "https://9cqbua0r.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22homeCarousel%22%20%5D%7Bcarousel%5B%5D%20%7B%0A%20%20%20%20%20%20%22imageURL%22%3A%20asset%20-%3E%20url%0A%20%20%20%20%7D%7D"
        );
        const contentResponse = await axios.get(
          "https://9cqbua0r.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22homeContent%22%5D%20%7B%0A%20%20homeSectionTwo%20%7B%0A%20%20%20%20description%2C%0A%20%20%20%20title%2C%0A%20%20%20%20Images%5B%5D%20%7B%0A%20%20%20%20%20%20%22imageURL%22%3A%20asset%20-%3E%20url%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%20%20homeSectionOne%20%7B%0A%20%20%20%20description%2C%0A%20%20%20%20title%2C%0A%20%20%20%20callToAction%20-%3E%20%7B%0A%20%20%20%20%20%20cta%2C%0A%20%20%20%20%20%20buttonText%2C%0A%20%20%20%20%20%20routes%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22Logo%22%3A%20Logo.asset%20-%3E%20url%0A%20%20%7D%2C%0A%20%20homeMidBanner%20%7B%0A%20%20%20%20%22bannerURL%22%3A%20banner.asset%20-%3E%20url%0A%20%20%7D%2C%0A%20%20%20%20cards%20%5B%5D%7B%0A%20%20%20%20description%2C%0A%20%20%20%20%22image%22%3Aimage.asset%20-%3E%20url%2C%0A%20%20%20%20title%2C%0A%20%20%20%20callToAction%20-%3E%20%7B%0A%20%20%20%20%20%20cta%2C%0A%20%20%20%20%20%20buttonText%2C%0A%20%20%20%20%20%20routes%0A%20%20%20%20%7D%2C%0A%20%20%7D%2C%0A%20%20homeNavigation%20%5B%5D%7B%0A%20%20%20%20description%2C%0A%20%20%20%20%22image%22%3Aimage.asset%20-%3E%20url%2C%0A%20%20%20%20title%2C%0A%20%20%20%20callToAction%20-%3E%20%7B%0A%20%20%20%20%20%20cta%2C%0A%20%20%20%20%20%20buttonText%2C%0A%20%20%20%20%20%20routes%0A%20%20%20%20%7D%2C%0A%20%20%7D%0A%7D"
        );

        const data = carouselResponse.data.result[0].carousel
        const contentData = contentResponse.data.result[0]
      

    
    
        setCarouselImages(data);
        setHomeContent(contentData);
        console.log(contentData)
     
      } catch (error) {
        console.error("Error fetching carousel images:", error);
      } finally {
        setIsLoading(false)
      }
    };

    fetchData();
    
  }, []);

  return (
    <div className="">
         {isLoading ? (
          
          <Loading/>

      ) : (
        <>
        <MainCarousel images={carouselImages} />  
        <IndexCTA content={homeContent}/>
        <IndexDesc content={homeContent}/>
        <IndexCTA2 content={homeContent}/>
        <section className=" md:h-auto md:mt-48 mt-24 max-w-screen max-h-[500px] overflow-hidden">
        <img
          src={homeContent?.homeMidBanner?.bannerURL}
          alt="banner"
          className="object-cover w-full h-full"
        />
      </section>
       <IndexNavigation content={homeContent} />
       <ContactSection/>
        </>
      
      )}
    </div>
      
    
  );
};

export default HomePage;
