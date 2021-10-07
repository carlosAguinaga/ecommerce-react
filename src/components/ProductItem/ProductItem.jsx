import React, { useContext, useEffect, useState } from "react";
import "./ProductItem.styles.css";
import { ShopCartContext } from "../../context/ShopCartContext";
import { useHistory } from "react-router";

const ProductItem = ({ name, description, price, id, img }) => {
  const { state, dispatch } = useContext(ShopCartContext);

  const history = useHistory()

  const [payload, setPayload] = useState({});

  useEffect(() => {
    setPayload({ name, description, price, id, img, quantity: 1 });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDispatch = (payload) => {
    (dispatch({ type: "ADD", payload }))

  }

  const handleClickItem = (payload) => {
    history.push(`/product/${id}`)
  }

  return (
    <div className="product-card">
      <div className="image-container">
      <img variant="top" src={img} onClick={handleClickItem} className="card-image" alt={name}/>
      </div>
      <div className="card-description">
        <h2 className="card-title" onClick={handleClickItem}>{name}</h2>
        <p>{description}</p>
        <span>${price}</span>
        <button
          variant={"primary"}
          onClick={ () => handleDispatch(payload)}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
