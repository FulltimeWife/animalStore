import "./Product.css";
import { Link } from "react-router-dom";

const Product = () => {
    return <div className="product">
      <img src="" alt=""></img>

      <div className=""product__info>
        <p className="info__name"></p>
        <p className="info__description"></p>
        <p className="info__price">€345.99</p>

        <Link to={`/product/${1111}`} className="info__button"></Link>
      </div>
    </div>
}

export default Product