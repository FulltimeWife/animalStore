import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import CartScreen from "./Screens/CartScreen";

import Navbar from "./components/Navbar";
import Backdrop from "./components/Backdrop";
import Sidedrawer from "./components/Sidedrawer";

function App() {
  const [sideToggle, setSideToggle] = useState(false);
  
  return (
  <Router>
    <Navbar click={() => setSideToggle(true)}/>
    <Sidedrawer show={sideToggle} click={() => setSideToggle(false)}/>
    <Backdrop show={sideToggle} click={() => setSideToggle(false)}/>
    <main>
      <Routes>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/product/:id" component={ProductScreen} />
        <Route exact path="/cart" component={CartScreen} />
      </Routes>
    </main>
  </Router>
  );
}

export default App;
