
import Button from "@/components/Button";
import { PortableText } from "@portabletext/react";
import { Link } from "react-router-dom";

type Props = { data: any };

const OtherOpportunities = ({ data }: Props) => {
  return (
    <section className=" flex flex-col items-center gap-y-8 max-w-[480px] mx-auto  py-32">
      <div className="flex flex-col text-sub space-y-8 w-11/12">
        <div className="space-y-3 text-center sm:text-start">
          <h5 className="font-bold text-sm">{data.lastSection.pageHeader}</h5>
          <div className="text-[10px]">
            <PortableText value={data.lastSection.description} />
          </div>
        </div>
        <div className="mx-auto xs:mx-0">
          <Link to={data.lastSection.callToAction1.routes}>
            <Button
              title={data.lastSection.callToAction1.buttonText}
              width="bg-white"
            />
          </Link>
        </div>

        <div className="mx-auto xs:mx-0">
          <Link to={data.lastSection.callToAction2.routes}>
              <Button
              title={data.lastSection.callToAction2.buttonText}
              width="bg-white"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OtherOpportunities;
