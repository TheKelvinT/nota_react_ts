import  { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { PortableText } from '@portabletext/react';
import { SingleBlogModel } from '@/types/Blog';
import useLoadingStore from "@/store/loadingStore";
import Loading from '@/components/Loading';

const SingleBlog = () => {
    const loading = useLoadingStore((state: any) => state.loading);
    const setLoading = useLoadingStore((state: any) => state.setLoading);
    const [postData, setPostData] = useState<SingleBlogModel | null>(null);
    const { slug } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await axios.get(`https://9cqbua0r.api.sanity.io/v2021-10-21/data/query/production?query=*%5Bslug.current%20%3D%3D%20%22${slug}%22%5D%7B%0A%20%20%20%20%20%20%20%20%20%20%20_id%2C%0A%20%20%20%20%20%20%20%20%20%20%20_createdAt%2C%0A%20%20%20%20%20%20%20%20%20%20%20summary%2C%0A%20%20%20%20%20%20%20%20%20%20%20title%2C%0A%20%20%20%20%20%20%20%20%22slug%22%3Aslug.current%2C%0A%20%20%20%20%20%20%20%20%22image%22%3A%20image.asset%20-%3E%20url%2C%0A%20%20%20%20%20%20%20%20content%0A%20%20%20%20%20%20%20%7D`);
        const data = response.data.result[0];
        console.log(data)
        setPostData(data);
    } catch (error) {
        console.error("Error fetching carousel images:", error);
        setLoading(false)
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
 
  const createdAt = postData?._createdAt ? new Date(postData._createdAt) : undefined;
  const formattedDate = createdAt?.toLocaleDateString('en-UK', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

 

  return (
    <div>
         {loading ? (
          
          <Loading/>

      ) : (
    <div className="container mx-auto px-4 py-8">
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={postData?.image} alt="Blog Image" className="w-full" />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-2">{postData?.title}</h1>
        <p className="text-gray-500 mb-4">{formattedDate}</p>
        <div className="prose">
        <PortableText value={postData?.content}     onMissingComponent={false}/>
        </div>
      </div>
    </div>
  </div>
      )}
  </div>
  )
}

export default SingleBlog