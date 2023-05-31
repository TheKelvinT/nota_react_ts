import {useState, useEffect} from "react";

import AboutDesc from "@/components/About/AboutDesc";
import AboutCTA from "@/components/About/AboutCTA";
import ToCareerPage from "@/components/About/ToCareerPage";
import axios from "axios";
import Loading from "@/components/Loading";
import { AboutModel } from "@/types/About";


const About = () => {
    const [aboutContent, setAboutContent] = useState<AboutModel | null>(null);
  const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
    const fetchData = async () => {
      try {
      
        const contentResponse = await axios.get(
          "https://9cqbua0r.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22aboutContent%22%5D%7B%0A%20%20aboutHero%7B%0A%20%20%20%20%22image%22%3Aimage.asset%20-%3E%20url%2C%0A%20%20%7D%2C%0A%20%20sectionOne%7B%0A%20%20%20%20%22image%22%3Aimage.asset%20-%3E%20url%2C%0A%20%20%20%20%20%20description%2C%0A%20%20%20%20%20%20title%2C%0A%20%20%20%20%20%20statement%2C%0A%20%20%20%20%20%20statementTldr%2C%0A%20%20%20%20%20%20%20callToAction%20-%3E%20%7B%0A%20%20%20%20%20%20cta%2C%0A%20%20%20%20%20%20buttonText%2C%0A%20%20%20%20%20%20routes%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20sectionTwo%7B%0A%20%20%20%20%20%20description%2C%0A%20%20%20%20%20%20%20%20title%2C%0A%20%20%20%20%20%20%22image%22%3Amidbanner.asset%20-%3E%20url%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20sectionThree%7B%0A%20%20%20%20%20%20%20%20%22image%22%3Aimage.asset%20-%3E%20url%2C%0A%20%20%20%20%20%20%20%20%20%20%20description%2C%0A%20%20%20%20%20%20title%2C%0A%20%20%20%20%20%20%20callToAction%20-%3E%20%7B%0A%20%20%20%20%20%20cta%2C%0A%20%20%20%20%20%20buttonText%2C%0A%20%20%20%20%20%20routes%0A%20%20%20%20%7D%2C%0A%20%20%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%20%20%20%20%0A%7D"
        );
        const data = contentResponse.data.result[0]
     
    
    

        setAboutContent(data);

     
      } catch (error) {
        console.error("Error fetching data", error);
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
        <div>
      <div className="-mt-[80px] w-full max-w-[1920px] max-h-[600px] lg:h-auto mx-auto  overflow-hidden">
        <img
          src={aboutContent?.aboutHero?.image}
          alt="hero-banner"
          className="object-cover h-full w-full"
        />
      </div>
      <AboutCTA content={aboutContent}/>
      <AboutDesc content={aboutContent}/>
      <ToCareerPage content={aboutContent}/>
    </div>
      
      )}
    </div>
  );
};

export default About;
