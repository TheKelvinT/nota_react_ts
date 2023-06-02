import  { useState, useRef } from "react";
import {  Modal,TimePicker,DatePicker, Form, Input, InputNumber, Row, Col} from 'antd';
import CustomButton from "./Button";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { Rule } from "antd/es/form";
import emailjs from 'emailjs-com';
import moment from 'moment'

function ContactSection() {
  const timePickerRef = useRef<any>(null);
  const [hour, setHour] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);


  let modalContent;

if (hour === 20) {
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
      if (selectedHour === 20) {
        return [30,45]; // Disable minutes 0 to 2 when hour is 6
      }
      return []; // Disable no minutes for other hours
    },
   
  };
};
  const format = "HH:mm";

  const handleTimeChange = (time: any) => {
  const hour = time?.$H;
  setHour(hour);

  if ((hour >= 15 && hour <= 16) || hour >= 20 || hour <= 9 || hour >= 21) {
    setModalOpen(true);
  }
  
};


//   e.preventDefault();
//   console.log("Form data:", formData);
  
//   const formValues = Object.values(formData);

//   if (formValues.some((value) => value === null || value === undefined )) {

//     message.error("Booking form cannot contain empty fields.");
    
//   } else {
//     message.success("Booking Successful!");
//   }

//   // Perform form submission logic here
// };

// const handleCancelModal = () =>{
//   if (hour === 20) {
//     setModalOpen(false)
//     setFormData({...formData, time:""})
//   } else if (hour >= 15 && hour <= 16) {
//     setModalOpen(false)
//     setFormData({...formData, time:""})
//   } else if (hour <= 9 || hour >= 21) {
//     setModalOpen(false)
//     setFormData({...formData, time:""})
//   }
// }
// const handleReset = () => {

//       if (timePickerRef.current) {
//       timePickerRef.current.setValue(null); // Reset the value to null
//     }

// };
const handleClose = () =>{
    setModalOpen(false)
}

const sendEmail = async (values:any) => {
  try {
    await emailjs.send(
      'service_ft1p6fp',
      'template_xd5re4r',
      values,
      'k-o6gKU7rmtoFJwGq',   
    );
    // console.log('Email sent successfully');
    // Add any success message or redirect to a success page
  } catch (error) {
    // console.error('Error sending email:', error);
    // Add an error message or handle the error as needed
  }
};

const [form] = Form.useForm();
const  onFinish = async (values: any) => {
  const formattedDate = moment(values.date.$d).format('DD-MMMM-YYYY');

  const formattedTime = moment(values.time.$d).format('h:mm a');

  
  const formattedValues = {
    ...values,
    date: formattedDate,
    time: formattedTime,
  };

  const errors: string[] = [];
if (!values.name) {
  errors.push("name");
}
if (!values.contact) {
  errors.push("contact");
}
if (!values.email) {
  errors.push("email");
}
if (!values.date) {
  errors.push("date");
}
if (!values.time) {
  errors.push("time");
}

if (errors.length > 0) {
  setFormErrors(errors);
  return;
}

setFormErrors([]);
  sendEmail(formattedValues);
};

// FORM VALIDATION


  const rules = {
    name:[
      {
      required: true,
      message: 'Name cannot be empty.',
    },
 
  ],
    contact: [
    {
      required: true,
      message: 'Contact cannot be empty.',
    },
    {
      pattern: /^[0-9-]+$/,
  
      message: 'Contact must contain only numbers.',
    },
    {
      min: 8,
      message: 'Contact must be at least 8 digits.',
    },
    {
      max: 12,
      message: 'Contact cannot exceed 12 digits.',
    },
  ],
  email:[
    {
      type: 'email',
      message: 'Please enter a valid email address.',
    },
    {
      required: true,
      message: 'Email address cannot be empty.',
    },
  ]as Rule[],
  date:[
    {
      required: true,
      message: 'Date cannot be empty.',
    },
  ],
  pax:[
    {
      required: true,
      message: 'Pax cannot be empty.',
    }
  ],
  time: [
    {
      required: true,
      message: 'Time cannot be empty.',
    },
   
  ],
  
  
}

  return (
    <div id="book" className="bg-primary   text-main">
      <div className="flex flex-col md:flex-row justify-center py-20  mx-auto mt-24 md:gap-x-16 lg:gap-x-28 xl:gap-x-56 w-11/12 lg:w-auto">
        <div className="lg:w-[500px] ">
          <div className="mb-8">
            <h3 className="text-3xl">Chope A Table</h3>
          </div>
        
            <Form form={form} colon={false} onFinish={onFinish}>
       
        
              <Form.Item name="name" label={<p className="font-gothic text-lg">Name</p>} rules={rules.name} labelCol={{span:6}}  labelAlign="left">
           
                <Input
                  type="text"
                  size="large"
                  id="name"
            
                  name="name"
                  placeholder="name"
            
                  className="bg-primary border border-main/20 text-xs placeholder-place h-12 font-inter w-full rounded-none"
                />
             
                  </Form.Item>
               
                  
              
                  <Form.Item name="contact" label={<p className="font-gothic text-lg">Contact</p>}  rules={rules.contact} labelCol={{span:6}} labelAlign="left" >
                    <Input
                    type="text"
                    id="contact"
               
                    name="contact"
                    placeholder="contact no"
             
                    className="bg-primary border border-main/20 text-xs w-full placeholder-place font-inter rounded-none h-12"
                  />  
                  </Form.Item>

                  <Form.Item name="email" label={<p className="font-gothic text-lg">Email</p>}  rules={rules.email} labelCol={{span:6}} labelAlign="left" >
                    <Input
                     type="email"
                     id="email"
                     name="email"
                     placeholder="email"
               
                     className="bg-primary border border-main/20 text-xs w-full placeholder-place font-inter rounded-none h-12"
                  />  
                  </Form.Item>

                {/* <Row gutter={[, 0]}>
                  <Col span={12}>
                  <Form.Item name="date" label={<p className="font-gothic text-lg">Date</p>}  rules={[{ required: true }]} labelCol={{span:12}} labelAlign="left" >
                
                <DatePicker
                      name="date"
                      id="date"
                      format="DD-MM-YYYY"
                      disabledDate={disabledDate}
                      placeholder={"date"}
                      className="bg-primary border text-[#333333] rounded-none border-main/20 text-xs font-inter w-full h-12 custom-picker"
                    />
                  </Form.Item>
                  </Col>
                  <Col span={12}>
                  <Form.Item name="time" label={<p className="font-gothic text-lg">Time</p>}  rules={[{ required: true }]} labelCol={{span:12}} labelAlign="" >
                        <TimePicker
                        ref={timePickerRef}
                        minuteStep={15}
                        secondStep={10}
                        format={format}
                        inputReadOnly={true}
                        disabledTime={disabledTime}
                        changeOnBlur={true}
                        placeholder="00:00"
                        hideDisabledOptions={true}
                        disabledMinutes={disabledMinutes}
                        name="time"
                        id="time"
                        className="bg-primary border border-main/20 text-xs rounded-none w-full text-black/30  px-4 h-12 font-inter custom-picker "
                      /> 
                    </Form.Item>
                  </Col>
                </Row> */}
                <Form.Item name="date" label={<p className="font-gothic text-lg">Date</p>}  rules={rules.date} labelCol={{span:6, sm:6}} labelAlign="left" >
              
                <DatePicker
                      name="date"
                      id="date"
                      format="DD-MM-YYYY"
                      disabledDate={disabledDate}
                      placeholder={"date"}
                      className="bg-primary border text-[#333333] rounded-none border-main/20 text-xs font-inter w-full h-12 custom-picker"
                    />
                  </Form.Item>
                <Row>
                <Col span={12} >
                  <Form.Item name="time" label={<p className="font-gothic text-lg ">Time</p>}  rules={rules.time}   
                   labelCol={{span:12 }} wrapperCol={{sm:12}} labelAlign="left" >
                      <TimePicker
                      ref={timePickerRef}
                      minuteStep={15}
                      secondStep={10}
                      format={format}
                      showNow={false}
                 
                      inputReadOnly={true}
                      disabledTime={disabledTime}
                      changeOnBlur={true}
                      onChange={handleTimeChange}
                      placeholder="00:00"
                      hideDisabledOptions={true}
                      name="time"
                      id="time"
                      className="bg-primary border border-main/20 text-xs rounded-none w-full text-black/30  h-12 font-inter custom-picker "
                    /> 
                  </Form.Item>
                  </Col>
                  <Col span={10} offset={2} >
                  <Form.Item name="pax" label={<p className="font-gothic text-lg ">pax</p>}  rules={rules.pax}   
                   labelCol={{span:12}} wrapperCol={{span:8, sm:12}} labelAlign="left" >
                    <InputNumber  name="pax"
                      id="pax" controls={true} min={1} max={70} placeholder="1" className="bg-primary border border-main/20 text-xs rounded-none w-full text-black/30  py-2 font-inter "/>
                    </Form.Item>
                  </Col>
                  
                </Row>
                 
             
                
                <Form.Item name="special" label={<p className="font-gothic text-lg">Special Requirements<span className="text-xs"> (if any)</span></p>} labelCol={{span:24}} wrapperCol={{span:24}} labelAlign="left">
               
                 <Input.TextArea
                  id="special"
                  name="special"
                  autoSize={{minRows:2, maxRows:6}}
                  className="bg-primary font-inter border placeholder-place border-main/20 text-xs w-full  py-2 rounded-none h-20 "
                  placeholder="additional information: (such as dietary requirements, celebration details, special care, etc)"

                 /> 
  
                </Form.Item>

              <div className="flex justify-center md:block">
              <CustomButton title="SUBMIT NOW" />
              {/* <Button type="primary" htmlType="submit">Submit</Button> */}
              </div>
            </Form >

       
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
        title={<div className=""><span className="h-full mr-4"><ExclamationCircleFilled className="text-[28px] text-yellow-500"/></span><span className="align-middle">Are you sure about your reservation?</span></div>}
        centered
        open={modalOpen}
        onOk={handleClose}
        onCancel={handleClose}
      >
       {modalContent}
     
      </Modal>
      
     
     
      
    </div>
  );
}



export default ContactSection;
