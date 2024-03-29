import Button from "@/components/Button";
import { PortableText } from "@portabletext/react";
import { HomeContent } from "@/types/Home";

import CustomH1 from "../StyleComponents/CustomH1";
import DescContainer from "../StyleComponents/DescContainer";

type Props = { content: HomeContent | null };

const IndexCTA = ({ content }: Props) => {
  const data = content;
  if (!data) {
    // Handle the case when content is null
    return null; // or display a loading state, error message, etc.
  }

  return (
    <section className="mx-auto flex justify-center py-16 screen-limit">
      <div className=" w-4/5 md:max-w-[638px]  flex flex-col justify-center items-center pt-3">
        <div className="pb-6 max-w-[300px] max-h-[90px]">
          <img
            src={content?.homeSectionOne.Logo}
            alt="nota-logo"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="text-center space-y-4 text-main">
          <CustomH1>{content?.homeSectionOne.title}</CustomH1>
          <DescContainer>
            <PortableText
              value={content?.homeSectionOne.description}
              onMissingComponent={false}
            />
          </DescContainer>
        </div>
        <div className="mt-10">
          <Button
            path={content?.homeSectionOne.callToAction?.routes}
            title={content?.homeSectionOne.callToAction?.buttonText}
          />
        </div>
      </div>
    </section>
  );
};

export default IndexCTA;
