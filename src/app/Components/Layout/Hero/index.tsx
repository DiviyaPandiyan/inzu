import Img_car1 from "./assets/Img_car1.png";
import Image from "next/image";
import { Lato } from "next/font/google";
import Divider from "./assets/Divider.png";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });
const Hero = () => {
  return (
    <div className="md:px-12 px-4 border-spacing-16 max-w-screen-2xl mx-auto mt-12">
      <div className="bg-[#FFF2EB] rounded-xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-10 p-4">
          {/* Banner Content */}
          <div className="md:w-3/5">
            <h1 className="text-2xl md:text-4xl font-bold ml-0 md:ml-4">
              Home Insurance Full Quote Journey
            </h1>
            <p className="text-sm md:text-base text-gray-my ml-0 md:ml-4 mt-2 md:mt-4">
              Embarking on your motor full quote journey: Navigating the road to comprehensive coverage
            </p>
          </div>
          {/* Banner Image */}
          <div className="flex justify-center md:justify-end">
            <Image src={Img_car1} alt="Car Image" width={270} height={149} />
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className="flex justify-center mt-6">
        <Image src={Divider} alt="Divider" width={700} height={2} />
      </div>
    </div>
  );
};

export default Hero;
