import './ProductScreen.css';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getProductByIdAction } from "../redux/actions/productActions";

const ProductScreen = () => {
    const dispatch = useDispatch();
    const getProductById = useSelector((state) => state.getProductById);
    const {productById, loading, error} = getProductById;
    
    let { id } = useParams();
    useEffect(() => {
        dispatch(getProductByIdAction(id))
    }, [dispatch, id])

    return (
        <div className="productscreen">
            <div className="productscreen__left">
                <div className="productscreen__left__image">
                    <img src={productById.productImageUrl} alt={productById.name}></img>
                </div>
                <div className="productscreen__left__info">
                    <p className="productscreen__left__name">{productById.name}</p>
                    <p className="productscreen__left__price">€{productById.price}</p>
                    <p className="productscreen__left__description"> {productById.description}</p>
                </div>
            </div>

            <div className="productscreen__right">
                <div className="productscreen__right__info">
                    <p className="productscreen__right__price">
                        Price: <span>€{productById.price}</span>
                    </p>
                    <p className="productscreen__right__stock">
                        In Stock: <span>{productById.productInStockCount}</span>
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

