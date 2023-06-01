

import Button from "@/components/Button";
import { CareersModel } from "@/types/Careers";
import handleNullData from "@/utils/handleNullData";
import { PortableText } from "@portabletext/react";
import { Link } from "react-router-dom";
import { PortableTextComponent } from "../PortableTextComponent";

type Props = { data: CareersModel | null };

const CareerDesc = ({ data }: Props) => {
  handleNullData(data)
  
  return (
    <section className="flex flex-col justify-center items-center py-20">
      <div className="text-center space-y-4 pb-8 text-main w-11/12 max-w-[665px] ">
        <h3 className="pb-4">{data?.sectionOne?.pageHeader}</h3>
        <div className="text-xs leading-5 text-sub">
          <PortableText value={data?.sectionOne?.description || []} components={PortableTextComponent}   onMissingComponent={false}/>
        </div>
      </div>
      <div className=" flex justify-center gap-x-6 w-11/12">
        <div>
          <Link to={data?.sectionOne?.callToAction1.routes || ""}>
            <Button title={data?.sectionOne?.callToAction1.buttonText || ""} />
          </Link>
        </div>
        <div>
          <Link to={data?.sectionOne?.callToAction2.routes || ""}>
            <Button title={data?.sectionOne?.callToAction2.buttonText || ""} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CareerDesc;
