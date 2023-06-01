
import Button from "@/components/Button";
import { PortableText } from "@portabletext/react";
import { BlogHeroModel } from "@/types/Blog";
import { Link } from "react-router-dom";
import handleNullData from "@/utils/handleNullData";
import { PortableTextComponent } from "../PortableTextComponent";
type Props = { data: BlogHeroModel | null };

export default function BlogHero({ data }: Props) {
  handleNullData(data)
  
  const formatDate = (dateString: string | number | Date | undefined) => {
    if (!dateString) {
      return ""; // Handle the case when dateString is undefined
    }
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };
  return (
    <section>
      <div className="relative min-w-screen max-h-screen mx-auto max-w-[1920px] overflow-hidden ">
        <div className="max-w-[1920px]  overflow-hidden">
        <img
          src={data?.image}
          alt="Blog-hero"
     
          className="object-cover w-full  h-auto "
        />
        </div>
        
        <div className="hidden absolute bottom-0 w-screen h-full  text-white px-24 lg:px-36 xl:px-48 xl:py-36 py-12 lg:py-24 sm:flex items-end">
          <div className=" space-y-8  max-w-[480px]">
            <h3 className="text-4xl">{data?.featured?.title}</h3>
            <div className="text-xs">
              <PortableText value={data?.featured?.summary ?? []} components={PortableTextComponent}   onMissingComponent={false}/>
            </div>
            <p className="text-xs">{formatDate(data?.featured?._createdAt)}</p>
            <div>
              <Link to={`/blog/${data?.featured?.slug}`}>
                <Button title="READ MORE" width="bg-white w-40" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
