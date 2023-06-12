import { PortableText } from "@portabletext/react";
import { HomeContent } from "@/types/Home";
import DescContainer from "../StyleComponents/DescContainer";
import CustomImage from "../CustomImage";
type Props = { content: HomeContent | null };

const IndexDesc = ({ content }: Props) => {

  return (
    <section className="bg-primary max-w-screen flex justify-center py-12 md:py-0 ">
      {/* Desktop */}
      <div className="hidden md:grid grid-col-2 md:grid-col-4 screen-limit ">
        <div className="flex md:flex-row align-center flex-col justify-center gap-x-4  py-9 px-9">
          <div className=" mr-10 w-full sm:w-[300px] space-y-6 flex flex-col justify-center text-main">
            <p className="font-biro text-3xl">{content?.homeSectionTwo.title}</p>
            <DescContainer>
              <PortableText  value={content?.homeSectionTwo?.description || []}    onMissingComponent={false}/>
            </DescContainer>
          </div>
          <div className="h-[430px] w-[335px] overflow-hidden bg-main">
          <CustomImage
            Imgsrc={content?.homeSectionTwo.Images[0].imageURL}
            alt="food-pic "
          />
          </div>
           <div className="h-[430px] w-[335px] overflow-hidden hidden bg-main lg:block">
          <CustomImage
            Imgsrc={content?.homeSectionTwo.Images[1].imageURL}
            alt="food-pic"
          />
          </div>
          <div className="h-[430px] w-[335px] overflow-hidden bg-main hidden xl:block">
          <CustomImage
            Imgsrc={content?.homeSectionTwo.Images[2].imageURL}
            alt="food-pic"
          />
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="md:hidden flex flex-col gap-10 py-12 items-center">
        <div className=" flex justify-center  w-11/12 gap-1.5">
          <div>
            <CustomImage
              Imgsrc={content?.homeSectionTwo.Images[0].imageURL}
              alt="food-pic"
            />
          </div>
          <div className="hidden sm:block">
            <CustomImage
              Imgsrc={content?.homeSectionTwo.Images[1].imageURL}
              alt="food-pic"
            />
          </div>
          <div>
            <CustomImage
              Imgsrc={content?.homeSectionTwo.Images[2].imageURL}
              alt="food-pic"
            />
          </div>
        </div>
    
        <div className="  w-4/5 space-y-6 flex flex-col text-center justify-center text-main">
          <h4 className="font-biro text-3xl" >{content?.homeSectionTwo.title}</h4>
          <DescContainer>
            <PortableText  value={content?.homeSectionTwo.description || []}    onMissingComponent={false}/>
          </DescContainer>
        </div>
      </div>
    </section>
  );
};

export default IndexDesc;
