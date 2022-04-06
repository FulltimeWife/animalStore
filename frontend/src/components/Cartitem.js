import "./Cartitem.css";
import { Link } from "react-router-dom";

const Cartitem = () => {
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img src="https://i.imgur.com/ElxAyoL.png" alt="sleepy panda"></img>
      </div>
      <Link to={`/product/${1}`} className="cartitem__name">
        <p> Sleepy Panda </p>
      </Link>
      <p className="cartitem__price">€999.99</p>

      <select className="cartitem__select">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <button className="cartitem__deletebutton">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  )
}

export default Cartitem;