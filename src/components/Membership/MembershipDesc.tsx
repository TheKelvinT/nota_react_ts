import Button from "@/components/Button"
import { PortableText } from "@portabletext/react"
import CustomH1 from "../StyleComponents/CustomH1"
import DescContainer from "../StyleComponents/DescContainer"
import handleNullData from "@/utils/handleNullData"

type Props = {
  [x: string]: any
  data: any
}

const MembershipDesc = (data: Props) => {
  handleNullData(data)

  return (
    <section className="mx-auto flex justify-center py-16 screen-limit">
      <div className=" w-4/5 md:max-w-[638px]  flex flex-col justify-center items-center pt-3">
        <div className="pb-6 max-w-[300px] max-h-[90px]"></div>
        {data && (
          <div className="text-center space-y-4 text-main">
            <CustomH1>{data?.data?.membershipSectionOne?.title}</CustomH1>
            <DescContainer>
              <PortableText
                value={data?.data?.membershipSectionOne?.description}
                onMissingComponent={false}
              />
            </DescContainer>
          </div>
        )}
        <div className="mt-10">
          <Button
            path={data?.data?.membershipSectionOne?.callToAction?.routes}
            title={data?.data?.membershipSectionOne?.callToAction?.buttonText}
          />
        </div>
      </div>
    </section>
  )
}

export default MembershipDesc
