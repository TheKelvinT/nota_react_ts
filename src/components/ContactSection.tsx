import { useState, useEffect, useRef } from "react"
import {
  Modal,
  TimePicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Row,
  Col,
  Alert,
  Select,
  Space,
} from "antd"
import CustomButton from "./Button"
import { ExclamationCircleFilled } from "@ant-design/icons"
import { Rule } from "antd/es/form"
import emailjs from "emailjs-com"
import moment from "moment"
import CustomH1 from "./StyleComponents/CustomH1"
// import LocalButton from "./Button"
// import reservationStore from "@/store/reservationStore.ts"
import reservationConfig from "@/store/reservationConfigStore.ts"
import { fetchReservationAlert } from "@/utils/request"
// import { PortableText } from "@portabletext/react"
import { fetchReservationConfig } from "@/utils/request"
import { formValueModel } from "@/types/Contact"
import EventTypeNotes from "./Events/EventTypeNotes"
interface Props {
  eventType?: boolean
}

function ContactSection({ eventType }: Props) {
  const timePickerRef = useRef<any>(null)
  const [hour, setHour] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)
  // const [largeModalOpen, setLargeModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [selectedDate, setSelectedDate] = useState("")
  const [formValues, setFormValues] = useState<formValueModel>({})
  const [others, setOthers] = useState(false)
  // const data = reservationStore((state: any) => state.reservationAlert)
  const additionalDisabledDate = reservationConfig(
    (state: any) => state.reservationConfig
  )

  useEffect(() => {
    fetchReservationAlert()
    fetchReservationConfig()
  }, [])

  let modalContent

  if (hour === 21) {
    modalContent = <p>Kitchen&apos;s last call for dinner service at 9.30pm.</p>
  } else if (hour >= 15 && hour <= 16) {
    modalContent = (
      <>
        <p>Kitchen&apos;s last call for lunch service at 3:30pm.</p>
        <p>We will resume dinner service at 5pm.</p>
      </>
    )
  } else if (hour <= 9 || hour >= 21) {
    modalContent = <p>Out of operating hours range. Please try again.</p>
  }

  // const disabledDate = (current: any) => {
  //   const currentDate = new Date();
  //   currentDate.setDate(currentDate.getDate() - 1); // Subtract one day from the current date

  //   return current < currentDate || new Date(current).getDay() === 3 ;

  // };

  const eventTypeOptions = [
    { value: "Corporate", label: "Corporate" },
    { value: "Birthday Celebration", label: "Birthday Celebration" },
    { value: "Wedding", label: "Wedding" },
    { value: "Private Family Gathering", label: "Private Family Gathering" },
    { value: "Baby Shower", label: "Baby Shower" },
    { value: "Others", label: "Others" },
  ]

  const eventTimeSlot = [
    { value: "day", label: "10am - 2pm (Daytime)" },
    { value: "tea", label: "2pm - 6pm (Teatime)" },
    { value: "evening", label: "6pm - 10pm (Evening)" },
  ]

  const handleDateChange = (date: any) => {
    const selectedDateUTC = new Date(date) // Convert the date string to a UTC Date object
    const timezoneOffset = 8 * 60 // Offset for GMT+8 in minutes
    selectedDateUTC.setMinutes(selectedDateUTC.getMinutes() + timezoneOffset) // Convert to GMT+8
    const formattedDate = selectedDateUTC.toISOString().split("T")[0]
    setSelectedDate(formattedDate)
  }

  const disabledDate = (current: any) => {
    const events = additionalDisabledDate
    const currentDate = new Date(current)

    if (currentDate.getDay() === 3) {
      return true // Disable Wednesdays
    }

    // Check if the current date is before the current day (i.e., yesterday or earlier)
    const today = new Date()
    today.setDate(today.getDate())
    today.setHours(23, 59, 59, 999) // Set to the end of today

    if (currentDate < today) {
      return true // Disable dates before yesterday
    }

    for (const event of events) {
      if (!event.disableDay) {
        const from = new Date(event.from)
        const to = new Date(event.to)
        if (from <= to) {
          if (
            currentDate >= from && // Check for greater than or equal to "from"
            currentDate <= to // Check for less than or equal to "to"
          ) {
            return true // Disable dates within the event range
          }

          if (
            from.toDateString() === to.toDateString() &&
            currentDate.toDateString() === from.toDateString()
          ) {
            return true
          }
        } else {
          console.log("From must be before To")
        }
      } else {
        if (
          event.singleDisabled &&
          currentDate.toDateString() ===
            new Date(event.singleDisabled).toDateString()
        ) {
          return false
        }
      }
    }

    return false
  }

  useEffect(() => {
    console.log(others)
  }, [others])
  const disabledTime = () => {
    const events = additionalDisabledDate
    const defaultDisabledHours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 22, 23]
    const defaultDisabledMinutes = [30, 45]
    if (selectedDate) {
      const matchingEvent = events.find(
        (event: { singleDisabled: string }) =>
          event.singleDisabled === selectedDate
      )

      if (matchingEvent) {
        const { fromTime, toTime } = matchingEvent.disabledTimeSlot

        let fromHour = fromTime.fromHour
        if (fromTime.fromMinute !== 0) {
          fromHour = fromHour + 1
        }

        const fromMinute = fromTime.fromMinute
        let toHour = toTime.toHour

        if (toTime.toMinute !== 0) {
          toHour = toHour - 1
        }

        if (toTime.toHour === 21 && toTime.toMinute <= 15) {
          toHour = toHour - 1
        }

        if (toTime.toHour === 21 && toTime.toMinute > 15) {
          toHour = toHour + 1
        }
        const fromHH = fromTime.fromHour
        const toHH = toTime.toHour
        let toMinute = toTime.toMinute
        const disabledHoursInRange = Array.from(
          { length: toHour - fromHour + 1 },
          (_, index) => fromHour + index
        )

        return {
          disabledHours: () => [
            ...disabledHoursInRange,
            ...defaultDisabledHours,
          ],
          disabledMinutes: (selectedHour: number) => {
            if (selectedHour === fromHH && selectedHour !== 21) {
              if (fromMinute == 15) {
                return [15, 30, 45]
              } else if (toMinute == 30) {
                return [30, 45]
              } else if (toMinute == 45) {
                return [45]
              }
            }
            if (selectedHour === toHH && selectedHour !== 21) {
              if (toMinute == 15) {
                return [0, 15]
              } else if (toMinute == 30) {
                return [0, 15, 30]
              } else if (toMinute == 45) {
                return [0, 15, 30, 45]
              } else return []
            }
            if (selectedHour === 21) {
              if (toMinute == 0) {
                return [30, 45]
              } else if (toMinute == 15) {
                return [0, 30, 45]
              }
            }

            return []
          },
        }
      }
      return {
        disabledHours: () => defaultDisabledHours,
        disabledMinutes: (selectedHour: number) => {
          if (selectedHour === 21) {
            return defaultDisabledMinutes
          }
          return []
        },
      }
    } else {
      return {
        disabledHours: () => defaultDisabledHours,
        disabledMinutes: () => [], // No minutes are disabled when selectedDate is undefined
      }
    }
  }
  const format = "HH:mm"

  const handleTimeChange = (time: any) => {
    const hour = time?.$H
    setHour(hour)

    if ((hour >= 15 && hour <= 16) || hour >= 21 || hour <= 9 || hour >= 21) {
      setModalOpen(true)
    }
  }

  const handleClose = () => {
    setModalOpen(false)
  }

  const getAlertDescription = () => {
    if (!eventType) {
      return `Thank you ${formValues?.name}, we have received your reservation request for ${formValues.pax} pax on ${formValues.time} ${formValues.date}. We will reach out to you shortly to confirm your reservation.`
    } else {
      return `Thank you ${formValues?.name}, we have received your event enquiry for ${formValues.pax} pax on ${formValues.time} ${formValues.date}. Our designated representative will contact you shortly to help with your inquiry.`
    }
  }
  const sendEmail = async (formattedValues: any) => {
    try {
      setIsLoading(true)
      await emailjs.send(
        "service_ft1p6fp",
        "template_xd5re4r",
        formattedValues,
        "k-o6gKU7rmtoFJwGq"
      )
      setIsLoading(false)
      setSuccess(true)
    } catch (error) {
      // console.error('Error sending email:', error);
      // Add an error message or handle the error as needed
      setIsLoading(false)
      setError(true)
    }
  }

  const [form] = Form.useForm()

  const onFinish = async (values: any) => {
    console.log(values)
    if (values.newType) {
      values.type = values.newType
    }
    const formattedDate = moment(values.date.$d).format("DD-MMMM-YYYY")

    const formattedTime = moment(values.time.$d).format("h:mm a")

    const enquiryType = eventType ? "Event Enquiry" : "General Reservation"
    const formattedValues = {
      ...values,
      date: formattedDate,
      time: formattedTime,
      enquiryType: enquiryType,
      type: values.type ? values.type : "-",
    }
    setFormValues(formattedValues)
    console.log(formattedValues)
    sendEmail(formattedValues)
  }

  // const handleOpenLargeModal = () => {
  //   setLargeModalOpen(true)
  // }

  // const handleCloseLargeModal = () => {
  //   setLargeModalOpen(false)
  // }
  // const handleLargeModalOK = () => {
  //   setLargeModalOpen(false)
  //   setDoneRead(true)
  // }

  const onEventTypeChange = (value: string) => {
    console.log(value)
    if (value === "Others") {
      setOthers(true)
      setFormValues((prevFormValues) => ({
        ...prevFormValues,
        type: value,
      }))
    } else {
      setOthers(false)
      setFormValues((prevFormValues) => ({
        ...prevFormValues,
        type: value,
      }))
    }
  }

  // FORM VALIDATION
  const rules = {
    name: [
      {
        required: true,
        message: "Name cannot be empty.",
      },
    ],
    contact: [
      {
        required: true,
        message: "Contact cannot be empty.",
      },
      {
        pattern: /^[0-9-]+$/,

        message: "Contact must contain only numbers.",
      },
      {
        min: 8,
        message: "Contact must be at least 8 digits.",
      },
      {
        max: 12,
        message: "Contact cannot exceed 15 digits.",
      },
    ],
    email: [
      {
        type: "email",
        message: "Please enter a valid email address.",
      },
      {
        required: true,
        message: "Email address cannot be empty.",
      },
    ] as Rule[],
    date: [
      {
        required: true,
        message: "Date cannot be empty.",
      },
    ],
    type: [
      {
        required: true,
        message: "Event Type cannot be empty.",
      },
    ],
    pax: [
      {
        required: true,
        message: "Pax cannot be empty.",
      },
    ],
    time: [
      {
        required: true,
        message: "Time cannot be empty.",
      },
    ],
  }

  const handleFormValuesChange = (
    changedValues: formValueModel,
    allValues: formValueModel
  ) => {
    console.log("Changed values:", changedValues)
    console.log("All values:", allValues)
    // Do something with the changed values
  }

  return (
    <div id="book" className="bg-primary   text-main">
      <div className="flex flex-col md:flex-row justify-center py-20  mx-auto mt-24 md:gap-x-16 lg:gap-x-28 xl:gap-x-56 w-11/12 lg:w-auto">
        <div className="lg:w-[500px] ">
          <div className="mb-8">
            {eventType ? (
              <CustomH1>Event Enquiry Form</CustomH1>
            ) : (
              <CustomH1>Chope A Table</CustomH1>
            )}
          </div>

          <Form
            form={form}
            colon={false}
            onFinish={onFinish}
            onValuesChange={handleFormValuesChange}
          >
            <Form.Item
              name="name"
              label={<p className="font-gothic text-lg">Name</p>}
              rules={rules.name}
              labelCol={{ span: 6 }}
              labelAlign="left"
            >
              <Input
                type="text"
                size="large"
                id="name"
                name="name"
                placeholder="name"
                className="bg-primary border border-main/20 text-xs placeholder-place h-12 font-inter w-full rounded-none"
              />
            </Form.Item>

            <Form.Item
              name="contact"
              label={<p className="font-gothic text-lg">Contact</p>}
              rules={rules.contact}
              labelCol={{ span: 6 }}
              labelAlign="left"
            >
              <Input
                type="text"
                id="contact"
                name="contact"
                placeholder="contact no"
                className="bg-primary border border-main/20 text-xs w-full placeholder-place font-inter rounded-none h-12"
              />
            </Form.Item>

            <Form.Item
              name="email"
              label={<p className="font-gothic text-lg">Email</p>}
              rules={rules.email}
              labelCol={{ span: 6 }}
              labelAlign="left"
            >
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="email"
                className="bg-primary border border-main/20 text-xs w-full placeholder-place font-inter rounded-none h-12"
              />
            </Form.Item>

            {eventType && (
              <>
                <Form.Item
                  name="type"
                  label={<p className="font-gothic text-lg">Event Type</p>}
                  rules={rules.type}
                  labelCol={{ span: 6 }}
                  labelAlign="left"
                  className={others ? "mb-0" : ""}
                >
                  {/* <Input
                     type="email"
                     id="email"
                     name="email"
                     placeholder="email"
               
                     className="bg-primary border border-main/20 text-xs w-full placeholder-place font-inter rounded-none h-12"
                  />   */}

                  <Select
                    id="type"
                    placeholder="event type"
                    options={eventTypeOptions}
                    onChange={(e) => onEventTypeChange(e)}
                  ></Select>
                </Form.Item>
                {others ? (
                  <Form.Item
                    name="newType"
                    label={<p className="font-gothic text-lg"></p>}
                    labelCol={{ span: 6 }}
                    labelAlign="left"
                  >
                    <Space.Compact className=" flex w-100">
                      <Input
                        value={formValues.newType}
                        className="bg-primary border border-main/20 text-xs flex-2 w-full placeholder-place font-inter rounded-none h-12"
                        placeholder="Input Event Type"
                      />
                    </Space.Compact>
                  </Form.Item>
                ) : null}
              </>
            )}

            <Form.Item
              name="date"
              label={<p className="font-gothic text-lg">Date</p>}
              rules={rules.date}
              labelCol={{ span: 6, sm: 6 }}
              labelAlign="left"
            >
              <DatePicker
                name="date"
                id="date"
                format="DD-MM-YYYY"
                disabledDate={disabledDate}
                placeholder={"date"}
                onChange={handleDateChange}
                className="bg-primary border text-[#333333] rounded-none border-main/20 text-xs font-inter w-full h-12 custom-picker"
              />
            </Form.Item>
            <Row>
              <Col span={16}>
                <Form.Item
                  name="time"
                  label={<p className="font-gothic text-lg ">Time</p>}
                  rules={rules.time}
                  labelCol={{ span: 9 }}
                  wrapperCol={{ sm: 15 }}
                  labelAlign="left"
                >
                  {eventType ? (
                    <Select
                      id="time"
                      options={eventTimeSlot}
                      placeholder="time"
                    ></Select>
                  ) : (
                    <TimePicker
                      ref={timePickerRef}
                      minuteStep={15}
                      secondStep={10}
                      format={format}
                      showNow={false}
                      disabled={!selectedDate}
                      inputReadOnly={true}
                      disabledTime={disabledTime}
                      changeOnBlur={true}
                      onChange={handleTimeChange}
                      placeholder="00:00"
                      hideDisabledOptions={true}
                      name="time"
                      id="time"
                      className="bg-primary border border-main/20 text-xs rounded-none w-full text-black/30  h-12 font-inter custom-picker "
                    />
                  )}
                </Form.Item>
              </Col>
              <Col span={6} offset={2}>
                <Form.Item
                  name="pax"
                  label={<p className="font-gothic text-lg ">pax</p>}
                  rules={rules.pax}
                  labelCol={{ span: 12 }}
                  wrapperCol={{ span: 8, sm: 12 }}
                  labelAlign="left"
                >
                  <InputNumber
                    name="pax"
                    id="pax"
                    controls={true}
                    min={1}
                    max={eventType ? 70 : 9}
                    placeholder="1"
                    className="bg-primary border border-main/20 text-xs rounded-none w-full text-black/30  py-2 font-inter "
                  />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              name="special"
              label={
                eventType ? (
                  <p className="font-gothic text-lg">Remarks</p>
                ) : (
                  <p className="font-gothic text-lg">
                    Special Requirements
                    <span className="text-xs"> (if any)</span>
                  </p>
                )
              }
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              labelAlign="left"
            >
              <Input.TextArea
                id="special"
                name="special"
                autoSize={{ minRows: 2, maxRows: 6 }}
                className="bg-primary font-inter border placeholder-place border-main/20 text-xs w-full  py-2 rounded-none h-20 "
                placeholder="additional information: (such as dietary requirements, celebration details, special care, etc)"
              />
            </Form.Item>

            <EventTypeNotes eventType={eventType} />

            <div className="flex justify-center md:block">
              {success ? (
                <Alert
                  message="Booking Request Submitted! "
                  description={getAlertDescription()}
                  type="success"
                  showIcon
                />
              ) : error ? (
                <Alert
                  message="Oops..."
                  description="Something went wrong. Please try again later."
                  type="error"
                  showIcon
                />
              ) : (
                <CustomButton
                  title="SUBMIT NOW"
                  htmlType="submit"
                  loading={isLoading}
                />
              )}
            </div>
          </Form>
        </div>

        <div className="flex flex-col  sm:flex-row  md:flex-col mt-7 py-4 space-x-0 sm:space-x-`8  md:space-x-0 w-4/5 md:w-auto ">
          <div className="flex flex-col pb-12 pt-12 sm:pt-0">
            <div className=" sm:order-0  pb-12">
              <CustomH1>Operating Hours </CustomH1>
              <p className="text-lg font-marcellus">Mon - Sun | 10am - 10pm</p>
              <p className="text-lg font-marcellus">Closed on Wednesdays</p>
            </div>
            <div className="">
              <CustomH1>Kitchen Last Call </CustomH1>
              <p className="text-lg font-marcellus">Lunch - 330pm</p>
              <p className="text-lg font-marcellus">Dinner - 930pm</p>
            </div>
          </div>
          <div className="flex flex-col md:order-2 ">
            <CustomH1>Contact Us</CustomH1>

            <div className="flex flex-col space-y-1 pb-12 font-gothic">
              <h5 className="text-lg font-gothic">Mobile</h5>
              <p className="text-[13px]">+60 17 489 1189</p>
            </div>
            <div className="flex flex-col space-y-1 font-gothic">
              <h5 className="text-lg font-gothic">Address</h5>
              <p className="text-[13px]">No. 1-1 (First Floor),</p>
              <p className="text-[13px]">Jalan Anggerik Vanilla BF 31/BF,</p>
              <p className="text-[13px]">Kota Kemuning, 40460 Shah Alam,</p>
              <p className="text-[13px]">Selangor.</p>
            </div>
          </div>
        </div>
      </div>

      <Modal
        className="w-11/12"
        title={
          <div className="bg-[#f5f5ef]">
            <span className="h-full mr-4">
              <ExclamationCircleFilled className="text-[28px] text-yellow-500" />
            </span>
            <span className="align-middle">
              Are you sure about your reservation?
            </span>
          </div>
        }
        centered
        open={modalOpen}
        onOk={handleClose}
        onCancel={handleClose}
      >
        {modalContent}
      </Modal>

      {/* <Modal
        className="w-11/12 "
        title={
          <div className="px-12 text-[30px] bg-[#f5f5ef] py-8  text-main font-marcellus">
            {data?.title}
          </div>
        }
        centered
        open={largeModalOpen}
        width={1000}
        footer={[
          <div className="pb-12  flex justify-center">
            <LocalButton title="CANCEL" onClick={handleCloseLargeModal} />
            <LocalButton title="OK" onClick={handleLargeModalOK} />
          </div>,
        ]}
        onCancel={handleCloseLargeModal}
      >
        <div className="px-12 pb-8 font-inter text-xs sm:text-[17px] leading-5 text-main">
          <PortableText value={data?.body || []} onMissingComponent={false} />
        </div>
      </Modal> */}
    </div>
  )
}

export default ContactSection
