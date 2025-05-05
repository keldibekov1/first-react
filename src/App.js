import Brands from "./components/brands/Brands";
import Footer from "./components/footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import LatestProducts from "./components/LatestProducts/LatestProducts";
import Navbar from "./components/navbar/Navbar";
import Newsletter from "./components/Newsletter/Newsletter";
import Reviews from "./components/reviews/Reviews";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Brands />
      <LatestProducts />
      <Reviews/>
      <Newsletter/>
      <Footer/>


    </>
  );
}

export default App;
