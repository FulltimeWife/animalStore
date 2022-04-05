import "./Product.css";
import { Link } from "react-router-dom";

const Product = () => {
    return <div className="product">
      <img src="https://i.imgur.com/ElxAyoL.png" alt="sleepy panda"></img>

      <div className="product__info">
        <p className="info__name">Sleepy Panda</p>
        <p className="info__description">He's just a lil snoozer</p>
        <p className="info__price">€345.99</p>

        <Link to={`/product/${1}`} className="info__button"></Link>
      </div>
    </div>
}

export default Product;