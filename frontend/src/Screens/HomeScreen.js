import './HomeScreen.css';
import Product from "../components/Product";

const HomeScreen = () => {
    return (
      <div className="homescreen">
        <h2 className="homescreen__title"> aaa</h2>
        
        <div className="homescreen__products"></div>
          <Product />

      </div>
    )
}

export default HomeScreen;