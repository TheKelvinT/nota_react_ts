import {useState, useEffect} from "react";
import BlogDesc from "@/components/Blog/BlogDesc";
import BlogHero from "@/components/Blog/BlogHero";
import Blogs from "@/components/Blog/BlogPosts";
import Loading from "@/components/Loading";
import { BlogHeroModel, BlogPostModel } from "@/types/Blog";
import { fetchBlogHero, fetchBlogPost } from "@/utils/request";
import useLoadingStore from "@/store/loadingStore";


const Blog = () => {
   const [blogPost, setBlogPost] = useState<BlogPostModel[]>([]);
  const [blogContent, setBlogContent] = useState<BlogHeroModel | null>(null);
  const loading = useLoadingStore((state: any) => state.loading);
  const setLoading = useLoadingStore((state: any) => state.setLoading);
  console.log(blogPost)

   useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const [data, contentData] = await Promise.all([
          fetchBlogPost(),
          fetchBlogHero(),
        ]);

        setBlogPost(data);
        setBlogContent(contentData);
    
      } catch (error) {
        console.error("Error fetching carousel images:", error);
        setLoading(false)
      } finally {
        setLoading(false)
      }
    };

    fetchData();
    
  }, []);

  blogPost.sort((a: any, b: any) => {
    const createdAtA = new Date(a._createdAt).getTime();
    const createdAtB = new Date(b._createdAt).getTime();
    return createdAtA - createdAtB;
  });


  return <div>
      {loading ? (
          
          <Loading/>

      ) : (
        <div>
      <BlogHero  data={blogContent} />
      {blogContent &&<BlogDesc data={blogContent} />}
      <Blogs data={blogPost} />
    </div>
      )}
  </div>;
};

export default Blog;
