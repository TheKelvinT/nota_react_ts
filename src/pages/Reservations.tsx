import Loading from "@/components/Loading";
import axios from "axios";
import {useState, useEffect} from "react";
import ReservationDesc from "@/components/Reservations/ReservationDesc";
import Faq from "@/components/Reservations/Faq";

import ContactSection from "@/components/ContactSection";
import { FaqModel, ReservationsModel } from "@/types/Reservations";


const Reservations = () => {
    const [faq, setFaq] = useState<FaqModel>([])
  const [reservationsContent, setReservationsContent] = useState<ReservationsModel>();
  const [isLoading, setIsLoading] = useState(true)

   useEffect(() => {
    const fetchData = async () => {
      try {
        const contentResponse = await axios.get(
          "https://9cqbua0r.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22reservations%22%20%5D%20%7B_id%2C_createdAt%2C%22banner%22%3A%20banner.asset%20-%3E%20url%2Cdesc%2CcallToAction%2CopeningHours%2Ctitle%7D"
        );
        const faqResponse = await axios.get(
          "https://9cqbua0r.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22faq%22%20%5D%7C%20order(_createdAt%20asc)%20%7B_id%2C_createdAt%2Cquestion%2Canswer%7D"
        );

        const data = faqResponse.data.result
        const contentData = contentResponse.data.result[0]
      
        setFaq(data)
        setReservationsContent(contentData);
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
        <>
      <div className="relative  overflow-hidden mx-auto max-w-[1920px]">
        <img
          src={reservationsContent?.banner}
          height="1000"
          width="1000"
          alt="reservation-hero"
          className="object-cover w-full h-auto "
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
