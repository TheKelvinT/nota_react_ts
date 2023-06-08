import Button from "@/components/Button";
import { MenuContent, MenuList } from "@/types/Menu";
import { PortableText } from "@portabletext/react";
import CustomH1 from "../StyleComponents/CustomH1";
import DescContainer from "../StyleComponents/DescContainer";
type Props = { content: MenuList[] | null; image: MenuContent | null; };

const MenuOption = ({ content, image }: Props) => {
  const data = content
    const data2 = image
 if (!data || !data2) {
    // Handle the case when content is null
    return null; // or display a loading state, error message, etc.
  }
  if (!content) {
    // Handle the case when content is null
    return null; // or display a loading state, error message, etc.
  }
  return (
    <section className="py-20 flex justify-center ">
      <div className=" flex justify-center w-11/12 md:gap-x-12 xl:gap-40">
        <div className="max-w-[430px] space-y-20 py-4 md:basis-1/2">
          {content.map((menu: any) => (
            <div key={menu._id} className="space-y-8">
              <div className="flex flex-col items-center gap-y-1">
                <CustomH1>{menu.title}</CustomH1>
                <div className="font-gothic text-main text-xs">{menu.time}</div>
              </div>
              <div className="text-center">
              <DescContainer >
                <PortableText value={menu.description}    onMissingComponent={false}/>
              </DescContainer>
              </div>
              <div className="text-center">
                <Button title={menu.callToAction.buttonText} path={menu?.callToAction.routes} />
              </div>
            </div>
          ))}
       
        </div>
        <div className="hidden md:block max-w-[365px] max-h-[565px] overflow-hidden">
          <img
            src={image?.image || ""}
            alt="menu-img"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default MenuOption;
