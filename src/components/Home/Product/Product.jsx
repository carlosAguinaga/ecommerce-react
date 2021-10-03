import React, { useContext, useEffect, useState } from "react";
import "./Product.styles.css";
import { Card, Button } from "react-bootstrap";
import { ShopCartContext } from "../../../context/ShopCartContext";

const Product = ({ name, description, price, id, img, status }) => {
  const { state, dispatch } = useContext(ShopCartContext);

  const [payload, setPayload] = useState({});

  useEffect(() => {
    setPayload({ name, description, price, id, img, status });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDispatch = (payload) => {
    (dispatch({ type: "ADD", payload }))
  }

  console.log(img);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={`http://localhost:1337${img.url}`} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button
          variant={"primary"}
          onClick={ () => handleDispatch(payload)}
        >
          $ {price}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
