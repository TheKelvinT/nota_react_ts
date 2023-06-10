import  { useState, useEffect } from "react";
import CareerCollage from "@/components/Careers/CareerCollage";
import CareerCTA from "@/components/Careers/CareerCTA";
import CareerValues from "@/components/Careers/CareerValues";
import OtherOpportunities from "@/components/Careers/OtherOpportunities";
import CareerDesc from "@/components/Careers/CareerDesc";
import Openings from "@/components/Careers/Openings";
import Loading from "@/components/Loading";
import { CareersModel, JobOpeningModel } from "@/types/Careers";
import { fetchCareers, fetchOpenings } from "@/utils/request";
import useLoadingStore from "@/store/loadingStore";

const Careers = () => {
   const [openings, setOpenings] = useState<JobOpeningModel[] | null>([]);
  const [careersContent, setCareersContent] = useState<CareersModel | null >(null);
  const loading = useLoadingStore((state: any) => state.loading);
  const setLoading = useLoadingStore((state: any) => state.setLoading);

   useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const [data, contentData] = await Promise.all([
          
          fetchOpenings(),fetchCareers(),
          
        ]);

        setOpenings(data);
        setCareersContent(contentData);
     
      } catch (error) {
        console.error("Error fetching carousel images:", error);
        setLoading(false)
      } finally {
        setLoading(false)
      }
    };

    fetchData();
    
  }, []);

  return <div>
     {loading ? (
          
          <Loading/>

      ) : (
<div className="scroll-smooth">
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
