
import Button from "@/components/Button";
import { BlogPostModel } from "@/types/Blog";
import handleNullData from "@/utils/handleNullData";
import { PortableText } from "@portabletext/react";
import { Link } from "react-router-dom";

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
        
            <div className="max-w-[489px] max-h-[366px] overflow-hidden ">
              <Link to={`/blog/${blog.slug}`}>
              <img
                src={blog.image}
                alt={blog.title}
                className="object-cover h-full w-full"
              />
              </Link>
            </div>
            <div className=" flex-col  flex-auto flex mt-8 gap-y-4">
              <Link to={`/blog/${blog.slug}`}>
              <h3 className="text-main text-[17px] underline underline-offset-2">
                {blog.title}
              </h3>
              </Link>
              <div className=" flex flex-col flex-auto text-[11px] text-main lea ">
                <PortableText value={blog.summary}    onMissingComponent={false}/>
              </div>

              <div className="py-4">
            
                <Button title="READ MORE" path={`/blog/${blog.slug}`} width="w-44" />
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
