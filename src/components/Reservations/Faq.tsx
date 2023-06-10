import Button from "@/components/Button";
import { FaqModel } from "@/types/Reservations";
import handleNullData from "@/utils/handleNullData";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import CustomH1 from "../StyleComponents/CustomH1";

type Props = { faq: FaqModel | null };

export default function Faq({ faq }: Props) {
handleNullData(faq)
  return (
    <div className="mb-28 max-w-[1920px] mx-auto">
      <div>
        <div className="mx-auto w-11/12 md:w-4/5 lg:w-7/12 text-main leading-9 ">
          <div className="text-center pb-12 pt-24 sm:py-24">
          <CustomH1 >
            Frequently Asked Questions [FAQ]
          </CustomH1>
          </div>
          {faq?.map(
            (faqs:any) => (
              <div key={faqs._id} className="space-y-8 hidden md:block ">
                <div className="text-[13px]">
                  <h6 className=" font-bold ">{faqs.question}</h6>
                  <div className=" leading-9">{faqs.answer}</div>
                </div>
              </div>
            )
          )}
        </div>
        <div className="md:flex justify-center pt-24 hidden ">
          <Button title="BOOK A TABLE" path="#book"/>
        </div>

        <div className="mx-auto w-11/12 md:w-4/5 lg:w-7/12 block md:hidden">
          <div className="accordion-wrapper ">
            <Accordion className="w-full text-main " allowMultiple>
              {faq?.map(
                (faq:any) => (
                  <AccordionItem
                    key={faq._id}
                    className="border-b border-gray-200 text-[13px] py-[17px]"
                  >
                    <AccordionButton className="flex justify-between ">
                      <h6 className="text-left font-bold  font-inter leading-7  ">
                        {faq.question}
                      </h6>
                      <AccordionIcon className="text-left" />
                    </AccordionButton>

                    <AccordionPanel
                      className="text-left mt-2 leading-7"
                      pb={4}
                    >
                      <p>{faq.answer}</p>
                    </AccordionPanel>
                  </AccordionItem>
                )
              )}
            </Accordion>
          </div>
          <div className="flex justify-center pt-12">
            <Button title="BOOK A TABLE" path="#book" />
          </div>
        </div>
      </div>
    </div>
  );
}
