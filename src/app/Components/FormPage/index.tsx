// pages/forms.js
import Image from "next/image";
import img_n3 from "./assets/Frame 225.png";
import line from "./assets/Line 270.png";
import house from "./assets/house.png";
import line2 from "./assets/Line 267.png";

const FormsPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center px-4 md:px-0">
        <div className="max-w-4xl w-full bg-white">
          <Image
            src={img_n3}
            alt="a3"
            width={20}
            height={20}
            className="w-auto h-auto object-cover ml-16 md:ml-4 mt-6"
          />

          <h1 className="text-4xl md:text-2xl font-bold ml-4 mt-4 text-[#170F49] md:justify-between">
            Building Details
          </h1>
          <p className="text-sm md:text-xs text-[#6F6C90] ml-4 mt-4 mb-2 mr-3">
            Please fill the form below to receive a quote for your project.
            <br />
            Feel free to add as much detail as needed.
          </p>
          <Image src={line} alt="" width={445} className="mt-4 mb-4 mx-auto md:mx-0" />

          <div className="flex items-center">
            <Image
              src={house}
              alt=""
              width={87.5}
              height={70}
              className="w-auto h-auto object-cover ml-16"
            />
            <h2 className="text-[#0C7BC4] ml-4">Premium Details</h2>
          </div>

          <div className="flex flex-col md:flex-row gap-8 mt-4">
            {/* First Form */}
            <div className="flex-1 bg-[#F6FFFE] p-6 rounded-lg shadow-lg">
              <form>
                <div className="flex justify-between">
                  <label className="text-sm font-medium text-gray-700">Location 1</label>
                  <label className="text-sm font-medium text-gray-700">$240</label>
                </div>

                <div className="flex justify-between mt-4">
                  <label className="text-sm font-medium text-gray-700">Location 2</label>
                  <label className="text-sm font-medium text-gray-700">$240</label>
                </div>

                <div className="flex justify-between mt-4">
                  <label className="text-sm font-medium text-[#4F4F4F]">Taxes</label>
                </div>

                <div className="flex justify-between mt-4">
                  <label className="text-sm font-medium text-[#4F4F4F]">Discount</label>
                </div>

                {/* Horizontal Line */}
                <div className="border-b border-gray-300 my-4"></div>

                <div className="flex justify-between">
                  <label className="text-sm font-bold text-[#112211]">Total Fee</label>
                  <label className="text-sm font-medium text-gray-700">$0</label>
                </div>
              </form>
            </div>

            {/* Second Form */}
            <div className="flex flex-col items-center justify-center p-6">
              <form className="space-y-6 w-full max-w-md">
                {/* Tags */}
                <div className="flex gap-4 justify-center mb-4">
                  <div className="rounded-full bg-[#41DDB2] px-4 py-2 text-sm text-white">
                    Port Louis 11611, Mauritius
                  </div>
                  <div className="rounded-full bg-white text-[#0C7BC4] border border-slate-700 px-4 py-2 text-sm">
                    Balisson, Mauritius
                  </div>
                </div>

                {/* Sum Insured Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">
                    Sum Insured
                  </label>
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-blue-500">
                    <input
                      type="text"
                      name="sum-insured"
                      id="sum-insured"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                      placeholder="Type your sum insured"
                    />
                  </div>
                </div>

                {/* Dropdowns */}
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full">
                    <label className="block text-sm font-medium text-gray-900 mb-1">
                      Dwelling Type
                    </label>
                    <select
                      id="country1"
                      className="bg-white shadow-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    >
                      <option selected>Choose a Type</option>
                      <option value="US">A</option>
                      <option value="CA">B</option>
                      <option value="FR">C</option>
                      <option value="DE">D</option>
                    </select>
                  </div>
                  <div className="w-full">
                    <label className="block text-sm font-medium text-gray-900 mb-1">
                      Construction Type
                    </label>
                    <select
                      id="country2"
                      className="bg-white shadow-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    >
                      <option selected>Choose a Type</option>
                      <option value="US">A</option>
                      <option value="CA">B</option>
                      <option value="FR">C</option>
                      <option value="DE">D</option>
                    </select>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                  <button className="bg-[#283671] text-white font-bold py-2 px-4 rounded-full mt-6">
                    Save & Next
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Line and Second Section */}
      <div className="flex items-center justify-center mt-8">
        <Image src={line2} alt="" width={6} height={1} className="object-cover mx-auto md:ml-60" />
      </div>

      <div className="max-w-4xl w-full bg-white mt-8">
        <Image
          src={img_n3}
          alt=""
          width={20}
          height={20}
          className="w-auto h-auto object-cover mx-auto md:ml-48"
        />
      </div>

      <div className="flex flex-col items-center justify-center mt-8 px-4 md:px-0">
        <div className="max-w-4xl w-full bg-white">
          <h1 className="text-4xl md:text-2xl font-bold ml-4 text-[#170F49]">
            Content Details
          </h1>
          <p className="text-sm md:text-xs text-[#6F6C90] ml-4 mt-4 mb-2 mr-3">
            Please fill the form below to receive a quote for your project.
            <br />
            Feel free to add as much detail as needed.
          </p>
          <Image src={line} alt="" width={445} className="mt-4 mb-4 mx-auto md:mx-0" />

          <div className="flex items-center">
            <Image
              src={house}
              alt=""
              width={87.5}
              height={70}
              className="w-auto h-auto object-cover ml-16"
            />
            <h2 className="text-[#0C7BC4] ml-4">Premium Details</h2>
          </div>

          <div className="flex flex-col md:flex-row gap-8 mt-4">
            {/* First Form */}
            <div className="flex-1 bg-[#F6FFFE] p-6 rounded-lg shadow-lg">
              <form>
                <div className="flex justify-between">
                  <label className="text-sm font-medium text-gray-700">Location 1</label>
                  <label className="text-sm font-medium text-gray-700">$240</label>
                </div>

                <div className="flex justify-between mt-4">
                  <label className="text-sm font-medium text-gray-700">Location 2</label>
                  <label className="text-sm font-medium text-gray-700">$240</label>
                </div>

                <div className="flex justify-between mt-4">
                  <label className="text-sm font-medium text-[#4F4F4F]">Taxes</label>
                </div>

                <div className="flex justify-between mt-4">
                  <label className="text-sm font-medium text-[#4F4F4F]">Discount</label>
                </div>

                {/* Horizontal Line */}
                <div className="border-b border-gray-300 my-4"></div>

                <div className="flex justify-between">
                  <label className="text-sm font-bold text-[#112211]">Total Fee</label>
                  <label className="text-sm font-medium text-gray-700">$0</label>
                </div>
              </form>
            </div>

            {/* Second Form */}
            <div className="flex flex-col items-center justify-center p-6">
              <form className="space-y-6 w-full max-w-md">
                {/* Tags */}
                <div className="flex gap-4 justify-center mb-4">
                  <div className="rounded-full bg-[#41DDB2] px-4 py-2 text-sm text-white">
                    Port Louis 11611, Mauritius
                  </div>
                  <div className="rounded-full bg-white text-[#0C7BC4] border border-slate-700 px-4 py-2 text-sm">
                    Balisson, Mauritius
                  </div>
                </div>

                {/* Sum Insured Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">
                    Sum Insured
                  </label>
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-blue-500">
                    <input
                      type="text"
                      name="sum-insured"
                      id="sum-insured"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                      placeholder="Type your sum insured"
                    />
                  </div>
                </div>

                {/* Dropdowns */}
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full">
                    <label className="block text-sm font-medium text-gray-900 mb-1">
                      Dwelling Type
                    </label>
                    <select
                      id="country1"
                      className="bg-white shadow-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    >
                      <option selected>Choose a Type</option>
                      <option value="US">A</option>
                      <option value="CA">B</option>
                      <option value="FR">C</option>
                      <option value="DE">D</option>
                    </select>
                  </div>
                  <div className="w-full">
                    <label className="block text-sm font-medium text-gray-900 mb-1">
                      Construction Type
                    </label>
                    <select
                      id="country2"
                      className="bg-white shadow-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    >
                      <option selected>Choose a Type</option>
                      <option value="US">A</option>
                      <option value="CA">B</option>
                      <option value="FR">C</option>
                      <option value="DE">D</option>
                    </select>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                  <button className="bg-[#283671] text-white font-bold py-2 px-4 rounded-full mt-6">
                    Save & Next
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormsPage;
