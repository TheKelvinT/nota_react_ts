import { useState } from "react";

type Props = {
  Imgsrc: string | undefined;
  alt: string | undefined;
};

const CustomImage = ({ Imgsrc, alt }: Props) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <>
      {/* <div style={{ display: loading ? 'block' : 'none' }}>
        <img className="w-full h-full object-cover" src={Dummy} alt="Placeholder" />
      </div> */}
      <div
        className={`w-full h-full object-cover ${loading ? "hidden" : "block"}`}
      >
        <img
          className="w-full h-full object-cover "
          src={Imgsrc}
          onLoad={handleImageLoad}
          alt={alt}
        />
      </div>
    </>
  );
};

export default CustomImage;
