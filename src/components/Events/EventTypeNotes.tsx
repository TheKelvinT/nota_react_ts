import { Link } from "react-router-dom"

type Props = {
  eventType: boolean | undefined
}

const EventTypeNotes = ({ eventType }: Props) => {
  return (
    <>
      {eventType ? (
        <div className="text-main text-xs md:whitespace-nowrap mb-6">
          <p className="mb-3 md:mb-1.5">
            *For online enquiry, we only accept bookings two weeks prior to the
            event.
          </p>
          <p className="mb-3 md:mb-1.5 whitespace-break-spaces">
            This is to ensure we have ample time to make necessary preparation
            and allocation of resources.
          </p>
          <p className="mb-3 md:mb-1.5">
            *For last minute event booking enquiry, please contact us directly{" "}
            <Link
              to="https://wa.me/60174891189"
              target="_blank"
              className="underline underline-offset-2 italic"
            >
              via Whatsapp.
            </Link>
          </p>
        </div>
      ) : (
        <div className="text-main text-xs md:whitespace-nowrap mb-6">
          <p className="mb-3 md:mb-1.5">
            *For reservation of 10 pax and above, please proceed with{" "}
            <Link
              to="https://wa.me/60174891189"
              target="_blank"
              className="underline underline-offset-2 italic"
            >
              group booking via Whatsapp.
            </Link>
          </p>
          <p>
            *For same-day reservations, kindly{" "}
            <Link
              to="tel:0174891189"
              target="_blank"
              className="underline underline-offset-2 italic"
            >
              call us
            </Link>{" "}
            or{" "}
            <Link
              to="https://wa.me/60174891189"
              target="_blank"
              className="underline underline-offset-2 italic"
            >
              Whatsapp us.
            </Link>
          </p>
        </div>
      )}
    </>
  )
}

export default EventTypeNotes
