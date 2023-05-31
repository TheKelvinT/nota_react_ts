"use client"
import  { useState } from "react";
import moment from "moment";
import {  Modal, Col, Row,TimePicker,DatePicker, message } from 'antd';



import CustomButton from "./Button";
import { ExclamationCircleFilled } from "@ant-design/icons";
function ContactSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [hour, setHour] = useState(0);
 const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    date: null,
    time: null,
    special: "",
  });
  
  let modalContent;

if (hour >= 20) {
  modalContent = <p>Kitchen&apos;s last call at 8pm for dinner service.</p>;
} else if (hour >= 15 && hour <= 16) {
  modalContent = (
    <p>
      Kitchen&apos;s Last Call at 3:30pm for Lunch/Brunch Service and resumes for Dinner Service at 5pm.
    </p>
  );
} else if (hour <= 9 || hour >= 21) {
  modalContent = <p>Out of operating hours range. Please try again.</p>;
}



  const disabledDate = (current: any) => {
    return current < Date.now() || new Date(current).getDay() === 3;
  };
  const disabledTime:any = () => {
  // Implement your logic to disable specific hours, minutes, and seconds
  // Return an object with the disabledHours, disabledMinutes, and disabledSeconds functions
  return {
    disabledHours: () => [0, 1, 2, 3, 4, 5,6,7,8,9,21,22,23], // Disable hours 0 to 5
    disabledMinutes: (selectedHour:any) => {
      if (selectedHour === 6) {
        return [0, 1, 2]; // Disable minutes 0 to 2 when hour is 6
      }
      return []; // Disable no minutes for other hours
    },
    disabledSeconds: (selectedHour: number, selectedMinute:number) => {
      if (selectedHour === 6 && selectedMinute === 3) {
        return [0, 1]; // Disable seconds 0 to 1 when hour is 6 and minute is 3
      }
      return []; // Disable no seconds for other hours and minutes
    },
  };
};
  const format = "HH:mm";

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDateChange = (date:any) => {
    setFormData((prevState) => ({
      ...prevState,
      date,
    }));
  };

  const handleTimeChange = (time: any) => {
  const hour = time?.$H;
  console.log(moment(time));
  console.log(hour);
  setHour(hour);

  if ((hour >= 15 && hour <= 16) || hour >= 20 || hour <= 9 || hour >= 21) {
    setModalOpen(true);
  }

  if (hour <= 9 || hour >= 21) {
    setModalOpen(true);
    setFormData((prevState) => ({ ...prevState, time: null }));
  } else {
    setFormData((prevState) => ({ ...prevState, time }));
  }
};

 const handleSubmit = (e: any) => {
  e.preventDefault();
  console.log("Form data:", formData);

  const formValues = Object.values(formData);

  if (formValues.some((value) => value === null || value === undefined )) {

    message.error("Booking form cannot contain empty fields.");
    
  } else {
    message.success("You got yourself a table!");
  }

  // Perform form submission logic here
};

  return (
    <div id="book" className="bg-primary   text-main">
      <div className="flex flex-col md:flex-row justify-center py-20  mx-auto mt-24 md:gap-x-16 lg:gap-x-28 xl:gap-x-56 w-11/12 lg:w-auto">
        <div className="lg:w-[500px] ">
          <div className="mb-8">
            <h3 className="text-3xl">Chope A Table</h3>
          </div>
          <div className="">
            <form action="" method="post" onSubmit={handleSubmit}>
              <Row className="flex items-center py-2 ">
                <Col span={6} >
                  <label htmlFor="name" className="font-gothic text-lg">
                    Name
                  </label>
                </Col>
                <Col span={18}>
                <input
                  type="text"
                  id="name"
                  onChange={handleInputChange}
                  name="name"
                  placeholder="name"
                  required
                  className="bg-primary border border-main/20 text-xs placeholder-place px-4 h-12 w-full "
                />
                </Col>
              </Row>
              <Row className="flex items-center py-2 ">
                <Col span={6}>
                  <label htmlFor="contact" className="font-gothic text-lg">
                    Contact 
                  </label>
                </Col>
                <Col span={18}>
                <input
                  type="number"
                  id="contact"
                  onChange={handleInputChange}
                  name="contact"
                  placeholder="contact no"
                  required
                  className="bg-primary border border-main/20 text-xs w-full placeholder-place px-4 h-12"
                />
                </Col>
              </Row>
              <Row className="flex items-center py-2">
                <Col span={6} >
                  <label htmlFor="email" className="font-gothic text-lg">
                    Email
                  </label>
                </Col>
                <Col span={18}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleInputChange}
                  placeholder="email"
                  required
                  className="bg-primary border border-main/20 text-xs w-full placeholder-place px-4 h-12"
                />
                </Col>
              </Row>
     
              <Row className=" py-2 flex items-center" gutter={[0,16]}  >
                <Col span={6} sm={6}>
                  <label htmlFor="date" className="font-gothic  text-lg   ">
                      Date
                    </label>
                    </Col>
                <Col span={18} sm={6} className=""> 
                <DatePicker
                      name="date"
                      id="date"
                      format="DD-MM-YYYY"
                      disabledDate={disabledDate}
                      onChange={handleDateChange}
                      placeholder={"date"}
                      className="bg-primary border text-[#333333] rounded-none border-main/20 text-xs font-inter w-full px-4 h-12 custom-picker"
                    /></Col>
                <Col span={6} sm={6} className="">
                  <label htmlFor="time" className="font-gothic text-lg ssm:flex ssm:justify-center">
                      Time
                    </label>
                    </Col>
                <Col span={18} sm={6} > 
                  <TimePicker
                      minuteStep={15}
                      secondStep={10}
                      format={format}
                       onChange={handleTimeChange}
                      disabledTime={disabledTime}
                      changeOnBlur={true}
                      placeholder="00:00"
                      hideDisabledOptions={true}
                      name="time"
                      id="time"
                      className="bg-primary border border-main/20 text-xs rounded-none w-full text-black/30  px-4 h-12 custom-picker "
                    /></Col> 
                </Row>      
                    
                 
                   
                   
          
              <Row className="pt-4 mb-8" gutter={[0,6]}>
                <Col span={24}>
                <label htmlFor="special" className="font-gothic text-lg mb-4">
                  Special Requirements<span className="text-xs"> (if any)</span>
                </label>
                </Col>
                <Col span={24}>
                <textarea
                  id="special"
                  name="special"
                  onChange={handleInputChange}
                  placeholder="additional information: (such as dietary requirements, celebration details, special care, etc)"
                  className="bg-primary font-inter border placeholder-place border-main/20 text-xs w-full  py-2 px-4 h-16"
                />
                </Col>
              </Row>
              <div className="flex justify-center md:block">
              <CustomButton title="SUBMIT NOW" />
              </div>
            </form>
          </div>
        </div>
  
        <div className="flex flex-col sm:justify-between sm:flex-row  md:flex-col mt-7 py-4 w-4/5 md:w-auto ">
          <div className="flex flex-col md:order-2 ">
            <h3 className="text-2xl pb-4">Contact Us</h3>

            <div className="flex flex-col space-y-1 pb-12">
              <h5 className="text-2xl font-gothic">Mobile</h5>
              <p className="text-sm">+60 17 489 1189</p>
            </div>
            <div className="flex flex-col space-y-1">
              <h5 className="text-2xl font-gothic">Address</h5>
              <p className="text-sm">No. 1-1 (First Floor),</p>
              <p className="text-sm">Jalan Anggerik Vanilla BF 31/BF,</p>
              <p className="text-sm">Kota Kemuning, 40460 Shah Alam,</p>
              <p className="text-sm">Selangor.</p>
            </div>
          </div>
          <div className="flex flex-col sm:pb-12 pt-12 sm:pt-0">
            <div className="lg:order-1 pb-12">
              <h3 className="text-2xl pb-4">Operating Hours </h3>
              <p className="text-lg font-marcellus">Mon - Sun | 10am - 9pm</p>
              <p className="text-lg font-marcellus">Closed on Wednesdays</p>
            </div>
            <div className="lg:order-1">
              <h3 className="text-2xl pb-4">Kitchen Last Call </h3>
              <p className="text-lg font-marcellus">Lunch - 330pm</p>
              <p className="text-lg font-marcellus">Dinner - 830pm</p>
            </div>
          </div>
        </div>
      </div>
    
       <Modal
        className="w-11/12"
        title="Are you sure about your reservation?"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
      >
       {modalContent}
     
      </Modal>
      
     
     
      
    </div>
  );
}

export default ContactSection;
