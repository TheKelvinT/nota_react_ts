
import Button from "@/components/Button";
import handleNullData from "@/utils/handleNullData";
import { PortableText } from "@portabletext/react";
import { EventModel } from "@/types/Event";
import DescContainer from "../StyleComponents/DescContainer";
import CustomH1 from "../StyleComponents/CustomH1";
import CustomImage from "../CustomImage";

type Props = { data: EventModel |null };

const EventDesc = ({ data }: Props) => {
  handleNullData(data)

  return (
    <section className=" w-full flex justify-center mb-28  max-w-[1920px] mx-auto ">
      <div className="flex flex-col md:flex-row justify-center gap-x-10 lg:gap-x-20 w-11/12 md:w-full">
        <div className="basis-2/3 max-w-[948px]  sm:h-full bg-main  overflow-hidden">
          <CustomImage
            Imgsrc={data?.sectionTwo.image}
            alt="menu-img"
          />
        </div>
        <div className="my-auto basis-1/3 md:pr-4 ">
          <div className="py-4">
          <CustomH1 >{data?.sectionTwo?.title}</CustomH1>
          </div>
          <div className="flex flex-col md:max-w-[330px] gap-y-8 text-main">
            <DescContainer>
            <PortableText value={data?.sectionTwo?.Sectioncontent || [] }    onMissingComponent={false}/>
            </DescContainer>
            <div>
                <Button title={data?.sectionTwo.callToAction?.buttonText || ""} path={data?.sectionTwo.callToAction?.routes || ""}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDesc;
