import "./HomeScreen.css";
import Product from "../components/Product";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllProductsAction } from "../redux/actions/productActions";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const getAllProducts = useSelector((state) => state.getAllProducts);
  const { allProducts, loading, error} = getAllProducts;

  useEffect(() => {
    dispatch(getAllProductsAction());
  }, [dispatch]);

  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Latest Products</h2>
      <div className="homescreen__products">
        {loading ? (
          <h2> Loading Latest Products!, Please wait!</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          allProducts.map((product) => (
            <Product
              //Maybe sort this by type of animal? would need another entry in the DB for animalType = "panda", then sort based on group perhaps?
              key={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              productImageUrl={product.productImageUrl}
              productId={product._id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default HomeScreen;