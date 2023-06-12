
import Button from "@/components/Button";
import { PortableText } from "@portabletext/react";
import DescContainer from "../StyleComponents/DescContainer";
import CustomImage from "../CustomImage";

type Props = { content: any };

const SpecialMenu = ({ content }: Props) => {
  return (
    <section className="bg-primary mx-auto  lg:flex lg:justify-center  ">
      <div className="sm:hidden max-w-[639px] h-[337px] bg-main overflow-hidden">
        <CustomImage
          Imgsrc={content?.image}
          alt="menu-img"
        />
      </div>
      <div className="flex justify-between md:gap-8 lg:gap-16 xl:gap-36 h-[400px]    ">
        <div className="my-auto md:pl-8 md:basis-1/2 lg:basis-1/3 flex justify-center w-11/12 mx-auto ">
          <div className="flex flex-col items-center text-center max-w-[400px]  lg:ml-4 sm:w-auto md:py-4 sm:max-w-[330px] gap-y-5">
            <div className="text-main">
              <h3 className="text-4xl font-marcellus">{content?.intro}</h3>
              <h4 className="text-5xl font-biro">{content?.title}</h4>
            </div>
            <div className="font-gothic text-xs text-main">
              <p>{content?.date}</p>
              <p>{content?.time}</p>
            </div>
            <DescContainer >
              <PortableText value={content?.description}    onMissingComponent={false}/>
            </DescContainer>
            <div>
                <Button title={content?.callToAction?.buttonText} path={content?.callToAction?.routes}/>
            </div>
          </div>
        </div>
        <div className="hidden sm:block basis-1/2 md:basis-2/3  max-h-[400px] min-w-[50vw] w-full bg-main overflow-hidden">
          <CustomImage
            Imgsrc={content?.image}
            alt="menu-img"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialMenu;
