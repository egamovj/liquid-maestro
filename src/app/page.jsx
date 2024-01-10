import Footer from "@/components/footer/Footer";
import AboutUs from "@/components/main/AboutUs";
import CocktailMenu from "@/components/main/CocktailMenu";
import Contact from "@/components/main/Contact";
import ImageSec from "@/components/main/ImageSec";

const { default: Header } = require("@/components/navbar/Header")

const Home = () => {
  return (
    <>
      <Header/>
      <AboutUs/>
      <ImageSec/>
      <CocktailMenu/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Home;