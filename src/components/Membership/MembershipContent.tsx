import CustomH1 from "../StyleComponents/CustomH1"
import CustomImage from "../CustomImage"
import handleNullData from "@/utils/handleNullData"
import DescContainer from "../StyleComponents/DescContainer"
import { PortableText } from "@portabletext/react"
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"

type Props = {
  [x: string]: any
  data: any
  setPageType: any
}

const MembershipContent = ({ data, setPageType }: Props) => {
  console.log(data)

  handleNullData(data)

  return (
    <section className="bg-primary flex justify-center py-8 ">
      <div className="flex flex-col items-center ">
        <div className="text-center mx-auto space-y-4 pb-8 text-main  w-11/12 max-w-[665px] py-20">
          <CustomH1>{data?.membershipSectionTwo?.title}</CustomH1>
          <DescContainer>
            <PortableText
              value={data?.membershipSectionTwo?.description}
              onMissingComponent={false}
            />
            <Link
              className="underline"
              to="/membership/terms#tnc"
              target="_blank"
            >
              View our Terms and Conditions
            </Link>
          </DescContainer>
        </div>
        <div className="max-w-[500px] hidden md:block">
          <CustomImage
            Imgsrc={
              data?.membershipSectionTwo?.privilegesImage?.desktopImage.image
            }
            alt="reservation-hero"
          />
        </div>
        <div className="max-w-[500px] md:hidden">
          <CustomImage
            Imgsrc={
              data?.membershipSectionTwo?.privilegesImage?.desktopImage.image
            }
            alt="reservation-hero"
          />
        </div>
      </div>
    </section>
  )
}

export default MembershipContent
