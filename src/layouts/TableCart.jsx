import React from "react";

import { Table } from "react-bootstrap";

const TableCart = ({ children }) => {
  return (
    <div style={{width:"60", margin: "auto", marginTop: 30}}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Product Image</th>
            <th>Description</th>
            <th>$</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </Table>
    </div>
  );
};

export default TableCart;
