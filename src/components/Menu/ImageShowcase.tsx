
import { MenuContent } from "@/types/Menu";

type Props = {  content: MenuContent | null };

function ImageShowcase({ content }: Props) {

  return (
    <section className="mx-auto">
      <div className="flex justify-center gap-x-1 sm:gap-x-2 ">
        {content?.images?.map((url, index:number) => (
          <div key={index} className="h-[240px] sm:h-auto overflow-hidden">
            <img
              src={url}
              alt="menu-img"
              width="444"
              height="566"
              className="object-cover h-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ImageShowcase;
