
import Button from "@/components/Button";
import MiniCarousel from "@/components/Events/MiniCarousel.tsx";
import { EventModel } from "@/types/Event";
import handleNullData from "@/utils/handleNullData";
import { PortableText } from "@portabletext/react";
import { Link } from "react-router-dom";
import { PortableTextComponent } from "../PortableTextComponent";

type Props = { data: EventModel | null };

function EventSlider({ data }: Props) {
  handleNullData(data)
  return (
    <section className=" w-full flex justify-center  md:mb-28 max-w-[1920px] mx-auto ">
      <div className="flex flex-col md:flex-row justify-center  w-11/12 md:w-full">
        <div className="my-auto basis-1/2 md:px-6 lg:ml-10 lg:px-10 order-last md:order-first ">
          <h3 className="py-4">{data?.sectionThree.title}</h3>
          <div className="flex flex-col  md:max-w-[330px] gap-y-8 text-main">
            <div className="text-xs">
              <PortableText value={data?.sectionThree.Sectioncontent || []} components={PortableTextComponent}   onMissingComponent={false}/>
            </div>

            <div>
              <Link to={data?.sectionThree.callToAction.routes || ""}>
                <Button title={data?.sectionThree.callToAction.buttonText || ""} />
              </Link>
            </div>
          </div>
        </div>
        <MiniCarousel data={data} />
      </div>
    </section>
  );
}

export default EventSlider;
