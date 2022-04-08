import "./HomeScreen.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'

import Product from "../components/Product";

import {getProducts as listProducts} from '../redux/actions/productActions'

const HomeScreen = () => {

  const dispatch = useDispatch();
  const getProducts = useSelector(state => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])


  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Latest Products</h2>
      <div className="homescreen__products">
        {loading ? (
          <h2> Loading, please wait!</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => <Product 
          key = {product._id}
          name = {product.name}
          description = {product.description}
          price = {product.price}
          productInStockCount = {product.productInStockCount}
          productImageUrl = {product.productImageUrl}
          productId = {product._id}
          />)
        )}
      </div>
    </div>
  );
};

export default HomeScreen;