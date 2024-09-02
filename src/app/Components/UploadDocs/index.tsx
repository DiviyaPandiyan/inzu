import img_n4 from "./assets/num4.svg";
import Image from "next/image";

const UploadDocs = () => {
  return (
    <>
      <div className="md:px-12 p-4 border-spacing-16 max-w-screen-2xl mx-auto mt-12">
        {/* Gradient Header */}
        <div className="bg-gradient-to-r from-[#35B6B4] to-[#283671] rounded-xl p-6 md:p-10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex-grow flex justify-end md:justify-start">
                <Image src={img_n4} alt="Banner Image" width={100} height={100} className="w-auto h-auto object-cover" />
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
            {/* Step Indicator */}
        <div className="flex justify-center items-center mb-4">
          <div className="h-12 w-12 bg-[#ffffff] rounded-full"></div>
          <div className="h-12 w-12 bg-[#ffffff] rounded-full"></div>
          <div className="h-12 w-12 bg-[#D9D9D9] rounded-full text-center flex items-center justify-center mr-24 mt-5">
            4
          </div>
        </div>
        {/* Section Title */}
        <h2 className="font-bold text-center text-[#170F49] mt-6">Upload Document</h2>
        <p className="text-[#6F6C90] text-center text-sm mb-6">
          Please fill the form below to receive a quote for your project. Feel free to add as much detail as needed.
        </p>

        <div className="flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full">
            <form className="space-y-4">
              {/* Document Type and Upload Image */}
              <div className="flex gap-4">
                {/* Document Type Dropdown */}
                <div className="flex-1">
                  <label
                    htmlFor="document-type"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Document Type
                  </label>
                  <select
                    id="document-type"
                    name="document-type"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    <option value="" disabled selected>
                      Select document type
                    </option>
                    <option value="passport">Passport</option>
                    <option value="id-card">ID Card</option>
                    <option value="driver-license">Driver License</option>
                  </select>
                </div>

                {/* Upload Image Button */}
                <div className="flex-1">
                  <label
                    htmlFor="upload-image"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Upload Image
                  </label>
                  <button
                    type="button"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm bg-transparent text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    Choose Image
                  </button>
                </div>
              </div>

              {/* Another Set of Document Type and Upload Image */}
              <div className="flex gap-4">
                {/* Document Type Dropdown */}
                <div className="flex-1">
                  <label
                    htmlFor="alternative-document-type"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Document Type
                  </label>
                  <select
                    id="alternative-document-type"
                    name="alternative-document-type"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    <option value="" disabled selected>
                      Select document type
                    </option>
                    <option value="passport">Passport</option>
                    <option value="id-card">ID Card</option>
                    <option value="driver-license">Driver License</option>
                  </select>
                </div>

                {/* Upload Image Button */}
                <div className="flex-1">
                  <label
                    htmlFor="alternative-upload-image"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Upload Image
                  </label>
                  <button
                    type="button"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm bg-transparent text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    Choose Image
                  </button>
                </div>
              </div>

              {/* Third Set of Document Type and Upload Image */}
              <div className="flex gap-4 mt-4">
                {/* Document Type Dropdown */}
                <div className="flex-1">
                  <label
                    htmlFor="third-document-type"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Document Type
                  </label>
                  <select
                    id="third-document-type"
                    name="third-document-type"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    <option value="" disabled selected>
                      Select document type
                    </option>
                    <option value="passport">Passport</option>
                    <option value="id-card">ID Card</option>
                    <option value="driver-license">Driver License</option>
                  </select>
                </div>

                {/* Upload Image Button */}
                <div className="flex-1">
                  <label
                    htmlFor="third-upload-image"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Upload Image
                  </label>
                  <button
                    type="button"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm bg-transparent text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    Choose Image
                  </button>
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

export default UploadDocs;