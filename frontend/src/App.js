import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import HomeScreen from './Screens/HomeScreen'
import ProductScreen from './Screens/ProductScreen'
import CartScreen from './Screens/CartScreen'

import Navbar from './components/Navbar';

function App() {
  return (
  <Router>
    <Navbar />
    {/* SideDrawer */}
    {/* Backdrop */}
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
