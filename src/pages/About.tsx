import {useState, useEffect} from "react";
import { fetchAbout } from "@/utils/request";
import AboutDesc from "@/components/About/AboutDesc";
import AboutCTA from "@/components/About/AboutCTA";
import ToCareerPage from "@/components/About/ToCareerPage";
import Loading from "@/components/Loading";
import { AboutModel } from "@/types/About";
import useLoadingStore from "@/store/loadingStore";

const About = () => {
  const [aboutContent, setAboutContent] = useState<AboutModel | null>(null);
  const loading = useLoadingStore((state: any) => state.loading);
  const setLoading = useLoadingStore((state: any) => state.setLoading);

    useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const [data] = await Promise.all([
          fetchAbout(),
        ]);
    
        setAboutContent(data);
      } catch (error) {
        console.error("Error fetching data", error);
        setLoading(false)
      } finally{             
        setLoading(false)
      }
    };
    fetchData();
  }, []);


  return (
   <div className="">
         {loading ? (
          
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
