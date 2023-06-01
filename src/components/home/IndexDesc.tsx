import React from "react";


import { PortableText } from "@portabletext/react";
import { PortableTextComponent } from "../PortableTextComponent";
type Props = { content: any };

const IndexDesc = ({ content }: Props) => {
  return (
    <section className="bg-primary max-w-screen flex justify-center py-12 md:py-0 ">
      {/* Desktop */}
      <div className="hidden md:grid grid-col-2 md:grid-col-4 screen-limit ">
        <div className="flex md:flex-row align-center flex-col justify-center gap-x-4  py-9 px-9">
          <div className=" mr-10 w-full sm:w-[300px] space-y-6 flex flex-col justify-center text-main">
            <h4 className="font-biro">{content.homeSectionTwo.title}</h4>
            <div className="text-xs leading-5">
              <PortableText  value={content.homeSectionTwo.description} components={PortableTextComponent}   onMissingComponent={false}/>
            </div>
          </div>
          <div className="max-h-[430px] max-w-[335px] overflow-hidden">
          <img
            src={content.homeSectionTwo.Images[0].imageURL}
   
     
            alt="food-pic "
            className="object-cover h-full w-full"
          />
          </div>
           <div className="max-h-[430px] max-w-[335px] overflow-hidden">
          <img
            src={content.homeSectionTwo.Images[1].imageURL}
   
     
            alt="food-pic"
            className="hidden lg:block object-cover  h-full w-full"
          />
          </div>
          <div className="max-h-[430px] max-w-[335px] overflow-hidden">
          <img
            src={content.homeSectionTwo.Images[2].imageURL}
   
     
            alt="food-pic"
            className="hidden xl:block object-cover  h-full w-full"
          />
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="md:hidden flex flex-col gap-10 items-center">
        <div className=" flex justify-center w-11/12 gap-1.5">
          <div>
            <img
              src={content.homeSectionTwo.Images[0].imageURL}
              alt="food-pic"
     
       
              className="object-cover h-full"
            />
          </div>
          <div className="hidden sm:block">
            <img
              src={content.homeSectionTwo.Images[1].imageURL}
              alt="food-pic"
     
       
              className="object-cover h-full"
            />
          </div>
          <div>
            <img
              src={content.homeSectionTwo.Images[2].imageURL}
              alt="food-pic"
     
       
              className="object-cover h-full"
            />
          </div>
        </div>
    
        <div className="  w-4/5 space-y-6 flex flex-col text-center justify-center text-main">
          <h4 className="font-biro " >{content.homeSectionTwo.title}</h4>
          <div className="text-xs leading-5">
            <PortableText  value={content.homeSectionTwo.description} components={PortableTextComponent}   onMissingComponent={false}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndexDesc;
