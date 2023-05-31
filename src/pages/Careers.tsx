import  { useState, useEffect } from "react";
import CareerCollage from "@/components/Careers/CareerCollage";
import CareerCTA from "@/components/Careers/CareerCTA";
import CareerValues from "@/components/Careers/CareerValues";
import OtherOpportunities from "@/components/Careers/OtherOpportunities";
import CareerDesc from "@/components/Careers/CareerDesc";
import Openings from "@/components/Careers/Openings";
import Loading from "@/components/Loading";
import axios from "axios";
import { CareersModel, JobOpeningModel } from "@/types/Careers";


const Careers = () => {
   const [openings, setOpenings] = useState<JobOpeningModel[] | null>([]);
  const [careersContent, setCareersContent] = useState<CareersModel>();
  const [isLoading, setIsLoading] = useState(true)

   useEffect(() => {
    const fetchData = async () => {
      try {
        const contentResponse = await axios.get(
          "https://9cqbua0r.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22careerContent%22%20%5D%7B%0A%20%20valuesSection%7B%0A%20%20%20%20description%2C%0A%20%20%20%20valuesTitle%2C%0A%20%20%20%20values%5B%5D%7B%0A%20%20%20%20%20%20value%2C%0A%20%20%20%20%20%20description%2C%0A%20%20%20%20%20%20%22image%22%3Aimage.asset-%3Eurl%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%20sectionTwo%7B%0A%20%20%20%20%20%20%20%20pageHeader%2C%0A%20%20description%2C%0A%20%20%20%20callToAction1%20-%3E%20%7B%0A%20%20%20%20cta%2C%0A%20%20%20%20%20%20buttonText%2C%0A%20%20%20%20%20%20routes%0A%20%20%0A%20%20%20%20%7D%7D%2C%0A%20%20%20lastSection%7B%0A%20%20%20%20%20%20pageHeader%2C%0A%20%20description%2C%0A%20%20%20callToAction1%20-%3E%20%7B%0A%20%20%20%20%20cta%2C%0A%20%20%20%20%20%20buttonText%2C%0A%20%20%20%20%20%20routes%0A%20%20%20%20%7D%2C%0A%20%20%20%20callToAction2%20-%3E%20%7B%0A%20%20%20%20cta%2C%0A%20%20%20%20%20%20buttonText%2C%0A%20%20%20%20%20%20routes%0A%20%20%0A%20%20%20%20%7D%0A%20%20%20%7D%2C%0A%20%20sectionOne%20%7B%0A%20%20%20%20%20pageHeader%2C%0A%20%20description%2C%0A%20%20%20%20callToAction1%20-%3E%20%7B%0A%20%20%20%20%20cta%2C%0A%20%20%20%20%20%20buttonText%2C%0A%20%20%20%20%20%20routes%0A%20%20%20%20%7D%2C%0A%20%20%20%20callToAction2%20-%3E%20%7B%0A%20%20%20%20cta%2C%0A%20%20%20%20%20%20buttonText%2C%0A%20%20%20%20%20%20routes%0A%20%20%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D"
        );
        const openingsResponse = await axios.get(
          "https://9cqbua0r.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22openings%22%20%5D%20%7C%20order(_createdAt%20asc)"
        );

        const data = openingsResponse.data.result
        const contentData = contentResponse.data.result[0]
      

    
    
        setOpenings(data);
        setCareersContent(contentData);
        console.log(contentData)
        console.log(data)
     
      } catch (error) {
        console.error("Error fetching carousel images:", error);
      } finally {
        setIsLoading(false)
      }
    };

    fetchData();
    
  }, []);

  return <div>
     {isLoading ? (
          
          <Loading/>

      ) : (
<div>
      <CareerDesc data={careersContent} />
      <CareerCollage />
      <CareerCTA data={careersContent} />
      <Openings openings={openings} />
      <CareerValues data={careersContent} />
      <OtherOpportunities data={careersContent} />
    </div>
      
      )}
  </div>;
};

export default Careers;
