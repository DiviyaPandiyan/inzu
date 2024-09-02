import Image from "next/image";
import footer from "./assets/Footer (10).png";

const Footer = () => {
  return (
    <footer className="relative w-full h-[300px]"> {/* Adjust the height as needed */}
      <Image
        src={footer}
        alt="Footer"
        layout="fill" // This will make the image fill the container
        objectFit="cover" // Ensures the image covers the area without stretching
        className="w-full h-full"
      />
    </footer>
  );
};

export default Footer;
