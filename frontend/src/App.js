import "./App.css";
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import { useState } from "react";

import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

import Navbar from "./components/Navbar";
import Backdrop from "./components/Backdrop";
import Sidedrawer from "./components/Sidedrawer";

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <Sidedrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main>
        <Switch>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/product/:id" element={<ProductScreen />} />
          <Route path="/cart" element={<CartScreen />} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
