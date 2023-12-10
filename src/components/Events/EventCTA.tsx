import Button from "@/components/Button";
import { EventModel, ModalModel } from "@/types/Event";
import handleNullData from "@/utils/handleNullData";
import CustomH1 from "../StyleComponents/CustomH1";
import DescContainer from "../StyleComponents/DescContainer";
import { Modal } from "antd";
import LocalButton from "@/components/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { PortableText } from "@portabletext/react";

type Props = { data: EventModel | null; modal: ModalModel | null };

const EventCTA = ({ data, modal }: Props) => {
  const [largeModalOpen, setLargeModalOpen] = useState(false);

  handleNullData(data);

  const handleOpen = () => {
    setLargeModalOpen(true);
  };

  const handleClose = () => {
    setLargeModalOpen(false);
  };

  return (
    <section className="w-screen flex flex-col justify-center items-center py-20 ">
      <div className="text-center  flex flex-col items-center space-y-4 pb-8 text-main max-w-[665px] w-4/5">
        <CustomH1>{data?.sectionOne?.title}</CustomH1>
        <DescContainer>{data?.sectionOne?.desc}</DescContainer>
      </div>
      <div className=" flex justify-center gap-x-6">
        <Button
          title={data?.sectionOne?.callToAction?.buttonText || ""}
          onClick={handleOpen}
        />
      </div>

      <Modal
        className="w-11/12 "
        title={
          <div className="px-12 text-[30px] bg-[#f5f5ef] py-8  text-main font-marcellus">
            {modal?.title}
          </div>
        }
        centered
        open={largeModalOpen}
        width={1000}
        onCancel={handleClose}
        footer={[
          <div className="pb-12 pt-8 flex justify-center">
            <Link to="https://wa.me/60174891189" target="_blank">
              <LocalButton title="WHATSAPP US NOW" />
            </Link>
          </div>,
        ]}
      >
        <div className="font-inter text-xs sm:text-[17px] leading-5 text-main px-12 ">
          <PortableText value={modal?.body || []} onMissingComponent={false} />
        </div>
      </Modal>
    </section>
  );
};

export default EventCTA;
