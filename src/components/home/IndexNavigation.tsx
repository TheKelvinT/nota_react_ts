import Button from "../Button";
import { HomeContent } from "@/types/Home";
import handleNullData from "@/utils/handleNullData";
import CustomH1 from "../StyleComponents/CustomH1";
import DescContainer from "../StyleComponents/DescContainer";
import CustomImage from "../CustomImage";

type Props = { content: HomeContent | null };

const IndexNavigation = ({ content }: Props) => {
  const data = handleNullData(content?.homeNavigation);

  if (!data) {
    // Handle the case when content is null
    return null; // or display a loading state, error message, etc.
  }

  return (
    <section className=" screen-limit flex flex-col justify-center items-center md:w-11/12 mx-auto screen-limit">
      {/* <div className="flex justify-center py-20">
        <CustomH1 >Navigation</CustomH1>
      </div> */}
      <div className=" md:w-auto py-20 gap-x-4 gap-y-16  flex justify-center flex-wrap ">
        {data.map((nav: any, index: number) => (
          // eslint-disable-next-line react/jsx-key
          <div
            key={index}
            className=" max-w-[450px] flex flex-col items-center justify-center w-11/12"
          >
            <div className="max-w-[396px] max-h-[396px] overflow-hidden ">
              <div className="bg-main min-h-[172px] min-w-[257px] xs:min-w-[391px] xs:min-h-[257px]">
                <CustomImage alt="navigation-image" Imgsrc={nav.image} />
              </div>
            </div>
            <div className=" md:w-11/12 flex-col flex justify-center items-center gap-y-8 mt-10 flex-1">
              <CustomH1>{nav.title}</CustomH1>
              <DescContainer>
                <p className="text-center text-xs pb-4 flex-1">
                  {nav.description}
                </p>
              </DescContainer>
              <Button
                title={nav.callToAction.buttonText}
                path={nav.callToAction.routes}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndexNavigation;
