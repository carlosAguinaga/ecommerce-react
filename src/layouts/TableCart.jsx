import React, { useContext } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ShopCartContext } from "../context/ShopCartContext";

const TableCart = ({ children }) => {
  const { state } = useContext(ShopCartContext);

  return (
    <div style={{ width: "60", margin: "auto", marginTop: 30, textAlign: "center"}}>
      
      {state.cart.length > 0 ? (
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Product Image</th>
            <th>Quantity</th>
            <th>Description</th>
            <th>$</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {children}
          <tr>
            <td>Total: ${state.totalPrice}</td>
          </tr>
        </tbody>
      </Table>
      ): <Link to="/">Empty shopping cart</Link>}
    </div>
  );
};

export default TableCart;
