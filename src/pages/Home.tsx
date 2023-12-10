import { useState, useEffect } from "react";
import IndexCTA from "../components/home/IndexCTA";
import MainCarousel from "../components/home/MainCarousel";
import { fetchCarousel, fetchContent } from "../utils/request.ts";
import IndexCTA2 from "@/components/home/IndexCTA2";
import IndexDesc from "@/components/home/IndexDesc";
import IndexNavigation from "@/components/home/IndexNavigation";
import ContactSection from "@/components/ContactSection";
import Loading from "@/components/Loading";
import { CarouselImage, HomeContent } from "@/types/Home";
import useLoadingStore from "@/store/loadingStore";
import CustomImage from "@/components/CustomImage.tsx";

const HomePage = () => {
  const [carouselImages, setCarouselImages] = useState<CarouselImage[] | null>(
    [],
  );
  const [homeContent, setHomeContent] = useState<HomeContent | null>(null);
  const loading = useLoadingStore((state: any) => state.loading);
  const setLoading = useLoadingStore((state: any) => state.setLoading);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [carouselResponse, contentResponse] = await Promise.all([
          fetchCarousel(),
          fetchContent(),
        ]);

        setCarouselImages(carouselResponse);
        setHomeContent(contentResponse);
      } catch (error) {
        console.error("Error fetching carousel images:", error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="">
      {loading ? (
        <Loading />
      ) : (
        <>
          <MainCarousel images={carouselImages} />
          <IndexCTA content={homeContent} />
          <IndexDesc content={homeContent} />
          <IndexCTA2 content={homeContent} />
          <section className=" md:h-auto  md:mt-48 mt-24 max-w-screen max-h-[500px]  overflow-hidden">
            {/* <img
          src={homeContent?.homeMidBanner?.bannerURL}
          alt="banner"
          className="object-cover w-full h-full"
        /> */}

            <CustomImage
              alt="banner"
              Imgsrc={homeContent?.homeMidBanner?.bannerURL}
            />
          </section>
          <IndexNavigation content={homeContent} />
          <ContactSection />
        </>
      )}
    </div>
  );
};

export default HomePage;
