
import Button from "@/components/Button";
import { PortableText } from "@portabletext/react";
import { Link } from "react-router-dom";
import { PortableTextComponent } from "../PortableTextComponent";

type Props = { content: any };

const SpecialMenu = ({ content }: Props) => {
  return (
    <section className="bg-primary mx-auto  lg:flex lg:justify-center  ">
      <div className="sm:hidden max-w-[639px] max-h-[337px] overflow-hidden">
        <img
          src={content?.image}
          height="337"
          width="639"
          alt="menu-img"
          className="h-full object-cover"
        />
      </div>
      <div className="flex justify-between md:gap-8 lg:gap-16 xl:gap-36 h-[400px]    ">
        <div className="my-auto md:pl-8 md:basis-1/2 lg:basis-1/3 flex justify-center w-11/12 mx-auto ">
          <div className="flex flex-col items-center text-center max-w-[400px]  lg:ml-4 sm:w-auto md:py-4 sm:max-w-[330px] gap-y-5">
            <div className="text-main">
              <h3 className="text-4xl ">{content?.intro}</h3>
              <h4 className="text-5xl font-biro">{content?.title}</h4>
            </div>
            <div className="font-gothic text-xs">
              <p>{content?.date}</p>
              <p>{content?.time}</p>
            </div>
            <div className="text-xs py-2">
              <PortableText value={content?.description} components={PortableTextComponent}   onMissingComponent={false}/>
            </div>
            <div>
              <Link to={content?.callToAction?.routes}>
                <Button title={content?.callToAction?.buttonText} />
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden sm:block basis-1/2 md:basis-2/3  max-h-[400px] overflow-hidden">
          <img
            src={content?.image}
            width="847"
            height="447"
            alt="menu-img"
            className="h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialMenu;
