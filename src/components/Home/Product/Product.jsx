import React, { useContext } from "react";
import "./Product.styles.css";
import { Card, Button } from "react-bootstrap";
import { ShopCartContext } from "../../../context/ShopCartContext";

const Product = ({name, description, price, id, img}) => {

    const {state, dispatch} = useContext(ShopCartContext)

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}
        </Card.Text>
        <Button variant="primary">$ {price}</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
