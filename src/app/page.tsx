
import NavBar from "./Components/Layout/NavBar";
import Hero from "./Components/Layout/Hero";
import ContentPage from "./Components/Content";
import CoverPage from "./Components/CoverPage"
import CustomurInfo from "./Components/CustomurInfo"
import FormPage from "./Components/FormPage"
import UploadDocs from "./Components/UploadDocs"
import Footer from "./Components/Footer/index"


export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <ContentPage/>
      <CoverPage />
      <FormPage />
      <CustomurInfo />
      <UploadDocs/>
      <Footer/>
      
    </>
  );
}
