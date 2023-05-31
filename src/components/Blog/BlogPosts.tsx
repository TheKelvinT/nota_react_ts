
import Button from "@/components/Button";
import { BlogPostModel } from "@/types/Blog";
import handleNullData from "@/utils/handleNullData";
import { PortableText } from "@portabletext/react";
import { PortableTextComponent } from "../PortableTextComponent";

type Props = { data: BlogPostModel[] };

export default function BlogPosts({ data }: Props) {
  handleNullData(data)


  return (
    <section className=" flex justify-center px-4 pb-60">
      <div className="  gap-x-8 grid grid-cols-1 gap-y-16 md:grid-cols-2 col-span-1">
        {data.map((blog) => (
          // eslint-disable-next-line react/jsx-key
          <div
            key={blog._id}
            className="flex flex-col flex-auto max-w-[489px] "
          >
            <div className="max-w-[489px] max-h-[368px] overflow-hidden ">
              <img
                src={blog.image}
                alt={blog.title}
                width="489"
                height="368"
                className="object-cover "
              />
            </div>
            <div className=" flex-col  flex-auto flex mt-8 gap-y-4">
              <h3 className="text-main">
                {blog.title}
              </h3>
              <div className=" flex flex-col flex-auto text-xs text-main ">
                <PortableText value={blog.summary} components={PortableTextComponent} />
              </div>

              <div className="py-4">
                <Button title="READ MORE" width="w-44" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
