import './ProductScreen.css';

const ProductScreen = () => {
    return (
        <div className="productscreen">
            <div className="productscreen__left">
                <div className="productscreen__left__image">
                    <img src="https://i.imgur.com/ElxAyoL.png" alt="sleepy panda"></img>
                </div>
                <div className="productscreen__left__info">
                    <p className="productscreen__left__name">Sleepy Panda</p>
                    <p className="productscreen__left__price">€999.99</p>
                    <p className="productscreen__left__description"> He's just a lil snoozer</p>
                </div>
            </div>

            <div className="productscreen__right">
                <div className="productscreen__right__info">
                    <p className="productscreen__right__price">
                        Price: <span>€999.99</span>
                    </p>
                    <p className="productscreen__right__stock">
                        In Stock: <span>10</span>
                    </p>
                    <p className="productscreen__right__quantity">
                        Quantity
                        <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </p>
                    <p className="productscreen__right__button">
                        <button type="button">Add to Cart</button>
                    </p>
                </div>

            </div>
        </div>
    )
}

export default ProductScreen

