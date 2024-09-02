import Image from "next/image";
import logo from "./assets/image 1.png";
import fb from "./assets/fb.svg"
import insta from "./assets/insta.svg"
import twitter from "./assets/twitter.svg"

export default function Footer() {
  return (
    <div className="bg-[#333333] text-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-4">
        {/* Logo and Main Section */}
        <div className="mb-8 md:mb-0">
          <Image src={logo} alt="Blogo" width={139} height={42} />
          <h1 className="mt-6 text-2xl font-lato font-bold opacity-75">
            Insurance Company in Mauritius
          </h1>
          <p className="mt-4 text-sm font-montserrat opacity-50">
            © 2024-2025 Eagle Insurance
          </p>
        </div>

        {/* Links Section */}
        <div className="mb-8 md:mb-0">
          <h5 className="text-xl font-lato font-bold">Links</h5>
          <ul className="mt-4 space-y-2">
            <li className="opacity-70 text-sm font-montserrat">Home</li>
            <li className="opacity-70 text-sm font-montserrat">Pricing</li>
            <li className="opacity-70 text-sm font-montserrat">About us</li>
            <li className="opacity-70 text-sm font-montserrat">Careers</li>
            <li className="opacity-70 text-sm font-montserrat">Features</li>
            <li className="opacity-70 text-sm font-montserrat">Blog</li>
          </ul>
        </div>

        {/* Services Section */}
        <div className="mb-8 md:mb-0">
          <h5 className="text-xl font-lato font-bold">Services</h5>
          <ul className="mt-4 space-y-2">
            <li className="opacity-70 text-sm font-montserrat">Health Insurance Plans</li>
            <li className="opacity-70 text-sm font-montserrat">Car Insurance</li>
            <li className="opacity-70 text-sm font-montserrat">Investment</li>
            <li className="opacity-70 text-sm font-montserrat">Mediclaim Policy</li>
            <li className="opacity-70 text-sm font-montserrat">Others</li>
            <li className="opacity-70 text-sm font-montserrat">Health Insurance</li>
          </ul>
        </div>

        {/* Address and Social Media Section */}
        <div>
          <h5 className="text-xl font-lato font-bold">Address</h5>
          <p className="mt-4 opacity-75 text-sm font-montserrat">
            15 A5 Wall Street, Mauritius.<br />+230 460 9200
          </p>

          <h5 className="mt-8 text-xl font-lato font-semibold">Social Media</h5>
          <div className="flex gap-4 mt-4">
            <div className="w-6 h-6 bg-white rounded-full flex justify-center items-center">
            {<Image src={insta} alt="Blogo" width={48} height={48} />}
              <span className="bg-black w-6 h-6 block"></span>
            </div>
            <div className="w-6 h-6 bg-white rounded-full flex justify-center items-center">
              {<Image src={fb} alt="Blogo" width={48} height={48} />}
              <span className=" w-6 h-6 block"></span>
            </div>
            <div className="w-6 h-6 bg-white rounded-full flex justify-center items-center">
            {<Image src={twitter} alt="Blogo" width={48} height={48} />}
              <span className="bg-black w-6 h-6 block"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
