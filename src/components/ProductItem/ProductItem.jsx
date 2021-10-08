import React, { useContext } from "react";
import "./ProductItem.styles.css";
import { ShopCartContext } from "../../context/ShopCartContext";
import { ProductListContext } from "../../context/ProductListContext";
import { useHistory } from "react-router";
import { useLessPlusItemCart } from "../../hooks/useLessPlusItemCart";

const ProductItem = ({ name, description, price, id, img }) => {
  //states of context
  const { state: cartState, dispatch: cartDispatch } =
    useContext(ShopCartContext);
  const { state: productState, dispatch: productDispatch } =
    useContext(ProductListContext);

  const { handleAddDispatch, handleAddItemDispatch, handleRemoveItemDispatch } =
    useLessPlusItemCart({ name, description, price, img, id });

  //product of product context
  const productItem = productState.products.find((p) => p.id === id);

  //get the product of cart
  const productCart = cartState.cart.find((p) => p.id === id);

  const history = useHistory();

  // const handleAddDispatch = () => {
  //   productDispatch({ type: "DECREASE_STOCK", payload: { id } });
  //   cartDispatch({ type: "ADD", payload: {
  //     name,
  //     description,
  //     price,
  //     id,
  //     img,
  //     quantity: productCart ? productCart.quantity : 1,
  //   } });
  // };

  // const handleRemoveDispatch = () => {
  //   cartDispatch({ type: "REMOVE", payload: { id, price } });
  // };

  // const handleRemoveItemDispatch = () => {
  //   productDispatch({ type: "ADD_UNIT_STOCK", payload: { id } });
  //   if (productCart.quantity === 1) {
  //     // eliminar el producto
  //     return handleRemoveDispatch();
  //   }
  //   cartDispatch({ type: "REMOVE_UNIT", payload: { id, price } });
  // };

  // const handleAddItemDispatch = () => {
  //   productDispatch({ type: "DECREASE_STOCK", payload: { id } });
  //   cartDispatch({ type: "ADD_UNIT_MORE", payload: { id, price } });
  // };

  // Go to detail

  const handleClickItem = () => {
    history.push(`/product/${id}`);
  };

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
        ) : undefined}

        <span>${price}</span>

        {productCart ? (
          <div>
            <button onClick={handleRemoveItemDispatch}>-</button>
            <span>{productCart.quantity}</span>
            <button
              onClick={handleAddItemDispatch}
              disabled={productItem.stock === 0}
            >
              +
            </button>
          </div>
        ) : (
          <div>
            <button onClick={() => handleAddDispatch()}>Add.</button>
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
