
import Button from "@/components/Button";
import MiniCarousel from "@/components/Events/MiniCarousel.tsx";
import { EventModel } from "@/types/Event";
import handleNullData from "@/utils/handleNullData";
import { PortableText } from "@portabletext/react";
import DescContainer from "../StyleComponents/DescContainer";
import CustomH1 from "../StyleComponents/CustomH1";
type Props = { data: EventModel | null };

function EventSlider({ data }: Props) {
  handleNullData(data)
  return (
    <section className=" w-full flex justify-center  md:mb-28 max-w-[1920px] mx-auto ">
      <div className="flex flex-col md:flex-row justify-center  w-11/12 md:w-full">
        <div className="my-auto basis-1/2 md:px-6 lg:ml-10 lg:px-10 order-last md:order-first ">
          <div className="py-4">
          <CustomH1 >{data?.sectionThree.title}</CustomH1>
          </div>
          <div className="flex flex-col  md:max-w-[330px] gap-y-8 text-main">
            <DescContainer>
              <PortableText value={data?.sectionThree.Sectioncontent || []}    onMissingComponent={false}/>
            </DescContainer>
            <div>
                <Button title={data?.sectionThree.callToAction.buttonText || ""} path={data?.sectionThree.callToAction.routes || ""}/>
            </div>
          </div>
        </div>
        <MiniCarousel data={data} />
      </div>
    </section>
  );
}

export default EventSlider;
