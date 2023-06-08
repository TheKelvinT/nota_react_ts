
import Button from "@/components/Button";


import { Link } from "react-router-dom";
import handleNullData from "@/utils/handleNullData";
import { PortableText } from "@portabletext/react";
import { EventModel } from "@/types/Event";
import DescContainer from "../StyleComponents/DescContainer";
import CustomH1 from "../StyleComponents/CustomH1";

type Props = { data: EventModel |null };

const EventDesc = ({ data }: Props) => {
  handleNullData(data)

  return (
    <section className=" w-full flex justify-center mb-28  max-w-[1920px] mx-auto ">
      <div className="flex flex-col md:flex-row justify-center gap-x-10 lg:gap-x-20 w-11/12 md:w-full">
        <div className="basis-2/3 max-w-[948px] max-h-[574px]  overflow-hidden">
          <img
            src={data?.sectionTwo.image}
            width="948"
            height="574"
            alt="menu-img"
            className="h-full w-full object-cover"
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
              <Link to={data?.sectionTwo.callToAction?.routes || ""}>
                <Button title={data?.sectionTwo.callToAction?.buttonText || ""} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDesc;
