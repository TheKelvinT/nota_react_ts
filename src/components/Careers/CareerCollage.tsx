import CareerCollageOne from "@/assets/career1.png";
import CareerCollageTwo from "@/assets/career2.png";
import CareerCollageThree from "@/assets/career3.png";
import CareerCollageFour from "@/assets/career4.png";
import CareerCollageFive from "@/assets/career5.png";
import CareerCollageSix from "@/assets/career6.png";
import CareerCollageSeven from "@/assets/career7.png";
import CareerCollageEight from "@/assets/career8.png";
import CareerCollageNine from "@/assets/career9.png";
type Props = {};

const CareerCollage = (props: Props) => {
  return (
    <section className="mx-auto">
      <div className="flex justify-center gap-1.5 ">
        <div className="flex flex-col gap-2">
          <div className="flex gap-x-1.5 ">
            <div>
              <img
                src={CareerCollageOne}
                alt="career-img"
                className="object-cover"
              />
            </div>

            <div>
              <img
                src={CareerCollageTwo}
                alt="career-img"
                className="object-cover"
              />
            </div>

            <div>
              <img
                src={CareerCollageThree}
                alt="career-img"
                className="object-cover"
              />
            </div>

            <div>
              <img
                src={CareerCollageFour}
                alt="career-img"
                className="object-cover "
              />
            </div>
          </div>
          <div className="flex gap-x-1.5 h-full w-full">
            <div>
              <img
                src={CareerCollageFive}
                alt="career-img"
                className="object-cover"
              />
            </div>
            <div>
              <img
                src={CareerCollageSix}
                alt="career-img"
                className="object-cover"
              />
            </div>
            <div>
              <img
                src={CareerCollageSeven}
                alt="career-img"
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="hidden sm:flex flex-col gap-y-1.5">
          <div>
            <img
              src={CareerCollageEight}
              alt="career-img"
              className="object-cover"
            />
          </div>
          <div>
            <img
              src={CareerCollageNine}
              alt="career-img"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerCollage;
