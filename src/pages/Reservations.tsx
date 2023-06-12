import Loading from "@/components/Loading";

import {useState, useEffect} from "react";
import ReservationDesc from "@/components/Reservations/ReservationDesc";
import Faq from "@/components/Reservations/Faq";

import ContactSection from "@/components/ContactSection";
import { FaqModel, ReservationsModel } from "@/types/Reservations";
import { fetchFaqs, fetchReservations } from "@/utils/request";
import useLoadingStore from "@/store/loadingStore";
import CustomImage from "@/components/CustomImage";

const Reservations = () => {
    const [faq, setFaq] = useState<FaqModel>([])
  const [reservationsContent, setReservationsContent] = useState<ReservationsModel | null>(null);
  const loading = useLoadingStore((state: any) => state.loading);
  const setLoading = useLoadingStore((state: any) => state.setLoading);

   useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const [data, contentData] = await Promise.all([
          fetchFaqs(),
          fetchReservations(),
        ]);

        setFaq(data)
        setReservationsContent(contentData);
    
      } catch (error) {
        console.error("Error fetching carousel images:", error);
        setLoading(false)
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    
  }, []);
  return <div>
     {loading ? (
          
          <Loading/>

      ) : (
        <>
      <div className="relative  overflow-hidden mx-auto max-w-[1920px] h-[40vh] lg:h-[60vh] bg-main">
        <CustomImage
          Imgsrc={reservationsContent?.banner}

          alt="reservation-hero"
        />
      </div>
      <ReservationDesc data={reservationsContent} />
      <ContactSection />
      <Faq faq={faq} />
    </>
      )}
  </div>;
};

export default Reservations;
