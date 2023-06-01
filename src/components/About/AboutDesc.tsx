
import { AboutModel } from "@/types/About";
import { PortableText } from "@portabletext/react";
import { PortableTextComponent } from "../PortableTextComponent";

type Props = {
  content: AboutModel | null;
};

const AboutDesc = ({content}: Props) => {
  const data = content?.sectionTwo
   if (!data) {
    // Handle the case when content is null
    return null; // or display a loading state, error message, etc.
  }

  return (
    <section className="flex flex-col items-center justify-center max-w-[1920px] mx-auto">
      <div className="w-11/12 h-[210px] sm:h-auto  max-w-[1760px] max-h-[765px] overflow-hidden">
        <img
          src={data?.image}
          alt="hero-banner"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="text-center space-y-3 py-16 md:py-24 text-main max-w-[665px] w-11/12">
        <h3 className="font-gothic text-xl">{data?.title}</h3>
        <div className="text-xs leading-5 text-sub">
          <PortableText value={data?.description} components={PortableTextComponent}   onMissingComponent={false}/>
        </div>
      </div>
    </section>
  );
};

export default AboutDesc;
