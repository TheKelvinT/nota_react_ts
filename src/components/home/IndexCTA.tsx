import Button from "@/components/Button";
import { Link } from "react-router-dom";

import { PortableText } from "@portabletext/react";
import { HomeContent } from "@/types/Home";

type Props = { content: HomeContent | null };

const IndexCTA = ({ content }: Props) => {
 
  const data = content
 if (!data) {
    // Handle the case when content is null
    return null; // or display a loading state, error message, etc.
  }

  return (
  
    <section className=" flex justify-center py-20 screen-limit">
      <div className=" w-4/5 md:w-2/5  flex flex-col justify-center items-center">
        <div className="pb-6 max-w-[251px] max-h-[71px]">
          <img
            src={content?.homeSectionOne.Logo}
            width="251"
            height="71"
            alt="nota-logo"
          />
        </div>
        <div className="text-center space-y-4 text-main">
          <h3>{content?.homeSectionOne.title} </h3>
          <div className="text-xs leading-5">
            <PortableText value={content?.homeSectionOne.description} />
          </div>
        </div>
        <Link to={content?.homeSectionOne.callToAction?.routes} className="mt-10">
          <Button title={content?.homeSectionOne.callToAction?.buttonText} />
        </Link>
      </div>
    </section>
  );
};

export default IndexCTA;
