import GalleryImg from "@/assets/galleryimg.png";
import CustomH1 from "../StyleComponents/CustomH1";

const Gallery = () => {
  return (
    <section className="py-24">
      <div className="flex flex-col items-center">
        <div className="pb-12">
        <CustomH1 >Gallery</CustomH1>
        </div>
        <div className="w-11/12 flex justify-center max-w-[1337px] max-h-[767px] overflow-hidden">
          <img src={GalleryImg} alt="gallery-img"  />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
