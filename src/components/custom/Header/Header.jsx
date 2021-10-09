import React from "react";
import "./Header.styles.css";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Header = ({ cart, total, session }) => {
  return (
    <nav className="header">
      <div className="container navbar">
        <div>
          <Link to="/">
            <Icon icon="icon-park:headphone-sound" className="logo-header"/>
          </Link>
        </div>
        <ul className="right-bar">
          <Link to="/" className="header-link">
            Home
          </Link>
          <span className="header-link">
            Total: {total > 0 ? "$" + total : "$0"}
          </span>

          <Link as={Link} to="/shop-cart" className="header-link">
            <div className="ic-cart-container">
              <Icon icon="ion:cart" className="ic-icon-cart" />
              {  cart.length > 0 && <span className="text-count-cart">{cart.length}</span>}
            </div>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
