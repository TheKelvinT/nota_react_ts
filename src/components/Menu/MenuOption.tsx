
import Button from "@/components/Button";

import { MenuContent, MenuList } from "@/types/Menu";


import { PortableText } from "@portabletext/react";
import { Link } from "react-router-dom";
type Props = { content: MenuList[] | MenuContent[] | null, image: MenuList[] | MenuContent | null, };

const MenuOption = ({ content, image }: Props) => {
  const data = content
    const data2 = image
 if (!data || !data2) {
    // Handle the case when content is null
    return null; // or display a loading state, error message, etc.
  }
  return (
    <section className="py-20 flex justify-center ">
      <div className=" flex justify-center w-11/12 md:gap-x-12 xl:gap-40">
        <div className="max-w-[430px] space-y-28 py-4 md:basis-1/2">
          {content.map((menu: any) => (
            <div key={menu._id} className="space-y-8">
              <div className="flex flex-col items-center gap-y-1">
                <h3 className="">{menu.title}</h3>
                <div className="font-gothic text-xs">{menu.time}</div>
              </div>
              <div className="flex justify-center text-center text-xs">
                <PortableText value={menu.description} />
              </div>
              <div className="text-center">
                <Link to={menu?.callToAction.routes}>
                <Button title={menu.callToAction.buttonText} />
                </Link>
              </div>
            </div>
          ))}
       
        </div>
        <div className="hidden md:block max-w-[365px] max-h-[565px] overflow-hidden">
          <img
            src={image.image}
            alt="menu-img"
            className="object-cover h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default MenuOption;
