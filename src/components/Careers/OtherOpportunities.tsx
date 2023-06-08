
import Button from "@/components/Button";
import { CareersModel } from "@/types/Careers";
import { PortableText } from "@portabletext/react";
import DescContainer from "../StyleComponents/DescContainer";

type Props = { data: CareersModel | null };

const OtherOpportunities = ({ data }: Props) => {

  return (
    <section className=" flex flex-col items-center gap-y-8 max-w-[480px] mx-auto  py-32">
      <div className="flex flex-col text-sub space-y-8 w-11/12">
        <div className="space-y-3 text-center sm:text-start">
          <h5 className="font-gothic font-bold text-sm">{data?.lastSection.pageHeader}</h5>
          <DescContainer >
            <div className="text-[10px]">
            <PortableText value={data?.lastSection.description || []}    onMissingComponent={false}/>
            </div>
          </DescContainer>
        </div>
        <div className="mx-auto sm:mx-0">
            <Button
              title={data?.lastSection?.callToAction1.buttonText || ""} path={data?.lastSection?.callToAction1.routes || ""}
              width="bg-white"
            />
        </div>

        <div className="mx-auto sm:mx-0">
              <Button
              title={data?.lastSection.callToAction2.buttonText || ""} path={data?.lastSection.callToAction2.routes || ""}
              width="bg-white"
            />
        </div>
      </div>
    </section>
  );
};

export default OtherOpportunities;
