import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({name, description, price, productImageUrl, productId }) => {
    return <div className="product">
      <img src={productImageUrl} alt={name}></img>

      <div className="product__info">
        <p className="info__name">{name}</p>
        <p className="info__description">{description}</p>
        <p className="info__price">Price: €{price}</p>

        <Link to={`/product/${productId}`} className="info__viewbutton">Purchase</Link> 
        <Link to={`/cart/`} className="info__cartbutton"> <i className="fas fa-shopping-cart"></i> Add to Cart </Link>
        
      </div>
    </div>
}

export default Product;