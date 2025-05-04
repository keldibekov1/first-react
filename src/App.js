import Brands from "./components/brands/Brands";
import HeroSection from "./components/HeroSection/HeroSection";
import LatestProducts from "./components/LatestProducts/LatestProducts";
import Navbar from "./components/navbar/Navbar";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Brands />
      <LatestProducts />


    </>
  );
}

export default App;
