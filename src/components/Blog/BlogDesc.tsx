import { BlogHeroModel } from "@/types/Blog";
import CustomH1 from "../StyleComponents/CustomH1";
import DescContainer from "../StyleComponents/DescContainer";


type Props = { data: BlogHeroModel };

export default function BlogDesc({ data }: Props) {

  return (
    <section>
      <div className="text-center mx-auto space-y-4 pb-8 text-main max-w-[665px] py-20 w-11/12">
        <h3 className="pb-4"><CustomH1>{data?.header}</CustomH1></h3>
        <DescContainer>{data?.blogDesc}</DescContainer>
      </div>
    </section>
  );
}
