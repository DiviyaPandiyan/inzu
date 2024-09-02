import img_n3 from "./assets/Frame 225.png";
import Image from "next/image";

const CustomurInfo = () => {
  return (
    <>
      <div className="md:px-12 p-4 border-spacing-16 max-w-screen-2xl mx-auto mt-12">
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
  {/* Step Indicator */}
  <div className="flex justify-center items-center mb-4">
          <div className="h-12 w-12 bg-[#ffffff] rounded-full"></div>
          <div className="h-12 w-12 bg-[#ffffff] rounded-full"></div>
          <div className="h-12 w-12 bg-[#D9D9D9] rounded-full text-center flex items-center justify-center mr-24 mt-4">
            3
          </div>
        </div>

        {/* Customer Information Form */}
        <h2 className="font-bold text-center text-[#170F49] mt-6">Customer Information</h2>
        <p className="text-[#6F6C90] text-center text-sm mb-6">
          Please fill the form below to receive a quote for your project. Feel free to add as much detail as needed.
        </p>

        <div className="flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full">
            <form className="space-y-4">
              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email ID
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              {/* Contact Number and Code */}
              <div className="flex gap-4">
                <div className="flex-1">
                  <label
                    htmlFor="contact-code"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Contact Code
                  </label>
                  <select
                    id="contact-code"
                    name="contact-code"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    <option value="" disabled selected>
                      Select contact code
                    </option>
                    <option value="+1">+1 (USA)</option>
                    <option value="+44">+44 (UK)</option>
                    <option value="+91">+91 (India)</option>
                    <option value="+81">+81 (Japan)</option>
                  </select>
                </div>

                <div className="flex-1">
                  <label
                    htmlFor="contact"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    id="contact"
                    name="contact"
                    placeholder="Enter your contact number"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              {/* Alternative Contact */}
              <div className="flex gap-4">
                <div className="flex-1">
                  <label
                    htmlFor="alternative-contact-code"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Alternative Contact Code
                  </label>
                  <select
                    id="alternative-contact-code"
                    name="alternative-contact-code"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    <option value="" disabled selected>
                      Select contact code
                    </option>
                    <option value="+1">+1 (USA)</option>
                    <option value="+44">+44 (UK)</option>
                    <option value="+91">+91 (India)</option>
                    <option value="+81">+81 (Japan)</option>
                  </select>
                </div>

                <div className="flex-1">
                  <label
                    htmlFor="alternative-contact"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Alternative Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="alternative-contact"
                    name="alternative-contact"
                    placeholder="Enter your contact number"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center items-center mt-6">
                <button className="bg-[#283671] text-white font-bold py-2 px-4 rounded-full">
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomurInfo;
