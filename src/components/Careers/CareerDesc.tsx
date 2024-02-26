import Button from "@/components/Button";
import { CareersModel } from "@/types/Careers";
import handleNullData from "@/utils/handleNullData";
import { PortableText } from "@portabletext/react";
import CustomH1 from "../StyleComponents/CustomH1";
import DescContainer from "../StyleComponents/DescContainer";

type Props = { data: CareersModel | null };

const CareerDesc = ({ data }: Props) => {
  handleNullData(data);

  return (
    <section className="flex flex-col justify-center items-center py-20">
      <div className="text-center space-y-4 pb-8 text-main w-11/12 max-w-[665px] ">
        <div className="pb-4">
          <CustomH1>{data && data?.sectionOne?.pageHeader}</CustomH1>
        </div>
        <DescContainer>
          <PortableText
            value={(data && data?.sectionOne?.description) || []}
            onMissingComponent={false}
          />
        </DescContainer>
      </div>
      <div className=" flex justify-center gap-x-6 w-11/12">
        <div>
          <Button
            title={(data && data?.sectionOne?.callToAction1.buttonText) || ""}
            path={data?.sectionOne?.callToAction1.routes || ""}
          />
        </div>
        <div>
          <Button
            title={(data && data?.sectionOne?.callToAction2.buttonText) || ""}
            path={data?.sectionOne?.callToAction2.routes || ""}
          />
        </div>
      </div>
    </section>
  );
};

export default CareerDesc;
