import React, { useContext, useEffect, useState } from "react";
import "./ProductItem.styles.css";
import { ShopCartContext } from "../../context/ShopCartContext";
import { ProductListContext } from "../../context/ProductListContext";
import { useHistory } from "react-router";

const ProductItem = ({ name, description, price, id, img }) => {
  //states of context
  const { state: cartState, dispatch: cartDispatch } =
    useContext(ShopCartContext);
  const { state: productState, dispatch: productDispatch } =
    useContext(ProductListContext);

  //product of product context  
  const productItem = productState.products.find((p) => p.id === id);
  
  //get the product of cart
  const productInCart = cartState.cart.find((p) => p.id === id);
  
  const history = useHistory();
  const [payload, setPayload] = useState({});

  

  const handleAddDispatch = () => {
    productDispatch({ type: "DECREASE_STOCK", payload: { id } });
    cartDispatch({ type: "ADD", payload });
  };

  const handleAddItemDispatch = () => {
    productDispatch({ type: "DECREASE_STOCK", payload: { id } });
    cartDispatch({ type: "ADD_UNIT_MORE", payload: { id, price } });
  };

  const handleRemoveDispatch = () => {
    cartDispatch({ type: "REMOVE", payload: { id, price } });
  };

  const handleRemoveItemDispatch = () => {
    productDispatch({ type: "ADD_UNIT_STOCK", payload: { id } });
    if (productInCart.quantity === 1) {
      // eliminar el producto
      return handleRemoveDispatch();
    }
    cartDispatch({ type: "REMOVE_UNIT", payload: { id, price } });
  };


  // Go to detail
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

        {productItem?.stock <= 0 ? (
          <p style={{ color: "red" }}>Out of stock</p>
        ) : (
          undefined
        )}

        <span>${price}</span>

        {productInCart ? (
          <div>
            <button onClick={() => handleRemoveItemDispatch(payload)}>-</button>
            <span>{productInCart.quantity}</span>
            <button
              onClick={() => handleAddItemDispatch(payload)}
              disabled={productItem.stock === 0}
            >
              +
            </button>
          </div>
        ) : (
          <div>
            <button onClick={() => handleAddDispatch(payload)}>Add.</button>
          </div>
        )}

        {productInCart && (
          <p className="item_added">{productInCart.quantity} items added</p>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
