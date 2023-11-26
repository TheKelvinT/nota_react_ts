import Button from "@/components/Button";
import { PortableText } from "@portabletext/react";
import { AboutModel } from "@/types/About";
import CustomH1 from "../StyleComponents/CustomH1";
import DescContainer from "../StyleComponents/DescContainer";
import CustomImage from "../CustomImage";
type Props = {
  content: AboutModel | null;
};
const AboutCTA = ({content }: Props) => {
  const data = content?.sectionOne
 if (!data) {
    // Handle the case when content is null
    return null; // or display a loading state, error message, etc.
  }
  return (
    <section className=" py-20">
      <div className="flex flex-col justify-center items-center">
        <div className="my-8 md:my-16 pb-12 max-w-[255px] max-h-[71px] overflow-hidden">
          <CustomImage Imgsrc={data?.image} alt="logo" />
        </div>
        <div className="font-biro text-[32px] text-center max-w-[470px] w-11/12 space-y-12">
          <div>
            {data?.statement}
          </div>
          <p className="text-end max-w-[550px]">{data?.statementTldr}</p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center w-11/12 mt-20">
         
      
        
          <iframe className="h-full w-11/12 max-h-[375px] max-w-[666px] aspect-video " src="https://www.youtube.com/embed/oWwMY8M-hCE" title="NOTA · Cafe Restaurant | Where Warm Hospitality Meets Honest Cooking" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; " allowFullScreen></iframe>
         
          <div className="flex justify-center flex-col items-center">
            <div className="text-center space-y-4 py-12 text-main max-w-[665px] w-11/12 ">
              <CustomH1 >{data?.title}</CustomH1>
              <DescContainer >
              <PortableText value={data?.description}    onMissingComponent={false}/>
              </DescContainer>
              
            </div>
            <div className="text-center" >
                <Button title={data?.callToAction?.buttonText} path={data?.callToAction?.routes} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
