import ContactSection from "@/components/ContactSection";
import Loading from "@/components/Loading";
import ImageShowcase from "@/components/Menu/ImageShowcase";
import MenuCTA from "@/components/Menu/MenuCTA";
import MenuOption from "@/components/Menu/MenuOption";
import SpecialMenu from "@/components/Menu/SpecialMenu";

import{useState,useEffect} from "react";
import { MenuContent,MenuList } from "@/types/Menu";
import useLoadingStore from "@/store/loadingStore";
import { fetchMenuContent, fetchMenuList, fetchSpecialMenu } from "@/utils/request";

const Menu = () => {
const [menuContent, setMenuContent] = useState<MenuContent | null>(null);
const [menuList, setMenuList] = useState<MenuList[] | null>([])
const [specialMenu, setSpecialMenu] = useState(null)
const loading = useLoadingStore((state: any) => state.loading);
const setLoading = useLoadingStore((state: any) => state.setLoading);

    useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const [data, data2, data3] = await Promise.all([
          
          fetchMenuContent(),fetchMenuList(),fetchSpecialMenu()
          
        ]);

        setMenuList(data2)
        setSpecialMenu(data3)
        setMenuContent(data);
   
      
      } catch (error) {
        console.error("Error fetching data", error);
        setLoading(false)
      } finally {
        setLoading(false)
      }
    };

    fetchData();
    
  }, []);

  return (
   <div className="">
         {loading ? (
          
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
