import handleNullData from "@/utils/handleNullData"
import React from "react"
import CustomH1 from "../StyleComponents/CustomH1"
import Button from "@/components/Button"

type Props = {
  data: any
  setPageType: any
}

const MembershipTerms = ({ setPageType, data }: Props) => {
  handleNullData(data)

  return (
    <div className="flex justify-center flex-col items-center  mt-32 ">
      <CustomH1>The Communal Table at NOTA</CustomH1>
      <CustomH1>Terms & Conditions</CustomH1>

      <ol className="text-main text-xs list-decimal space-y-4  w-11/12 md:w-4/5 leading-5 my-12 ">
        {data.terms &&
          data.terms.map((req: string, idx: number) => (
            <li key={idx}>{req}</li>
          ))}
      </ol>

      <Button path="/membership" title="View Benefits" />
    </div>
  )
}

export default MembershipTerms
