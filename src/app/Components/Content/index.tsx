import Image from "next/image";
import RightImg from "./assets/Right Image.png";
import LeftImg from "./assets/Left Image.png";
import frame2 from "./assets/Frame 24.png";
import line2 from "./assets/Line 267.png";

const ContentPage = () => {
  return (
    <>
      <div className="px-4 md:px-12 mt-12 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-6 grid-flow-row-dense gap-5">
          {/* Left Image */}
          <Image
            src={LeftImg}
            alt="Left Image"
            width={270}
            height={149}
            className="col-span-2 md:col-span-2 row-span-2 h-full object-cover"
          />

          {/* Form Section */}
          <div className="col-span-1 md:col-span-2 flex flex-col items-center">
            <div className="flex justify-center items-center">
              <div className="h-12 w-12 bg-[#65BF73] text-center rounded-full flex items-center justify-center text-white">
                1
              </div>
            </div>

            <h2 className="font-bold text-center text-[#170F49] mt-6">
              Select your Location
            </h2>
            <p className="text-[#6F6C90] text-center text-sm mt-2">
              Please fill the form below to receive a quote for your project.
              Feel free to add as much detail as needed.
            </p>

            <form className="max-w-sm w-full mt-6">
              <label
                className="block mb-2 text-sm font-medium text-gray-900"
                htmlFor="countries"
              >
                Search your location here
              </label>
              <select
                id="countries"
                className="bg-[#FFFFFF] shadow-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option defaultValue>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </form>

            <div className="flex justify-center items-center mt-16">
              <button className="bg-[#283671] text-white font-bold py-2 px-4 rounded-full">
                Continue
              </button>
            </div>
          </div>

          {/* Right Image */}
          <Image
            src={RightImg}
            alt="Right Image"
            width={270}
            height={149}
            className="col-span-2 md:col-span-2 h-full object-cover"
          />
        </div>
      </div>

      {/* Divider Line */}
      <div className="flex justify-center mt-6">
        <Image src={line2} alt="Divider Line" width={6} height={1} className="object-cover" />
      </div>
    </>
  );
};

export default ContentPage;
