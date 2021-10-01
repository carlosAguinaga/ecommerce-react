import React from "react";
import "./Header.styles.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = ({ cart, total, name }) => {
  return (
    <Navbar variant="dark" bg="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          inicio
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/" className="header-link">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/shop-cart" className="header-link">
            Checkout
          </Nav.Link>
          <Navbar.Text as={Link} to="/shop-cart" className="header-link">
            Cart: {cart.length}
          </Navbar.Text>
          <Navbar.Text as={Link} to="/shop-cart" className="header-link">
            Total: {total > 0 ? "$" + total : "$0"}
          </Navbar.Text>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
