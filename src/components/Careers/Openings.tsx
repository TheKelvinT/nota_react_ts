import Button from "@/components/Button";
import { Tab } from "@headlessui/react";
import { JobOpeningModel } from "@/types/Careers";
import handleNullData from "@/utils/handleNullData";
import CustomH1 from "../StyleComponents/CustomH1";
import DescContainer from "../StyleComponents/DescContainer";
import JobApplication from "./JobApplication";
import { useState } from "react";


type Props = { openings: JobOpeningModel[] | null };

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const Openings = ({ openings }: Props) => {
  const [showForm, setShowForm] = useState(false)
  handleNullData(openings)

  const handleTabChange = () => {
    setShowForm(false);
  };

  console.log(openings)
  return (
    <section
      id="opening"
      className="pb-24 flex-col justify-center items-center "
    >
      <div className="flex justify-center py-12">
        <CustomH1 >Current Openings:</CustomH1>
      </div>

      <div className=" mx-auto w-11/12 lg:max-w-[1073px]">
        <Tab.Group onChange={handleTabChange}>
          <div className="sm:flex sm:flex-row  ">
            <Tab.List>
              <div className="flex sm:flex-col gap text-xs sm:overflow-visible overflow-x-scroll">
                {openings?.map((opening) => (
                  <Tab
                    key={opening._id}
                    className={({ selected }) =>
                      classNames(
                        "sm:mb-2 py-4 md:py-5 px-2 md:px-3 w-36 font-gothic tracking-widest text-center text-xs  ",
                        "  ",
                        selected ? "bg-primary  focus:outline-none   " : "  bg-light "
                      )
                    }
                  >
                    {opening.position}
                  </Tab>
                ))}
              </div>
            </Tab.List>
            <Tab.Panels className="">
              {openings?.map((opening) => (
                <Tab.Panel
                  key={opening._id}
                  className={classNames(" py-12 md:px-12 bg-primary ")}
                >
                  <div className="mx-auto w-11/12">
                    <div>
                      <div className="md:flex md:justify-between text-main pb-4 md:pb-7">
                        <CustomH1>{opening.position}</CustomH1>
                        {opening.salaryToggle && opening.lowSalaryRange && opening.lowSalaryRange && (<p className="text-lg font-gothic mb-2">
                        RM {opening.lowSalaryRange} - RM {opening.highSalaryRange}
                        </p>)} 
                        {!opening.salaryToggle && opening.upToSalary && (<p className="text-lg font-gothic mb-2">Up to RM {opening.upToSalary}</p>)}

                        
                      </div>
                      <DescContainer >{opening.summary}</DescContainer>
                      <div className="flex w-full py-8">
                        <h3 className="whitespace-nowrap text-base font-gothic  mr-9">
                          Job Description
                        </h3>
                        <div className="w-full border-t mt-3 border-main"></div>
                      </div>
                      <div className="flex justify-center md:mb-12">
                        <ul className="text-main text-xs list-disc space-y-4 w-11/12 md:w-4/5 leading-5  ">
                          {opening.jobDescription && opening.jobDescription.map((desc, idx) => (
                            <li key={idx}>{desc}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex w-full py-8">
                        <h3 className="whitespace-nowrap text-base font-gothic  mr-9">
                          Requirements
                        </h3>
                        <div className="w-full border-t mt-3 border-main"></div>
                      </div>
                      <div className="flex justify-center mb-12">
                        <ul className="text-main text-xs list-disc space-y-4  w-11/12 md:w-4/5 leading-5  ">
                          {opening.jobReq && opening.jobReq.map((req, idx) => (
                            <li key={idx}>{req}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="text-main text-xs">
                        <p className="">
                          If you’re interested, send us your cv via email at
                          notaconcepts@gmail.com or Whatsapp at +60 12 6700 211.
                        </p>
                        
                        {showForm? (
                     <div className="mt-12 ">
                     <JobApplication opening={opening}/>
                   </div>
                  ): (<div className="flex justify-center py-12"><Button title="APPLY NOW" onClick={()=> setShowForm(true)} width="w-48" /></div>) }  
                        
                      </div>
                    </div>
                  </div>

                             
                 
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </div>
        </Tab.Group>
      </div>
    </section>
  );
};

export default Openings;
