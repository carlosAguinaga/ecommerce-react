import React, { useContext, useEffect, useState } from "react";
import "./ProductItem.styles.css";
import { ShopCartContext } from "../../context/ShopCartContext";
import { useHistory } from "react-router";

const ProductItem = ({ name, description, price, id, img }) => {
  const { state, dispatch } = useContext(ShopCartContext);

  const history = useHistory();
  const [payload, setPayload] = useState({});
  const productInCart = state.cart.find((p) => p.id === id);

  const handleAddDispatch = () => {
    dispatch({ type: "ADD", payload });
  };

  const handleAddItemDispatch = () => {
    dispatch({ type: "ADD_UNIT_MORE", payload: { id } });
  };

  const handleRemoveDispatch = () => {
    dispatch({ type: "REMOVE", payload: { id, price } });
  };

  const handleRemoveItemDispatch = () => {
    if (productInCart.quantity === 1) {
      // eliminar el producto
      handleRemoveDispatch();
    }
    dispatch({ type: "REMOVE_UNIT", payload: { id } });
  };

  const handleClickItem = () => {
    history.push(`/product/${id}`);
  };

  useEffect(() => {
    setPayload({
      name,
      description,
      price,
      id,
      img,
      quantity: productInCart ? productInCart.quantity : 1,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="product-card">
      <div className="image-container">
        <img
          variant="top"
          src={img}
          onClick={handleClickItem}
          className="card-image"
          alt={name}
        />
      </div>
      <div className="card-description">
        <h2 className="card-title" onClick={handleClickItem}>
          {name}
        </h2>
        <p>{description}</p>
        <span>${price}</span>

        {productInCart ? (
          <div>
            <button onClick={() => handleRemoveItemDispatch(payload)}>-</button>
            <span>{productInCart.quantity}</span>
            <button onClick={() => handleAddItemDispatch(payload)}>+</button>
          </div>
        ) : (
          <button onClick={() => handleAddDispatch(payload)}>Add.</button>
        )}

        {productInCart && (
          <p className="item_added">{productInCart.quantity} items added</p>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
