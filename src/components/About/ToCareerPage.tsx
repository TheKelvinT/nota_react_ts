import Button from "@/components/Button";
import { PortableText } from "@portabletext/react";
import { AboutModel } from "@/types/About";
import DescContainer from "../StyleComponents/DescContainer";
import CustomImage from "../CustomImage";

type Props = {
  content: AboutModel | null;
};

const ToCareerPage = ({content}: Props) => {
    const data = content?.sectionThree

 if (!data) {
    // Handle the case when content is null
    return null; // or display a loading state, error message, etc.
  }
  return (
    <section className="bg-primary flex justify-center  py-16 ">
      <div className="flex flex-col sm:flex-row justify-center w-11/12">
        <div className="sm:hidden h-[300px] max-w-[585px] bg-main overflow-hidden">
          <CustomImage
            Imgsrc={data?.image}
            alt="team-discussion-img"
          
          />
        </div>
        <div className="flex items-center justify-center gap-x-8 md:gap-x-16 lg:gap-x-28   ">
          <div className="hidden sm:block h-full md:w-[485px] max-w-[485px] overflow-hidden basis-1/2 bg-main">
            <CustomImage
              Imgsrc={data?.image}
              alt="team-discussion-img"
              
            />
          </div>
          <div className="flex flex-col items-center justify-center  text-center sm:basis-1/2">
            <div className="flex flex-col items-center justify-center mt-16 sm:mt-0 space-y-2   text-main md:max-w-[400px] ">
              <h3 className="font-gothic text-[22px]">{data?.title}</h3>
              <DescContainer>
                <PortableText value={data?.description}    onMissingComponent={false}/>
              </DescContainer>
            </div>
            <div className="mt-5 lg:mt-10">
                <Button title={data?.callToAction?.buttonText} path={data?.callToAction?.routes}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToCareerPage;
