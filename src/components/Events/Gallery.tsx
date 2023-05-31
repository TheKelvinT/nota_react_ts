import React from "react";

import GalleryImg from "@/assets/galleryimg.png";
type Props = {};

const Gallery = (props: Props) => {
  return (
    <section className="py-24">
      <div className="flex flex-col items-center">
        <h3 className="pb-12">Gallery</h3>
        <div className="w-11/12 flex justify-center max-w-[1337px] max-h-[767px] overflow-hidden">
          <img src={GalleryImg} alt="gallery-img"  />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
