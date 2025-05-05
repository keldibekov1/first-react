import "./reviews.css";
import hamza from "./avatar.jpg"; 

const reviews = [
  {
    name: "Hamza Faizi",
    img: hamza,
    text: "Don’t waste time, just order! This is the best website to puschase smart watches.",
  },
  {
    name: "Hafiz Huzaifa",
    img: hamza,
    text: "I’ve been purchasing smart watches of Mohid for a long time. All the products are good quality.",
  },
];

const Reviews = () => {
  return (
    <div className="reviews">
      <div className="reviews-container">
        <p className="review-subtitle">Here are our some of the best clients.</p>
        <h2 className="review-title">What People Say About Us</h2>
        <div className="review-cards">
          {reviews.map((review, i) => (
            <div className="review-card" key={i}>
              <img src={review.img} alt={review.name} />
              <div className="review-content">
                <h3>{review.name}</h3>
                <p>{review.text}</p>
                <div className="rating">★★★★★</div>
              </div>
            </div>
          ))}
        </div>
        <div className="dots">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={`dot ${i === 4 ? "active" : ""}`}></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
