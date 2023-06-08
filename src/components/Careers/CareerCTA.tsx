
import Button from "@/components/Button";
import { PortableText } from "@portabletext/react";
import { Link } from "react-router-dom";
import CustomH1 from "../StyleComponents/CustomH1";
import DescContainer from "../StyleComponents/DescContainer";


type Props = { data: any };

const CareerCTA = ({ data }: Props) => {
  return (
    <section className="flex flex-col justify-center items-center py-20">
      <div className="text-center space-y-4 pb-8 text-main w-11/12 max-w-[665px]">
        <div className="pb-4">
        <CustomH1>{data?.sectionTwo.pageHeader || ""}</CustomH1>
        </div>
        <DescContainer >
          <PortableText value={data?.sectionTwo.description || []}    onMissingComponent={false}/>
        </DescContainer>
      </div>
      <div className=" flex justify-center gap-x-6">
        <Link to={data?.sectionTwo.callToAction1.routes || ""}>
          <Button title={data?.sectionTwo.callToAction1.buttonText || ""} />
        </Link>
      </div>
    </section>
  );
};

export default CareerCTA;
