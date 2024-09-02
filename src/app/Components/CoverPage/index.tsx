import Image from "next/image";
import img1 from "./assets/Insurance Car (1).svg";
import img2 from "./assets/Insurance Car (2).svg";
import img3 from "./assets/Insurance Car (3).svg";
import img4 from "./assets/Insurance Car.svg";
import img_n3 from "./assets/pngegg (1).png";

const CoverPage = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-10 px-4 md:px-12">
        {/* Step Indicator */}
        <div className="flex justify-center items-center mb-4">
          <div className="h-12 w-12 bg-[#ffffff] rounded-full"></div>
          <div className="h-12 w-12 bg-[#ffffff] rounded-full"></div>
          <div className="h-12 w-12 bg-[#D9D9D9] rounded-full text-center flex items-center justify-center mr-24">
            2
          </div>
        </div>

        {/* Content Section */}
        <div className="text-center">
          <h2 className="font-bold text-[#170F49] mb-4">Select your Cover</h2>
          <p className="text-[#6F6C90] text-sm mb-6">
            Please fill the form below to receive a quote for your project. Feel free to add as much detail as needed.
          </p>

          {/* Location Selection */}
          <div className="flex flex-col items-center">
            <div className="flex flex-col md:flex-row gap-2 mt-4">
              <div className="rounded-full bg-[#41DDB2] px-4 py-2 text-center">
                MU, 2 St François Xavier St, Port Louis 11611, Mauritius
              </div>
              <div className="rounded-full bg-white text-[#0C7BC4] border border-slate-700 px-4 py-2 text-center">
                2 St François Xavier Balisson, Mauritius
              </div>
            </div>

            {/* Checkbox Options */}
            <div className="flex flex-col md:flex-row gap-2 mt-6">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                <span>Yes, I’m Owner</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                <span>No, I’m Tenant</span>
              </label>
            </div>

            {/* Sum Insured Input */}
            <div className="flex flex-col items-center p-4 mt-8 w-full">
              <div className="flex flex-col items-start w-full">
                <label className="text-gray-700 text-sm font-bold mb-2">
                  Sum Insured <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="number-input"
                  className="border-b border-gray-300 focus:border-blue-500 outline-none px-3 py-2 w-full text-sm font-bold placeholder-blue-500"
                  placeholder="Enter a number"
                  required
                />
              </div>
            </div>

            {/* Image Grid */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Image src={img1} alt="" width={120} height={80} className="h-32 w-auto object-cover" />
              <Image src={img2} alt="" width={120} height={80} className="h-32 w-auto object-cover" />
              <Image src={img3} alt="" width={120} height={80} className="h-32 w-auto object-cover" />
              <Image src={img4} alt="" width={120} height={80} className="h-32 w-auto object-cover" />
            </div>

            {/* Continue Button */}
            <button className="bg-[#283671] text-white font-bold py-2 px-4 rounded-full mt-10">
              Continue
            </button>
          </div>
        </div>

        {/* Footer Section */}
        <div className="w-full max-w-screen-2xl mt-12">
          <div className="bg-gradient-to-r from-[#35B6B4] to-[#283671] rounded-xl p-6 md:p-10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex-grow flex justify-end md:justify-start">
                <Image src={img_n3} alt="Banner Image" width={100} height={100} className="w-auto h-auto object-cover" />
              </div>
              <div className="md:w-3/5 text-center md:text-left">
                <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">
                  Fill the Building Details Here
                </h1>
                <p className="text-xs md:text-sm text-[#D9D9D9]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
              <div className="mt-6 md:mt-0">
                <button className="bg-[#E5DD18] text-black font-semibold text-lg py-2 px-8 rounded-full">
                  Continue...
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoverPage;
