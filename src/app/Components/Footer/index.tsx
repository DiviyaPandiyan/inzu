import Image from "next/image";
import footer from "./assets/Footer (10).png";

const Footer = () => {
  return (
    <footer className="relative w-full h-[200px] md:h-[300px]"> {/* Adjust the height for responsiveness */}
      <Image
        src={footer}
        alt="Footer"
        layout="fill" // This makes the image fill the container
        objectFit="cover" // Ensures the image covers the area without stretching
        quality={100} // Set the quality of the image
        priority // Load the image with high priority for better performance
        className="w-full h-full"
      />
    </footer>
  );
};

export default Footer;
