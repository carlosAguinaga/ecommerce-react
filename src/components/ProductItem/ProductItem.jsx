import React from "react";
import "./ProductItem.styles.css";

import { useHistory } from "react-router";
import { useLessPlusItemCart } from "../../hooks/useLessPlusItemCart";

const ProductItem = ({ name, description, price, id, img }) => {
  const {
    handleAddDispatch,
    handleAddItemDispatch,
    handleRemoveItemDispatch,
    productItem,
    productCart,
  } = useLessPlusItemCart(id);

  const history = useHistory();

  const handleClickItem = () => {
    history.push(`/product/${id}`);
  };

  return (
    <div className="product-card">
      <div className="image-container">
        <img
          variant="top"
          src={`${process.env.PUBLIC_URL}${img}`}
          onClick={handleClickItem}
          className="card-image"
          alt={name}
        />
      </div>
      <div className="card-description">
        <h2 className="card-title" onClick={handleClickItem}>
          {name}
        </h2>
        <p className="card-subtite">{description}</p>

        {productItem?.stock <= 0 && (
          <p className="text-out-card">Out of stock</p>
        )}

        <span className="card-price">${price}</span>

        {productCart ? (
          <div>
            <button className="btn-units" onClick={handleRemoveItemDispatch}>
              -
            </button>
            <span className="card-text-unit">{productCart.quantity}</span>
            <button
              className="btn-units"
              onClick={handleAddItemDispatch}
              disabled={productItem.stock <= 0}
            >
              +
            </button>
          </div>
        ) : (
          <div>
            <button onClick={() => handleAddDispatch()} className="btn-primary card-btn-primary">
              Add to cart
            </button>
          </div>
        )}

        {productCart && (
          <p className="item_added">{productCart.quantity} items added</p>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
