
import Button from "@/components/Button";
import { EventModel } from "@/types/Event";
import handleNullData from "@/utils/handleNullData";
import { Link } from "react-router-dom";
import CustomH1 from "../StyleComponents/CustomH1";
import DescContainer from "../StyleComponents/DescContainer";

type Props = { data: EventModel | null };

const EventCTA = ({ data }: Props) => {
  handleNullData(data)

  return (
    <section className="w-screen flex flex-col justify-center items-center py-20 ">
      <div className="text-center  flex flex-col items-center space-y-4 pb-8 text-main max-w-[665px] w-4/5">
        <CustomH1>{data?.sectionOne?.title}</CustomH1>
        <DescContainer>
          {data?.sectionOne?.desc}
        </DescContainer>
      </div>
      <div className=" flex justify-center gap-x-6">
        <Link to={data?.sectionOne?.callToAction?.routes || ""}>
          <Button title={data?.sectionOne?.callToAction?.buttonText || ""} />
        </Link>
      </div>
    </section>
  );
};

export default EventCTA;
