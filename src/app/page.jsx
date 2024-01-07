import AboutUs from "@/components/main/AboutUs";
import CocktailMenu from "@/components/main/CocktailMenu";
import ImageSec from "@/components/main/ImageSec";

const { default: Header } = require("@/components/navbar/Header")

const Home = () => {
  return (
    <>
      <Header/>
      <AboutUs/>
      <ImageSec/>
      <CocktailMenu/>
    </>
  )
}

export default Home;