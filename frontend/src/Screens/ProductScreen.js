import './ProductScreen.css';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";

import { getProductDetails } from "../redux/actions/productActions";
import { addToCart } from '../redux/actions/cartActions';

const ProductScreen = ({history}) => {
    const [quantity, setQty] = useState(1);
    const dispatch = useDispatch();

    const productDetails = useSelector((state) => state.getProductDetails);
    const { loading, error, product } = productDetails;

    let { id } = useParams()

    useEffect(() => {
        console.log(`getProductDetails: ${JSON.stringify(dispatch(getProductDetails(id)))}`)
        console.log(`Product: ${JSON.stringify(productDetails)}`)
        if(product && id !== product._id) {
            dispatch(getProductDetails(id))
        }
    }, [])

    const addToCartHandler = () => {
        dispatch(addToCart(product._id, quantity));
        history.push(`/cart`);
    };
    
    return (
        <div className="productscreen">
            
            <div className="productscreen__left">
                <div className="productscreen__left__image">
                    <img src={product.productImageUrl} alt={product.name}></img>
                </div>
                <div className="productscreen__left__info">
                    <p className="productscreen__left__name">{product.name}</p>
                    <p className="productscreen__left__price">Price: {product.price}</p>
                    <p className="productscreen__left__description">Description: {product.description}</p>
                </div>
            </div>

            <div className="productscreen__right">
                <div className="productscreen__right__info">
                    <p className="productscreen__right__price">
                        Price: <span>{product.price}</span>
                    </p>
                    <p className="productscreen__right__stock">
                        In Stock: <span>{product.productInStockCount > 0 ? "In Stock" : "Out of Stock"}</span>
                    </p>
                    <p className="productscreen__right__quantity">
                        Quantity
                        <select value={quantity} onChange={(e) => setQty(e.target.value)}>
                            {[...Array(product.productInStockCount).keys()].map((x) => (
                                <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                </option>
                            ))}
                        </select>
                    </p>
                    <p className="productscreen__right__button">
                        <button type="button" onClick={addToCartHandler}></button>
                    </p>
                </div>

            </div>
        </div>
    )
}

export default ProductScreen

