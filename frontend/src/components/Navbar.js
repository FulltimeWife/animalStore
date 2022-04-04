import "./Navbar.css";
import { Link } from "react-router-dom"

const Navbar = ({click}) => {
    return (
      <nav className="navbar">
        {/* logo */}
        	<div>
            <div className="navbar__logo">
              <Link to="/" style={{ textDecoration: "none" }}> <h2> Animal Store </h2> </Link>
            </div>
          </div>
          {/* links */}
          <ul className="navbar__links">
            <li>
              <Link to="/cart" className = "cart__link">
								<i className="fas fa-shopping-cart"></i>
                <span>
                Cart
                <span className="cartlogo__badge">0</span>
                </span>
                
              </Link>
            </li>
						<li>
              <Link to="/">
                Shop
              </Link>
            </li>
        	</ul>
				<div className="hamburger__menu" onClick={click}>
					<div></div>
					<div></div>
					<div></div>
				</div>
      </nav>
    )
}

export default Navbar