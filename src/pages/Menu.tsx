import ContactSection from "@/components/ContactSection";
import Loading from "@/components/Loading";
import ImageShowcase from "@/components/Menu/ImageShowcase";
import MenuCTA from "@/components/Menu/MenuCTA";
import MenuOption from "@/components/Menu/MenuOption";
import SpecialMenu from "@/components/Menu/SpecialMenu";
import axios from "axios";
import{useState,useEffect} from "react";
import { MenuContent,MenuList } from "@/types/Menu";

type Props = {};

const Menu = () => {
const [menuContent, setMenuContent] = useState<MenuContent | null>(null);
const [menuList, setMenuList] = useState<MenuList[] | null>([])
const [specialMenu, setSpecialMenu] = useState(null)
const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
    const fetchData = async () => {
      try {
      
        const contentResponse = await axios.get(
          "https://9cqbua0r.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22menuSectionOne%22%5D%20%7B%0A%20%20%22banner%22%3A%20banner.asset-%3Eurl%2C%0A%20%20%20%20title%2C%0A%20%20_id%2C%0A%20%20%22image%22%3A%20image.asset-%3Eurl%2C%0A%20%20description%2C%0A%20%20callToAction-%3E%7B%0A%20%20%20%20cta%2C%0A%20%20%20%20buttonText%2C%0A%20%20%20%20routes%0A%20%20%7D%2C%0A%20%20%22images%22%3A%20Images%5B%5D.asset-%3Eurl%0A%7D"
        );

         const menuListResponse = await axios.get(
          "https://9cqbua0r.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22menus%22%5D%20%5B%5D%7B%0A%20%20%0A%20%20%20%20title%2C%0A%20%20%20%20time%2C%0A%20%20_id%2C%0A%0A%20%20description%2C%0A%20%20callToAction-%3E%7B%0A%20%20%20%20cta%2C%0A%20%20%20%20buttonText%2C%0A%20%20%20%20routes%0A%20%20%7D%2C%0A%0A%7D"
        );

         const specialMenuResponse = await axios.get(
          "https://9cqbua0r.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22specialMenu%22%5D%20%7B%0A%20%20title%2C%0A%20%20%20%20intro%2C%0A%20%20%20%20time%2C%0A%20%20%20%20date%2C%0A%20%20_id%2C%0A%20%20description%2C%0A%20%20callToAction-%3E%7B%0A%20%20%20%20cta%2C%0A%20%20%20%20buttonText%2C%0A%20%20%20%20routes%0A%20%20%7D%2C%0A%20%20%22image%22%3A%20specialImage.asset-%3Eurl%0A%7D"
        );
        const data = contentResponse.data.result[0]
        const data2 = menuListResponse.data.result
        const data3 = specialMenuResponse.data.result[0]
          
        setMenuList(data2)
        setSpecialMenu(data3)
        setMenuContent(data);
          console.log(data2)
      
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setIsLoading(false)
      }
    };

    fetchData();
    
  }, []);

  return (
   <div className="">
         {isLoading ? (
          
          <Loading/>

      ) : (
          <div className="">
      <div className="-mt-[80px] max-w-[1920px] mx-auto  h-[315px] lg:h-auto ">
        <img
          src={menuContent?.banner}
          alt="hero-banner"
          className="object-cover w-full h-full"
        />
      </div>
      <MenuCTA content={menuContent} />
      <ImageShowcase content={menuContent} />
      <MenuOption content={menuList} image={menuContent}/>
      <SpecialMenu content={specialMenu} />
      <ContactSection />
    </div>
      
      )}
    </div>
  );;
};

export default Menu;
