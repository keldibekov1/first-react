import "./hero.css";
import heroimg from "./hero.png";

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="container hero-content">
        <div className="left">
          <h1>
            Discover <br /> Most Suitable Watches
          </h1>
          <p>
            Find the best, reliable, and cheap smart watches here. <br />
            We focus on product quality. Here you can find smart watches of almost all brands.
            So why you are waiting? Just order now!
          </p>
          <div className="search-box">
            <input type="text" placeholder="Find the best brands" />
            <button>Search</button>
          </div>
        </div>
        <div className="right">
          <img src={heroimg} alt="Smart Watch" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
