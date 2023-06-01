import Button from "@/components/Button";
import { PortableText } from "@portabletext/react";
import { Link } from "react-router-dom";
import { AboutModel } from "@/types/About";
import { PortableTextComponent } from "../PortableTextComponent";
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
          <img src={data?.image} alt="logo" />
        </div>
        <div className="font-biro text-[32px] text-center max-w-[470px] w-11/12 space-y-12">
          <div>
            {data?.statement}
          </div>
          <p className="text-end max-w-[550px]">{data?.statementTldr}</p>
        </div>
        <div className="text-center space-y-4 py-12 text-main max-w-[665px] w-11/12 ">
          <h3 className="pb-4">{data?.title}</h3>
          <div className="text-xs leading-5 text-sub">
          <PortableText value={data?.description} components={PortableTextComponent}   onMissingComponent={false}/>
          </div>
          
        </div>
        <div className="md:mt-10">
          <Link to={data?.callToAction?.routes}>
            <Button title={data?.callToAction?.buttonText} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
