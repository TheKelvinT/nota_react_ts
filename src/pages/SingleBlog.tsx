import  { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { PortableText } from '@portabletext/react';
import { SingleBlogModel } from '@/types/Blog';
import useLoadingStore from "@/store/loadingStore";
import Loading from '@/components/Loading';
import DescContainer from '@/components/StyleComponents/DescContainer';
import {MailOutlined} from '@ant-design/icons'
import FacebookIcon from '../assets/facebook.svg'
import InstagramIcon from '../assets/instagram-icon.svg'
import LinkedinIcon from '../assets/linkedin-icon.svg'
import urlBuilder from '@sanity/image-url'
import './styles/SingleBlogStyles.css'

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

  const urlFor = (source: any) => urlBuilder({projectId: '9cqbua0r', dataset: 'production'}).image(source)

  const serializer = {
    types: {
      image: (props: { value: { asset?: any; alt?: string }; }) => {
        if (!props.value || !props.value.asset) {
          return null; // Return null or a placeholder image if the source is undefined or doesn't have the expected properties
        }
  
        const { asset, alt } = props.value;
        return (
          <figure>
            <img src={urlFor(asset)?.width(1200).url()} alt={alt} />
          </figure>
        );
      }
    }
  }
  
 

  return (
    <div>
         {loading ? (
          
          <Loading/>

      ) : (
        <div className="relative">
  <div className="max-w-[1920px] max-h-[900px] overflow-hidden z-0">
    <img
      src={postData?.image}
      alt="Blog-hero"
      className="object-cover w-full h-auto -z-30"
    />
  </div>

  <div className=" w-11/12 md:w-4/5 xl:w-3/5 -mt-24 md:-mt-64 mx-auto bg-white shadow-lg rounded-lg overflow-hidden relative z-10">
    <div className="p-6 md:pb-12 pt-16 md:pt-32 sm:px-12 lg:px-24">
      <h1 className="text-[40px] max-w-[650px] mx-auto font-marcellus pb-14 text-center text-main title-shadow">{postData?.title}</h1>
      <p className=" text-center text-main  text-[15px] italic ">Written by {formattedDate}</p>
      <p className=" text-center text-main  italic text-[15px] mb-4">{formattedDate}</p>
      <div className='my-8 flex justify-center items-center gap-12'>
        <Link to="https://www.facebook.com/nota.kl/" ><img src={FacebookIcon} alt="" /></Link>
        <Link to="https://www.linkedin.com/company/notacafe/" ><img src={LinkedinIcon} alt="" /></Link>
        <Link to="https://www.instagram.com/nota.kl/?hl=en" ><img src={InstagramIcon}/></Link>
        <Link to="#"><MailOutlined style={{fontSize:'30px', color:"#595D3C"}}/></Link>
      </div>
      <DescContainer>
        <PortableText
          value={postData?.content}
          onMissingComponent={false}
          components={serializer}
        />
      </DescContainer>
    </div>
  </div>
</div>

     
      
      )}
  </div>
  )
}

export default SingleBlog