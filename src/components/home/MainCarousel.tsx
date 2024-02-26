import { useRef } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper";
import { CarouselImage } from "@/types/Home";
import handleNullData from "@/utils/handleNullData";
import CustomImage from "../CustomImage";

SwiperCore.use([Autoplay, Pagination]);
type Props = { images: CarouselImage[] | null };
function MainCarousel({ images }: Props) {
  handleNullData(images);

  const swiperRef = useRef(null);
  // const carouselStyle = {
  //   "--swiper-pagination-color": "rgba(255,255,255,0.7)",
  //   "--swiper-pagination-bullet-size": "10px",
  //   "--swiper-pagination-bullet-inactive-color": "rgba(255,255,255,0.7)",
  //   "--swiper-theme-color": "rgba(255,255,255,0.7)",
  //   "--swiper-navigation-size": "44px",
  // }as any;

  return (
    <div className="flex  mx-auto justify-center screen-limit bg-main">
      <Swiper
        ref={swiperRef}
        cssMode={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{ delay: 3000 }}
        speed={1500}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper w-[1920px] h-screen bg-main -mt-[80px] "
      >
        {images &&
          images &&
          images.map(
            (image: { imageURL: string | undefined }, index: number) => (
              <SwiperSlide key={index} className="  ">
                <div className="bg-main w-[1920px] h-screen overflow-hidden">
                  {/* <img
               
                  src={image.imageURL}
                  alt={`hero${index + 1}`}
                  className="h-full w-full object-cover"
                /> */}
                  <CustomImage
                    alt={`hero${index + 1}`}
                    Imgsrc={image.imageURL}
                  />
                </div>
              </SwiperSlide>
            ),
          )}
      </Swiper>
    </div>
  );
}

export default MainCarousel;
