import {useState, useEffect} from "react";
import BlogDesc from "@/components/Blog/BlogDesc";
import BlogHero from "@/components/Blog/BlogHero";
import Blogs from "@/components/Blog/BlogPosts";
import Loading from "@/components/Loading";
import axios from "axios";
import { BlogHeroModel, BlogPostModel } from "@/types/Blog";


const Blog = () => {
   const [blogPost, setBlogPost] = useState<BlogPostModel | null>([]);
  const [blogContent, setBlogContent] = useState<BlogHeroModel | null>(null);
  const [isLoading, setIsLoading] = useState(true)

   useEffect(() => {
    const fetchData = async () => {
      try {
        const contentResponse = await axios.get(
          "https://9cqbua0r.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22blogHero%22%20%5D%7B%0A%20%20featured-%3E%7B%0A%20%20%20%20title%2C%0A%20%20%20%20summary%2C%0A%20%20%20%20_createdAt%2C%0A%20%20%20%20%22slug%22%3Aslug.current%2C%0A%20%20%20%20%22image%22%3A%20image.asset%20-%3E%20url%2C%0A%20%20%20%20content%0A%20%20%7D%2C%0A%20%20%20%22image%22%3A%20image.asset%20-%3E%20url%2C%0A%20%20%20%20header%2CblogDesc%2Ctitle%0A%20%20%0A%7D%0A"
        );
        const blogPostResponse = await axios.get(
          "https://9cqbua0r.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22blog%22%20%5D%7B%0A%20%20%20%20%20%20%20%20_id%2C%0A%20%20%20%20%20%20%20%20_createdAt%2C%0A%20%20%20%20%20%20%20%20summary%2C%0A%20%20%20%20%20%20%20%20title%2C%0A%20%20%20%20%20%20%20%20%22slug%22%3Aslug.current%2C%0A%20%20%20%20%20%20%20%20%22image%22%3A%20image.asset%20-%3E%20url%2C%0A%20%20%20%20%20%20%20%20content%0A%20%20%20%20%7D"
        );
      

        const data = blogPostResponse.data.result
        const contentData = contentResponse.data.result[0]
      

    
    
        setBlogPost(data);
        setBlogContent(contentData);
        console.log(contentData)
        console.log(data)
     
      } catch (error) {
        console.error("Error fetching carousel images:", error);
      } finally {
        setIsLoading(false)
      }
    };

    fetchData();
    
  }, []);


  return <div>
      {isLoading ? (
          
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
