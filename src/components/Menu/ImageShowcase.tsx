
import { MenuContent } from "@/types/Menu";
import CustomImage from "../CustomImage";

type Props = {  content: MenuContent | null };

function ImageShowcase({ content }: Props) {

  return (
    <section className="mx-auto">
      <div className="flex justify-center gap-x-1 sm:gap-x-2 ">
        {content?.images?.map((url, index:number) => (
          <div key={index} className="bg-main h-[240px] w-full sm:h-full overflow-hidden">
            <CustomImage
              Imgsrc={url}
              alt="menu-img"
             
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ImageShowcase;
