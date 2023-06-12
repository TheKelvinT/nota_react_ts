import React from "react";
import { CareersModel } from "@/types/Careers";
import { PortableText } from "@portabletext/react";
import handleNullData from "@/utils/handleNullData";
import CustomH1 from "../StyleComponents/CustomH1";
import DescContainer from "../StyleComponents/DescContainer";
import CustomImage from "../CustomImage";

type Props = { data: CareersModel | null };

const CareerValues = ({ data }: Props) => {
  handleNullData(data)
  
  return (
    <div id="values" className="bg-primary flex flex-col items-center py-16  mx-auto">
      <div className="text-center space-y-4 pb-10 text-main w-11/12 max-w-[665px] ">
        <div className="pb-4">
        <CustomH1>{data?.valuesSection.valuesTitle}</CustomH1>
        </div>
        
        <DescContainer >
          <PortableText value={data?.valuesSection?.description || []}    onMissingComponent={false}/>
        </DescContainer>
       
      </div>
      <div className="flex justify-evenly flex-wrap gap-4 max-w-[1920px]  w-11/12">
        {data?.valuesSection.values.map((value:any, idx: React.Key | null | undefined) => (
          // eslint-disable-next-line react/jsx-key
          <div key={idx} className="flex flex-col  ">
          <div className="max-w-[314px] h-[314px] overflow-hidden bg-main">
            <CustomImage
              Imgsrc={value.image}
              alt={value.alt}
            />
            </div>
            <div className="max-w-[315px] flex-col flex mt-8 gap-y-3 text-center sm:text-start ">
              <h5 className="font-gothic text-base text-main  ">{value.value}</h5>
              <DescContainer>{value.description}</DescContainer>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerValues;
