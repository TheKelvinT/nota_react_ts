
import EventCTA from "@/components/Events/EventCTA";
import EventDesc from "@/components/Events/EventDesc";
import EventSlider from "@/components/Events/EventSlider";
import Gallery from "@/components/Events/Gallery";
import {useState,useEffect} from 'react'
import { EventModel } from "@/types/Event";
import Loading from "@/components/Loading";
import { fetchEvents } from "@/utils/request";
import useLoadingStore from "@/store/loadingStore";


const Events = () => {
  const [eventContent, setEventContent] = useState< EventModel | null>(null);
  const loading = useLoadingStore((state: any) => state.loading);
  const setLoading = useLoadingStore((state: any) => state.setLoading);

    useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const [data] = await Promise.all([
          fetchEvents(),
        ]);

        setEventContent(data);
 
      } catch (error) {
        console.error("Error fetching data", error);
        setLoading(false)
      } finally {
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
