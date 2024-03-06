import handleNullData from "@/utils/handleNullData"
import CustomH1 from "../StyleComponents/CustomH1"
import Button from "@/components/Button"
import { HashLink } from "react-router-hash-link"

type Props = {
  data: any
}

const MembershipTerms = ({ data }: Props) => {
  handleNullData(data)

  return (
    <div className="flex justify-center flex-col items-center  mt-32 px-3 md:px-0 ">
      <CustomH1>The Communal Table at NOTA</CustomH1>
      <CustomH1>Terms & Conditions</CustomH1>

      <ol className="text-main text-xs list-decimal space-y-4  w-11/12 md:w-3/5 lg:w-2/5 leading-5 my-12 ">
        {data.terms &&
          data.terms.map((req: string, idx: number) => (
            <li key={idx}>{req}</li>
          ))}
      </ol>
      <HashLink to="/membership#member-benefits">
        <Button title="View Benefits" />
      </HashLink>
    </div>
  )
}

export default MembershipTerms
