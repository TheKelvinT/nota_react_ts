

type Props = { data: any };

export default function ReservationDesc({ data }: Props) {
  return (
    <div>
    <div className="flex flex-col items-center ">
        <div className="text-center mx-auto space-y-4 pb-8 text-main  w-11/12 max-w-[665px] py-20">
          <h3 className="pb-4">{data.title}</h3>
          <p className="text-xs leading-5 text-sub">{data.desc}</p>
        </div>

        <div className="text-dark space-y-6 pt-12 flex flex-col items-center  w-11/12  text-center">
          <p className="text-gothic text-xs">
            {data.openingHours.openingHoursTitle}
          </p>
          <div className=" font-bold text-lg">
            <p> {data.openingHours.openingHour}</p>
            <p>{data.openingHours.closeHoursTitle}</p>
          </div>
          <p className="text-gothic text-xs">{data.openingHours.lastCall}</p>
        </div>
      </div>
    </div>
  );
}
