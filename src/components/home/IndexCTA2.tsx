

import { Link } from "react-router-dom";
import Button from "../Button";
import { PortableText } from "@portabletext/react";
import { HomeContent } from "@/types/Home";
import handleNullData from "@/utils/handleNullData";

type Props = {content:HomeContent | null | undefined};

const IndexCTA2 = ({content}: Props) => {
  handleNullData(content);

  if (!content || !content.homeSectionTwo) {
    return null;
  }

  const data = content.cards;

return (
    <section className=" flex flex-col items-center gap-32 mt-20 md:mt-48 screen-limit ">
      {/* Desktop */}
      {data.map((card, index: number) => (
        <div
          key={index}
          className="hidden md:flex justify-center md:h-[585px]  lg:gap-32  w-11/12 lg:w-4/5  gap-10  "
        >
          <div className={` ${index % 2 === 1 ? "order-2" : ""} max-h-[585px] max-w-[468px] overflow-hidden`}>
            <img
              src={card.image}
            
              alt="food-pic"
              className="h-full w-full object-cover"
            />
          </div>
          <div
            className={` ${
              index % 2 === 1 ? "order-1" : ""
            } flex justify-center items-center    md:w-[320px]  `}
          >
            <div className="space-y-10 text-main text-start ">
              <h3>{card.title}</h3>
              <div className="text-xs leading-5">
                <PortableText value={card.description} />
              </div>
              <div className="mt-10">
                <Link to={card.callToAction.routes}>
                  <Button title={card.callToAction.buttonText} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Tablet */}
      {data.map((card, index: number) => (
        <div
          key={index}
          className="hidden sm:flex md:hidden justify-center gap-8 w-11/12 "
        >
          <div
            className={` ${
              index % 2 === 1 ? "order-2" : ""
            } w-full max-h-[350px] basis-5/12 overflow-hidden `}
          >
            <img
              src={card.image}
              alt="food-pic"
              className="h-full w-full object-cover"
            />
          </div>
          <div
            className={` ${
              index % 2 === 1 ? "order-1" : ""
            } flex justify-center items-center basis-7/12 `}
          >
            <div className="space-y-6 text-main text-start ">
              <h3>{card.title}</h3>
              <div className="text-xs leading-5">
                <PortableText value={card.description} />
              </div>
              <div className="mt-10">
                <Link to={card.callToAction.routes}>
                  <Button title={card.callToAction.buttonText} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Mobile */}
      {data.map((card, index: number) => (
        <div
          key={index}
          className="flex sm:hidden flex-col justify-center gap-4 w-11/12 "
        >
          <div className=" max-h-[320px] w-full overflow-hidden">
            <img
              src={card.image}
              alt="food-pic"
              className="h-full w-full object-cover"
            />
          </div>
          <div
            className={` ${
              index % 2 === 1 ? "order-1" : ""
            } flex justify-center items-center    md:w-[320px]  `}
          >
            <div className="space-y-6 text-main text-center ">
              <h3>{card.title}</h3>
              <div className="text-xs leading-5">
                <PortableText value={card.description} />
              </div>
              <div className="mt-10">
                <Link to={card.callToAction.routes}>
                  <Button title={card.callToAction.buttonText} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default IndexCTA2;
