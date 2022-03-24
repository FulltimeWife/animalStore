import './Navbar.css';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
      <nav className="navbar">
        {/* logo */}
        	<div>
            <div className="navbar__logo">
              <h2> Shopping Cart</h2>
            </div>
          </div>
          {/* links */}
          <ul className="navbar__links">
            <li>
              <Link to="/cart">
								<i className="fas fa-shopping-cart"></i>
                Cart
                <span className="cartlogo__badge">0</span>
              </Link>
            </li>
						<li>
              <Link to="/">
                Shop
              </Link>
            </li>
        	</ul>
				<div className="hamburger_menu">
					<div></div>
					<div></div>
					<div></div>
				</div>
      </nav>
    )
}

export default Navbar