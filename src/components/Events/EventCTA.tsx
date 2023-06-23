
import Button from "@/components/Button";
import { EventModel } from "@/types/Event";
import handleNullData from "@/utils/handleNullData";
import CustomH1 from "../StyleComponents/CustomH1";
import DescContainer from "../StyleComponents/DescContainer";
import { useState } from "react";
import { Modal } from "antd";
import LocalButton from "@/components/Button";
import { Link } from "react-router-dom";

type Props = { data: EventModel | null };

const EventCTA = ({ data }: Props) => {
  const [largeModalOpen, setLargeModalOpen] = useState(false)
  handleNullData(data)

  const handleOpen = () =>{
    setLargeModalOpen(true)
  }
 
  
  const handleClose = () => {
    setLargeModalOpen(false)
  }


  return (
    <section className="w-screen flex flex-col justify-center items-center py-20 ">
      <div className="text-center  flex flex-col items-center space-y-4 pb-8 text-main max-w-[665px] w-4/5">
        <CustomH1>{data?.sectionOne?.title}</CustomH1>
        <DescContainer>
          {data?.sectionOne?.desc}
        </DescContainer>
      </div>
      <div className=" flex justify-center gap-x-6">
          <Button title={data?.sectionOne?.callToAction?.buttonText || ""} onClick={handleOpen}  />
      </div>

      <Modal
        className="w-11/12 "
        title={<div className="text-[30px] bg-[#f5f5ef] py-8  text-main font-marcellus">Events</div>}
        centered
        open={largeModalOpen}
        width={1000}
        onCancel={handleClose}
        
        footer={[
          <div className="">
            <Link to="https://wa.me/60174891189" target="_blank">
          <LocalButton title="WHATSAPP US NOW" />
          </Link>
          </div>
        ]}
       
      >
      <div className="font-inter text-xs sm:text-[17px] leading-5 text-main">
      <h6>[PRIVATE EVENTS]</h6>
        <ul>
          <li>For private events, you will have the entire space for the designated time and a dedicated team to host your guests.
          </li>
          <li>Kindly note that private events are charged based on minimum spending.</li>
          <li>We can cater up to 50 - 60 guests (seated) or 60 - 70 guests (cocktails).</li>
        </ul>
      <br/>
      <h6> [SEMI-PRIVATE EVENTS]</h6>
        <ul>
          <li>For semi-private events, you will have a designated space and a dedicated team to host your guests.
          </li>
          <li>Kindly note that semi-private events are charged based on minimum spending.
          </li>
          <li>We can cater up to 20 - 30 guests (seated).
          </li>
        </ul>
      
      <br/>
      <h6>[CHEF’S TABLE EXPERIENCE]</h6>
      <p>We offer personalised and curated dining experience based on guests’ preferences.</p>
      <br/>
      <h6>[ENQUIRY]</h6>
      <p>Kindly contact us via WhatApp for events enquiry.</p>
      </div>
       
     
      </Modal>
    </section>
  );
};

export default EventCTA;
