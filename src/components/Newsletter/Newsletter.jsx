import "./Newsletter.css";
import news from "./news.png";



const Newsletter = () => {
  return (
<div className="newsletter">
  <div className="container">
    <div className="newsletter-content">
      <h1>Subscribe to our Newsletter</h1>
      <p>Get free guide about smart watches daily. </p>
      <div className="news-search-box">
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
    </div>
    <div className="right">
      <img src={news} alt="Smart Watch" />
    </div>
  </div>
</div>

  );
}

export default Newsletter;