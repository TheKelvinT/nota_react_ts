import React, { useRef, useState } from "react";
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
import { fromJSON } from "postcss";
import handleNullData from "@/utils/handleNullData";
import { EventModel } from "@/types/Event";

SwiperCore.use([Autoplay, Pagination]);

type Props = { data: EventModel | null };
function MiniCarousel({ data }: Props) {
  handleNullData(data)
  console.log(data)
  const swiperRef = useRef(null);

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 3000 }}
        speed={1000}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper "
      >
        {data?.sectionThree?.carousel?.map(
          (image: any, index: React.Key | null | undefined) => (
            <SwiperSlide key={index}>
              <img
                src={image?.image}
                height="825"
                width="2000"
                alt="slider-img"
                className="object-cover h-full w-full"
              />
            </SwiperSlide>
          )
        )}
      </Swiper>
    </>
  );
}

export default MiniCarousel;
