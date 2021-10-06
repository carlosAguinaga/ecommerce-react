import React, { useContext, useEffect, useState } from "react";
import "./ProductItem.styles.css";
import { Card, Button } from "react-bootstrap";
import { ShopCartContext } from "../../context/ShopCartContext";

const ProductItem = ({ name, description, price, id, img }) => {
  const { state, dispatch } = useContext(ShopCartContext);

  const [payload, setPayload] = useState({});

  useEffect(() => {
    setPayload({ name, description, price, id, img });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDispatch = (payload) => {
    (dispatch({ type: "ADD", payload }))
  }

  console.log(img);
  return (
    <Card className="product-card">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <span>${price}</span>
        <Button
          variant={"primary"}
          onClick={ () => handleDispatch(payload)}
        >
          Add
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductItem;
