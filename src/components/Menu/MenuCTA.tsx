
import Button from "@/components/Button";
import { PortableText } from "@portabletext/react";

import { Link } from "react-router-dom";
import CustomH1 from "../StyleComponents/CustomH1";
import DescContainer from "../StyleComponents/DescContainer";

type Props = { content: any };

const MenuCTA = ({ content }: Props) => {

  
  return (
    <section className="flex flex-col justify-center items-center py-20">
      <div className="text-center  flex flex-col items-center space-y-4 pb-8 text-main max-w-[665px] w-11/12 sm:w-auto">
        <CustomH1>{content?.title}</CustomH1>
        <DescContainer >
          <PortableText value={content?.description}    onMissingComponent={false} />
        </DescContainer>
      </div>
      <div className=" flex justify-center gap-x-6">
        <Link to={content?.callToAction?.routes}>
          <Button title={content?.callToAction?.buttonText} width="w-48" />
        </Link>
      </div>
    </section>
  );
};

export default MenuCTA;
