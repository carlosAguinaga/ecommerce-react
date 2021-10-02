import React from "react";
import "./Header.styles.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = ({ cart, total, session }) => {
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
          <Nav.Link as={Link} to="/" className="header-link">
            Checkout
          </Nav.Link>

          <Navbar.Text as={Link} to="/shop-cart" className="header-link">
            Cart: {cart.length}
          </Navbar.Text>

          <Navbar.Text>
            <span className="header-link">
              Total: {total > 0 ? "$" + total : "$0"}
            </span>
          </Navbar.Text>

          {session.isOnSession ? (
            <Navbar.Text>
              <span className="header-link">Welcome: {session.user}</span>
            </Navbar.Text>
          ) : (
            <Nav.Link as={Link} to="/login" className="header-link">
              Log in
            </Nav.Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
