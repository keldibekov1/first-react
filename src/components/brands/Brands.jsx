import "./brands.css";
import aplleimg from "./apple.png";

const Brands = () => {
    return (
      <div className="brands">
        <div className="container brand-list">
          <div className="brand-card">
            <img src={aplleimg} alt="Apple" />
            <div className="brand-text">
              <h3>Apple</h3>
              <p>Apple is one of the most famous smart watches providing company.</p>
            </div>
          </div>
          <div className="brand-card">
            <img src={aplleimg} alt="Xiaomi" />
            <div className="brand-text">
              <h3>Xiaomi</h3>
              <p>Xiaomi smart watches are produced by MI company.</p>
            </div>
          </div>
          <div className="brand-card">
            <img src={aplleimg} alt="Fitbit" />
            <div className="brand-text">
              <h3>FitBit</h3>
              <p>Fitbit smart watches are best for their health and fitness features.</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

export default Brands;
