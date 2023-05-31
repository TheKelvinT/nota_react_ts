import { BlogHeroModel } from "@/types/Blog";


type Props = { data: BlogHeroModel };

export default function BlogDesc({ data }: Props) {
  console.log(data)
  return (
    <section>
      <div className="text-center mx-auto space-y-4 pb-8 text-main max-w-[665px] py-20 w-11/12">
        <h3 className="pb-4">{data?.header}</h3>
        <p className="text-xs leading-5 text-sub">{data?.blogDesc}</p>
      </div>
    </section>
  );
}
