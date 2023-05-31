import axios from 'axios';
import {create} from 'zustand';
import { CarouselImage, HomeContent } from "@/types/Home";

const useLoadingStore = create((set) => ({
  data:[],
  contentData:[],
  loading: true,
  hasErrors:false,
  setLoading: (isLoading: boolean) => set({ loading: isLoading }),
 
  fetch: async () => {
    set(()=>({loading: true}));
    try {
      const carouselResponse = await axios.get(
        "https://9cqbua0r.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22homeCarousel%22%20%5D%7Bcarousel%5B%5D%20%7B%0A%20%20%20%20%20%20%22imageURL%22%3A%20asset%20-%3E%20url%0A%20%20%20%20%7D%7D"
      );
      const contentResponse = await axios.get(
        "https://9cqbua0r.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22homeContent%22%5D%20%7B%0A%20%20homeSectionTwo%20%7B%0A%20%20%20%20description%2C%0A%20%20%20%20title%2C%0A%20%20%20%20Images%5B%5D%20%7B%0A%20%20%20%20%20%20%22imageURL%22%3A%20asset%20-%3E%20url%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%20%20homeSectionOne%20%7B%0A%20%20%20%20description%2C%0A%20%20%20%20title%2C%0A%20%20%20%20callToAction%20-%3E%20%7B%0A%20%20%20%20%20%20cta%2C%0A%20%20%20%20%20%20buttonText%2C%0A%20%20%20%20%20%20routes%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22Logo%22%3A%20Logo.asset%20-%3E%20url%0A%20%20%7D%2C%0A%20%20homeMidBanner%20%7B%0A%20%20%20%20%22bannerURL%22%3A%20banner.asset%20-%3E%20url%0A%20%20%7D%2C%0A%20%20%20%20cards%20%5B%5D%7B%0A%20%20%20%20description%2C%0A%20%20%20%20%22image%22%3Aimage.asset%20-%3E%20url%2C%0A%20%20%20%20title%2C%0A%20%20%20%20callToAction%20-%3E%20%7B%0A%20%20%20%20%20%20cta%2C%0A%20%20%20%20%20%20buttonText%2C%0A%20%20%20%20%20%20routes%0A%20%20%20%20%7D%2C%0A%20%20%7D%2C%0A%20%20homeNavigation%20%5B%5D%7B%0A%20%20%20%20description%2C%0A%20%20%20%20%22image%22%3Aimage.asset%20-%3E%20url%2C%0A%20%20%20%20title%2C%0A%20%20%20%20callToAction%20-%3E%20%7B%0A%20%20%20%20%20%20cta%2C%0A%20%20%20%20%20%20buttonText%2C%0A%20%20%20%20%20%20routes%0A%20%20%20%20%7D%2C%0A%20%20%7D%0A%7D"
      );
      
      set((state : any)=> ({data:(state.data = carouselResponse.data.result[0].carousel), contentData:(state.data = contentResponse.data.result[0]), loading:false}))
      // const data = carouselResponse.data.result[0].carousel
      // const contentData = contentResponse.data.result[0]
  
    } catch (error) {
      console.error("Error fetching carousel images:", error);
      set(()=>({hasErrors:true, loading:false}))
  }

}
}))

export default useLoadingStore