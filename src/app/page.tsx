
import NavBar from "./Components/Layout/NavBar";
import Hero from "./Components/Layout/Hero";
import ContentPage from "./Components/Content";
import CoverPage from "./Components/CoverPage"


export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <ContentPage/>
      <CoverPage />
    </>
  );
}
