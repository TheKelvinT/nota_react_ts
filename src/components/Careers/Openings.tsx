import Button from "@/components/Button";
import { Tab } from "@headlessui/react";
import { JobOpeningModel } from "@/types/Careers";
import handleNullData from "@/utils/handleNullData";


type Props = { openings: JobOpeningModel[] | null };

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const Openings = ({ openings }: Props) => {
  handleNullData(openings)
  const tabStyles = ({ selected }: any) =>
    classNames(
      "w-full rounded-lg py-2.5 px-4 whitespace-nowrap outline-none text-md  text-gray-50",
      "",
      selected
        ? "bg-white/[0.22] font-bold"
        : " hover:bg-white/[0.22] hover:text-gray-50"
    );
  return (
    <section
      id="opening"
      className="pb-24 flex-col justify-center items-center "
    >
      <div className="flex justify-center">
        <h3 className="py-12">Current Openings:</h3>
      </div>

      <div className=" mx-auto w-11/12 lg:max-w-[1073px]">
        <Tab.Group>
          <div className="sm:flex sm:flex-row  ">
            <Tab.List>
              <div className="flex sm:flex-col gap text-xs sm:overflow-visible overflow-x-scroll">
                {openings?.map((opening) => (
                  <Tab
                    key={opening._id}
                    className={({ selected }) =>
                      classNames(
                        "py-4 md:py-5 px-2 md:px-3 w-36 font-gothic text-right text-xs border border-secondary border-opacity-20",
                        "  ",
                        selected ? "bg-primary  focus:outline-none border border-secondary border-opacity-20 " : "   "
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
                        <h3 className="text-xl ">{opening.position}</h3>
                        <p className="text-lg font-gothic mb-2">
                          {opening.lowSalaryRange} - {opening.highSalaryRange}
                        </p>
                      </div>
                      <p className="text-xs">{opening.summary}</p>
                      <div className="flex w-full py-8">
                        <h3 className="whitespace-nowrap text-base font-gothic  mr-9">
                          Job Description
                        </h3>
                        <div className="w-full border-t mt-3 border-main"></div>
                      </div>
                      <div className="flex justify-center md:mb-12">
                        <ul className="text-main text-xs list-disc space-y-4 w-11/12 md:w-4/5 leading-5  ">
                          {opening.jobDescription.map((desc, idx) => (
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
                          {opening.jobReq.map((req, idx) => (
                            <li key={idx}>{req}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="text-main text-xs">
                        <p className="">
                          If you’re interested, send us your cv via email at
                          notaconcepts@gmail.com or Whatsapp at +60 12 6700 211.
                        </p>
                        <div className="flex justify-center py-12">
                          <Button title="APPLY NOW" width="w-48" />
                        </div>
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
