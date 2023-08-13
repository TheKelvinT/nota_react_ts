import { ReservationsModel } from "@/types/Reservations";
import handleNullData from "@/utils/handleNullData";
import CustomH1 from "../StyleComponents/CustomH1";
import DescContainer from "../StyleComponents/DescContainer";
import { PortableText } from "@portabletext/react";
import Button from "@/components/Button";

type Props = { data: ReservationsModel | null };

export default function ReservationDesc({ data }: Props) {
  handleNullData(data)
  console.log(data)
  return (
    <div id="reservations">
    <div className="flex flex-col items-center ">
        <div className="text-center mx-auto space-y-4 pb-8 text-main  w-11/12 max-w-[665px] py-20">
          <CustomH1>{data?.title}</CustomH1>
          <DescContainer >{data?.desc}</DescContainer>
        </div>

        <div className="text-center mx-auto space-y-4  text-main  w-11/12 max-w-[665px] py-6">
          <CustomH1>{data?.groupTitle}</CustomH1>
          <div className=" flex flex-col flex-auto text-[11px] text-main">
          <PortableText value={data?.groupDesc || []}   onMissingComponent={false}/>
          </div>
          <div>
          <Button title={data?.groupCTA.buttonText || ""} path={data?.groupCTA.routes} />
        </div>
        </div>

        <div className="text-dark space-y-6 pt-12 flex flex-col items-center  w-11/12  text-center">
          <p className="font-marcellus text-xs">
            {data?.openingHours.openingHoursTitle}
          </p>
          <div className=" font-bold text-xs">
            <p> {data?.openingHours.openingHour}</p>
            <p>{data?.openingHours.closeHoursTitle}</p>
          </div>
          <DescContainer>{data?.openingHours.lastCall}</DescContainer>
        </div>
      </div>
    </div>
  );
}
