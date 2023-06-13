import  { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PortableText } from '@portabletext/react';
import { BlogPostModel, SingleBlogModel } from '@/types/Blog';
import useLoadingStore from "@/store/loadingStore";
import Loading from '@/components/Loading';
import DescContainer from '@/components/StyleComponents/DescContainer';
import {MailOutlined, WhatsAppOutlined, ShareAltOutlined} from '@ant-design/icons'
import FacebookIcon from '../assets/facebook.svg'
import InstagramIcon from '../assets/instagram-icon.svg'
import LinkedinIcon from '../assets/linkedin-icon.svg'
import urlBuilder from '@sanity/image-url'
import './styles/SingleBlogStyles.scss'
import CustomImage from "@/components/CustomImage";
import { fetchBlogPost, fetchSingleBlog } from '@/utils/request';
import Button from '@/components/Button';
import { Popover } from 'antd';

const SingleBlog = () => {
    const loading = useLoadingStore((state: any) => state.loading);
    const setLoading = useLoadingStore((state: any) => state.setLoading);
    const [postData, setPostData] = useState<SingleBlogModel | null>(null);
    const [blogs, setBlogs] = useState<BlogPostModel[] | null>(null);
    const [visible, setVisible] = useState(false)
    const [shuffledBlogs, setShuffledBlogs] = useState<BlogPostModel[]>([]);


    const { slug } = useParams();

  useEffect(() => {
    const fetchData = async (slug: string | undefined) => {
      try {
        setLoading(true)
        const [data, blogs] = await Promise.all([
          fetchSingleBlog(slug || ""),
          fetchBlogPost(),
        ]);
 
        setBlogs(blogs)
        console.log(data)
        console.log(blogs)
        setPostData(data);
    } catch (error) {
        console.error("Error fetching carousel images:", error);
        setLoading(false)
      } finally {
        setLoading(false);
      }
    };

    fetchData(slug);
  }, []);
 
  //Logic for recommend blogs

  //Filtered blog 
  // const filteredBlogs= blogs?.filter((blog) => blog.slug !== slug);
  
  // const shuffleArray = (array: any[]) => {
  //   const newArray = [...array];
  //   for (let i = newArray.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  //   }
  //   return newArray;
  // };

  // //shuffle blogs 
  // const shuffledBlogs = filteredBlogs ? shuffleArray(filteredBlogs) : [];

  useEffect(() => {
    if (blogs) {
      const filteredBlogs = blogs.filter((blog) => blog.slug !== slug);
      const shuffledBlogs = shuffleArray(filteredBlogs);
      setShuffledBlogs(shuffledBlogs);
    }
  }, [blogs, slug]);

  const shuffleArray = (array: any[]) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const url = window.location.href
  const title = postData?.title
  const FacebookShareUrl = `http://www.facebook.com/sharer/sharer.php?u=${url}&t=${title}`
  const WhatsappShareUrl = `https://api.whatsapp.com/send?text=${url}`
  const LinkedShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
  
  const handleCopyLink = () => {
    const currentURL = window.location.href;
    navigator.clipboard.writeText(currentURL)
      .then(() => {
        setVisible(true);
        setTimeout(() => {
          setVisible(false); // Hide the Popover after 5 seconds
        }, 5000);
      })
      .catch((error) => {
        console.log(error)
      });
  };

  
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
        <div className="relative single-blog">
  <div className=" mx-auto max-w-[1920px] h-[60vh] overflow-hidden z-0">
    <CustomImage
      Imgsrc={postData?.image}
      alt="Blog-hero"
    />
  </div>
<div className='flex flex-col'>
  <div className=" w-11/12 lg:w-4/5  -mt-40 mb-12 md:-mt-64 mx-auto bg-white border border-main rounded-t-lg overflow-hidden relative z-10 max-w-[1200px]">
    <div className="p-6 pb-28 md:pb-48 pt-16 md:pt-32 sm:px-12 lg:px-24 ">
      <div className="text-[50px] max-w-[650px] mx-auto font-marcellus pb-14 text-center break-words text-main title-shadow">{postData?.title}</div>
      <p className=" text-center text-main  text-[15px] italic ">Written by {postData?.author}</p>
      <p className=" text-center text-main  italic text-[15px] mb-4">{formattedDate}</p>
      <div className='my-8 flex justify-center items-center gap-12'>
        <Link to="https://www.facebook.com/nota.kl/" target="_blank"><img src={FacebookIcon} alt="" /></Link>
        <Link to="https://www.linkedin.com/company/notacafe/" target="_blank" ><img src={LinkedinIcon} alt="" /></Link>
        <Link to="https://www.instagram.com/nota.kl/?hl=en" target="_blank" ><img src={InstagramIcon}/></Link>
        <Link to="#" target="_blank"><MailOutlined style={{fontSize:'30px', color:"#595D3C"}}/></Link>
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
    <div className=' flex flex-col items-center justify-center h-32 text-center bg-white px-12 mx-auto -mt-28 z-30'>
        <div className='font-marcellus text-[35px]'>Share This Article</div>
        <div className='my-4 flex justify-center items-center gap-x-12'>
       
        <Link to={FacebookShareUrl} target="_blank"><img src={FacebookIcon} alt="" /></Link>
        <Link to={LinkedShareUrl}  target="_blank"><img src={LinkedinIcon} alt="" /></Link>
        <Popover   content="Link copied!" visible={visible} trigger="click"> 
          <ShareAltOutlined style={{fontSize:'28px', color:"#595D3C"}} onClick={handleCopyLink}/>
          </Popover>
        <Link to={WhatsappShareUrl} target="_blank"><WhatsAppOutlined style={{fontSize:'28px', color:"#595D3C"}}/></Link>
      </div>
  </div>
  </div>
  <div>
  {/* {shuffledBlogs.slice(0, 2).map((blog) => (
            <div key={blog._id}>

              <h2>{blog.title}</h2>
              <p>{blog.slug}</p>
         
              <Button title='Read More'  width="w-44" path={`/blog/${blog.slug}`} />
        
            </div>
          ))} */}

    <div className="flex flex-col mx-auto gap-y-12 items-center justify-center w-11/12 lg:w-4/5  my-16 max-w-[1200px] ">
      <div className='font-marcellus text-[40px]'>
        More Articles Like This
      </div>
      {shuffledBlogs.slice(0, 2).map((blog, index: number) => (
      <div
        key={blog._id}
        className={`w-full  md:flex xl:gap-x-16 gap-x-8 ${index === 1 ? 'sm:flex-row-reverse' : ''}`}>
        <a href={`/blog/${blog.slug}`}>
          <div className="basis-2/3 md:w-[480px] lg:w-[580px] h-[366px] overflow-hidden bg-main"> 
          <CustomImage
                Imgsrc={blog.image}
                alt={blog.title}
          />   
          </div>
        </a>
        <div className={` basis-1/3 flex-col flex justify-center  mt-4 md:mt-0 gap-y-4 w-96  ${index === 1 ? 'md:items-end' : 'items-start'}`}>
          <a href={`/blog/${blog.slug}`}>
            <div className="text-main text-[17px] underline underline-offset-2">
              {blog.title}
            </div>
          </a>
            
          <div className="py-4">        
          {/* <Button title="READ MORE" width="w-44" path={`/blog/${blog.slug}`} /> */}
          {/* <Link to={`/blog/${blog.slug}`}>
          <Button title="READ MORE" width="w-44" />
          </Link> */}
          <a href={`/blog/${blog.slug}`}>
          <Button title="READ MORE" width="w-44" />
          </a>
          </div>
        </div>
      </div>
        ))}
    </div>
  </div>
</div>
      )}
  </div>
  )
}

export default SingleBlog