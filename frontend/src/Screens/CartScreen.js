import './CartScreen.css';

import Cartitem from "../components/Cartitem";

const CartScreen = () => {
    return (
        <div className="cartscreen">
            <div className="cartscreen__left">
                <h2> Shopping Cart</h2>

                <Cartitem />
                <Cartitem />
                <Cartitem />
                <Cartitem />
                <Cartitem />
            </div>
            <div className="cartscreen__right">
                <div className="cartscreen__right__info">
                    <p className="cartscreen__right__totalitems"> 0 Items</p>
                    <p className="cartscreen__right__subtotal">€999.99</p>
                </div>
                <div className="cartscreen__right__button">
                    <button>Checkout</button>
                </div>
            </div>

        </div>
    )
}

export default CartScreen;