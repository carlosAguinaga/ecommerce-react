import React from "react";
import "./Header.styles.css";
import { Link } from "react-router-dom";

const Header = ({ cart, total, session }) => {
  return (
    <nav className="header">
      <div>
        <Link to="/">logo</Link>
        <ul className="me-auto">
          <Link to="/" className="header-link">
            Home
          </Link>
          <Link to="/" className="header-link">
            Checkout
          </Link>

          <Link as={Link} to="/shop-cart" className="header-link">
            Cart: {cart.length}
          </Link>
          <span className="header-link">
            Total: {total > 0 ? "$" + total : "$0"}
          </span>

          {/* {session.user.jwt ? (
            <Nav.Link as={Link} to="/account" className="header-link">
              welcome {session.user.user.username}
            </Nav.Link>
          ) : (
            <Nav.Link as={Link} to="/login" className="header-link">
              Log in
            </Nav.Link>
          )} */}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
