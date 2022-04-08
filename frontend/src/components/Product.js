import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({name, description, price, productInStockCount, productImageUrl, productId }) => {
    return <div className="product">
      <img src={productImageUrl} alt={name}></img>

      <div className="product__info">
        <p className="info__name">{name}</p>
        <p className="info__description">{description}</p>
        <p className="info__instock">Left in Stock: {productInStockCount}</p>
        <p className="info__price">€{price}</p>
        
        <Link to={`/product/${productId}`} className="info__viewbutton">View Product</Link>         
      </div>
    </div>
}

export default Product;