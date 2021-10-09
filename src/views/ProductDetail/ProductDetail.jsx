import React from "react";
import { useHistory, useParams } from "react-router";
import "./ProductDetail.styles.css";
import { useLessPlusItemCart } from "../../hooks/useLessPlusItemCart.js";

const ProductDetail = () => {
  const { id } = useParams();
  const history = useHistory()

  const {
    handleAddDispatch,
    handleAddItemDispatch,
    handleRemoveItemDispatch,
    productItem,
    productCart,
  } = useLessPlusItemCart(parseInt(id));

  return (
    <div className="container product-detail-cotainer">
      <img
        src={`${process.env.PUBLIC_URL}${productItem.img}`}
        alt={productItem.name}
        className="image-detail"
      />
      <div>
        <h2>{productItem.name}</h2>
        <p>{productItem.description}</p>

        {productItem?.stock <= 0 && (
          <p style={{ color: "red" }}>Out of stock</p>
        )}
        <p>${productItem.price}</p>

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
            <button onClick={() => handleAddDispatch()}>Add to cart</button>
          </div>
        )}

        {productCart && (
          <div>
            <button onClick={() => history.push('/shop-cart')}>go to cart</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
