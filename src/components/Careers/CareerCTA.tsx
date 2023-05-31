
import Button from "@/components/Button";
import { PortableText } from "@portabletext/react";
import { Link } from "react-router-dom";


type Props = { data: any };

const CareerCTA = ({ data }: Props) => {
  return (
    <section className="flex flex-col justify-center items-center py-20">
      <div className="text-center space-y-4 pb-8 text-main w-11/12 max-w-[665px]">
        <h3 className="pb-4">{data.sectionTwo.pageHeader}</h3>
        <div className="text-xs leading-5 text-sub">
          <PortableText value={data.sectionTwo.description} />
        </div>
      </div>
      <div className=" flex justify-center gap-x-6">
        <Link to={data.sectionTwo.callToAction1.routes}>
          <Button title={data.sectionTwo.callToAction1.buttonText} />
        </Link>
      </div>
    </section>
  );
};

export default CareerCTA;
