import React from "react";
import { CareersModel } from "@/types/Careers";
import { PortableText } from "@portabletext/react";
import handleNullData from "@/utils/handleNullData";
import { PortableTextComponent } from "../PortableTextComponent";
type Props = { data: CareersModel | null };

const CareerValues = ({ data }: Props) => {
  handleNullData(data)
  
  return (
    <div id="values" className="bg-primary flex flex-col items-center py-16  mx-auto">
      <div className="text-center space-y-4 pb-10 text-main w-11/12 max-w-[665px] ">
        <h3 className="pb-4">{data?.valuesSection.valuesTitle}</h3>
        <div className="text-xs leading-5 text-sub">
          <PortableText value={data?.valuesSection?.description || []} components={PortableTextComponent}   onMissingComponent={false}/>
        </div>
       
      </div>
      <div className="flex justify-evenly flex-wrap gap-4 max-w-[1920px]  w-11/12">
        {data?.valuesSection.values.map((value:any, idx: React.Key | null | undefined) => (
          // eslint-disable-next-line react/jsx-key
          <div key={idx} className="flex flex-col  ">
          <div className="max-w-[315px] max-h-[315px] overflow-hidden ">
            <img
              src={value.image}
              alt={value.alt}
              width="315"
              height="315"
              className="h-full w-full object-cover"
            />
            </div>
            <div className="max-w-[315px] flex-col flex mt-8 gap-y-3 text-center sm:text-start ">
              <h5 className="font-gothic text-base text-main  ">{value.value}</h5>
              <p className=" text-xs pb-4 text-dark ">{value.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerValues;
