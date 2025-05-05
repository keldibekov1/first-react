import "./products.css";
import apple1 from "./apple1.png";


const products = [
  { name: "Apple Smart I", price: 255, oldPrice: 300, img: apple1 },
  { name: "Apple Smart II", price: 255, oldPrice: 300, img: apple1 },
  { name: "Apple Smart III", price: 255, oldPrice: 300, img: apple1 },
  { name: "Apple Smart IV", price: 399, oldPrice: 450, img: apple1 },
  { name: "Samsung Watch Pro", price: 255, oldPrice: 300, img: apple1 },
  { name: "Fitbit Max 1", price: 155, oldPrice: null, img: apple1 },
];

const LatestProducts = () => {
  return (
    <div className="products">
      <div className="products-container">
        <p className="subtitle">Find your favourite smart watch.</p>
        <h2 className="title">Our Latest Products</h2>
        <div className="product-grid">
          {products.map((product, i) => (
            <div className="product-card" key={i}>
              
              <img src={product.img} alt={product.name} />
              <h3>{product.name}</h3>
              <div className="rating">★★★★★</div>
              <div className="price">
                {product.oldPrice && <span className="old">${product.oldPrice.toFixed(2)}</span>}
                <span>${product.price.toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="view-more">
          <button>View More</button>
        </div>
      </div>
    </div>
  );
};

export default LatestProducts;
