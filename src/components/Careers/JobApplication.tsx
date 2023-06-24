import { useState } from "react";
import Button from "../Button";
import CustomH1 from "../StyleComponents/CustomH1"
import { Alert, DatePicker, Form, Input , Select, Upload } from 'antd';
import moment from 'moment'
import emailjs from 'emailjs-com';
import { nationalities } from "@/utils/countries";
import { Rule } from "antd/es/form";
import { JobOpeningModel } from "@/types/Careers";

type Props = {
    opening: JobOpeningModel;
  };

// type formValueModel = {
//     firstname?:string;
//     lastname?: string;
//     contact?: string;
//     email?: string;
//     dob?: string;
//     nationality?: string;
//     availability?: number;
//   } 

const JobApplication = ({ opening }: Props) => {
  
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const [form] = Form.useForm();
    const { Option } = Select;
  
    const normFile = (e: any) => {
        if (Array.isArray(e)) {
          return e;
        }
        return e?.fileList;
      };
    
    

      const disabledDate = (current: any) => {
        return current < Date.now() 
      };
      const disabledDateDOB = (current: any) => {
        return current > Date.now() 
      };

      const sendEmail = async (formattedValues:any) => {
       
        try {
          setIsLoading(true)
          await emailjs.send(
            'service_ft1p6fp',
            'template_g9f5bsg',
            formattedValues,
            'k-o6gKU7rmtoFJwGq',   
          );
          console.log('Email sent successfully');
          setIsLoading(false)
          setSuccess(true)
        } catch (error) {
          // console.error('Error sending email:', error);
          // Add an error message or handle the error as needed
          setIsLoading(false)
          setError(true)
        }
      };
      
      const  onFinish = async (values: any) => {

        const formattedDOB = moment(values?.dob?.$d).format('DD-MMMM-YYYY');
        const formattedAvailability = moment(values?.availability?.$d).format('DD-MMMM-YYYY');
        
        const formattedValues = {
        position:opening.position,
          ...values,
          dob: formattedDOB,
          availability: formattedAvailability,
          resume: values.resume[0].response.link 
      
   
        };
  
       
        sendEmail(formattedValues);
   
      };

      const rules = {
        firstName:[
          {
          required: true,
          message: 'First name cannot be empty.',
        },
        ],
        lastName:[
            {
            required: true,
            message: 'Last name cannot be empty.',
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
          max: 15,
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
            ] as Rule[],
            date:[
                {
                required: true,
                message: 'Date of Birrth cannot be empty.',
                },
            ],
        nationality:[
            {
            required: true,
            message: 'Nationality cannot be empty.',
            }
        ],
      availability: [
        {
          required: true,
          message: 'Earliest Date Availablity cannot be empty.',
        },
      ],
      resume: [
        {
          required: true,
          message: 'Please upload a pdf file',
        },
        {
            validator: (_:any, fileList:any) => {
              if (fileList && fileList.length > 0) {
                const file = fileList[0];
                const allowedExtensions = ['.pdf'];
                const maxSize = 1 * 1024 * 1024; // 20MB
      
                // Check file extension
                const fileExtension = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();
                const isValidExtension = allowedExtensions.includes(fileExtension);
                if (!isValidExtension) {
                  return Promise.reject(new Error('Only PDF files are allowed.'));
                }
      
                // Check file size
                const isValidSize = file.size <= maxSize;
                if (!isValidSize) {
                  return Promise.reject(new Error('File size must be less than 20MB.'));
                }
              }
              
              return Promise.resolve();
            },
          },
        
      ],
      
      
    }
  return (
    <div className="w-11/12 mx-auto">
        <div className="mb-6">
            <CustomH1>Submit Your Application</CustomH1>
        </div>
        <div>
            <Form form={form} layout="vertical"  onFinish={onFinish} autoComplete="off" >
                <Form.Item name="first-name" rules={rules.firstName} label={<p className="font-gothic text-base">First Name</p>}>
                    <Input className="bg-primary border border-main/20 text-xs rounded-none w-full text-black/70  py-2 font-inter "/>
                </Form.Item>
                <Form.Item name="last-name" rules={rules.lastName}  label={<p className="font-gothic text-base">Last Name</p>}>
                    <Input className="bg-primary border border-main/20 text-xs rounded-none w-full text-black/70  py-2 font-inter "/>
                </Form.Item>
                <Form.Item name="contact" rules={rules.contact}  label={<p className="font-gothic text-base">Contact No</p>}>
                    <Input className="bg-primary border border-main/20 text-xs rounded-none w-full text-black/70  py-2 font-inter "/>
                </Form.Item>
                <Form.Item name="email" rules={rules.email}  label={<p className="font-gothic text-base">Email</p>}>
                    <Input className="bg-primary border border-main/20 text-xs rounded-none w-full text-black/70  py-2 font-inter "/>
                </Form.Item>
                <Form.Item name="dob" rules={rules.date}  label={<p className="font-gothic text-base">Date of Birth</p>}>
                <DatePicker
                      name="dob"
                      id="dob"
                      format="DD-MM-YYYY"
                      inputReadOnly={true}
                      disabledDate={disabledDateDOB}
                      showToday={false}
                      placeholder="Select date of birth"
                      className="bg-primary border text-[#333333] rounded-none border-main/20 text-xs font-inter w-full h-[38px] custom-picker"
                    />
                </Form.Item>
                <Form.Item name="nationality" rules={rules.nationality} label={<p className="font-gothic text-base">Nationality</p>}>
                            <Select
                             showSearch
                        className="bg-primary border border-main/20 text-xs rounded-none w-full text-black/70  font-inter"
                        optionFilterProp="children"
                        filterOption={(input, option:any) =>
                            option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                          }
                        placeholder="Select nationality"
                        >
                        {nationalities.map((nationality,idx:number) => (
                            <Option className="font-inter" value={nationality} key={idx}>
                            {nationality}
                            </Option>
                        ))}
                        </Select>
                </Form.Item>
                <Form.Item name="availability" rules={rules.availability} label={<p className="font-gothic text-base">Earliest Date Availability</p>}>
                <DatePicker
                      name="availability"
                      id="availability"
                      format="DD-MM-YYYY"
                      inputReadOnly={true}
                      disabledDate={disabledDate}
                      placeholder="Select date of birth"
                      className="bg-primary border text-[#333333] rounded-none border-main/20 text-xs font-inter w-full h-[38px] custom-picker"
                    />
                </Form.Item>
                <Form.Item name="resume" rules={rules.resume}valuePropName="fileList" getValueFromEvent={normFile}
                label={<p className="font-gothic text-base">Upload Résumé</p>}
                extra="Recommended: PDF file format under 20MB in size.">
                <Upload name="logo" listType="picture"  action="https://file.io/" accept=".pdf" maxCount={1}>
                    <Button title="Choose File"/>
                </Upload>
                </Form.Item>
                <div className="flex justify-center mt-12">
             {success? ( <Alert
              message="Your Job application has been submitted!"
              description={``}
              type="success"
              showIcon
            />) : error ? (<Alert
              message="Oops..."
              description="Something went wrong. Please try again later."
              type="error"
              showIcon
            />) :
            <Button title="SUBMIT APPLICATION" width="180px" loading={isLoading} />
              }

             
              </div>
            </Form>
        </div>
    </div>
  )
}

export default JobApplication

