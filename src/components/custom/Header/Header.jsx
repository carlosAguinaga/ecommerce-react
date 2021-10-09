import React from "react";
import "./Header.styles.css";
import { Link } from "react-router-dom";

const Header = ({ cart, total, session }) => {
  return (
    <nav className="header">
      <div className="container navbar">
        <div>
          <Link to="/">logo</Link>
        </div>
        <ul className="right-bar">
          <Link to="/" className="header-link">
            Home
          </Link>
          <span className="header-link">
            Total: {total > 0 ? "$" + total : "$0"}
          </span>
          <Link as={Link} to="/shop-cart" className="header-link">
            Cart: {cart.length}
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
