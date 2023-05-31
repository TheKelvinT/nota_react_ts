
import EventCTA from "@/components/Events/EventCTA";
import EventDesc from "@/components/Events/EventDesc";
import EventSlider from "@/components/Events/EventSlider";
import Gallery from "@/components/Events/Gallery";
import axios from "axios";
import {useState,useEffect} from 'react'
import { EventModel } from "@/types/Event";
import Loading from "@/components/Loading";


type Props = {};

const Events = (props: Props) => {
  const [eventContent, setEventContent] = useState< EventModel | null>(null);
  const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
    const fetchData = async () => {
      try {
      
        const contentResponse = await axios.get(
          "https://9cqbua0r.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22events%22%5D%7B%0A%20%20banner%7B%22image%22%3A%20asset-%3Eurl%7D%2C%0AsectionOne%7B%0A%20%20title%2C%0Adesc%2C%0AcallToAction-%3E%7B%0A%20%20%20%20cta%2C%0A%20%20%20%20buttonText%2C%0A%20%20%20%20routes%0A%20%20%7D%2C%0A%7D%2C%0AsectionTwo%7B%0A%20%20%22image%22%3A%20image.asset-%3Eurl%2C%0A%20%20%20%20title%2C%0A%20%20%20%20%20%20callToAction-%3E%7B%0A%20%20%20%20cta%2C%0A%20%20%20%20buttonText%2C%0A%20%20%20%20routes%0A%20%20%7D%2C%0ASectioncontent%2C%0A%20%20%20%20%20%20%0A%7D%2C%0AsectionThree%7B%0A%20%20%20%20%20%20%20carousel%5B%5D%7B%0A%20%20%20%20%22image%22%3A%20asset-%3Eurl%0A%20%20%7D%2C%0A%20%20title%2C%0A%20%20Sectioncontent%2C%0A%20%20callToAction-%3E%7B%0A%20%20%20%20cta%2C%0A%20%20%20%20buttonText%2C%0A%20%20%20%20routes%0A%20%20%7D%0A%7D%0A%7D"
        );
        const data = contentResponse.data.result[0]
         
          
    

        setEventContent(data);

     
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
        <>
      <div className="-mt-[80px]  max-w-[1920px] max-h-[600px] mx-auto overflow-hidden ">
        <img
          src={eventContent?.banner?.image}
          height="1000"
          width="2000"
          alt="hero-banner"
          className="object-cover w-screen h-auto"
        />
      </div>

      <EventCTA data={eventContent} />
      <EventDesc data={eventContent} />
      <EventSlider data={eventContent} />
      <Gallery />
      </>
      )
}
    </div>
  );
  }
export default Events;
