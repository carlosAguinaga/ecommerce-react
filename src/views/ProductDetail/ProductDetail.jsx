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
      <div className="description-product-detail">
        <h1>{productItem.name}</h1>
        <p>{productItem.description}</p>

        {productItem?.stock <= 0 && (
          <p className="text-out">Out of stock</p>
        )}
        <p className="price-description">${productItem.price}</p>

        {productCart ? (
          <div>
            <button className="btn-units" onClick={handleRemoveItemDispatch}>-</button>
            <span className="text-unit">{productCart.quantity}</span>
            <button
            className="btn-units"
              onClick={handleAddItemDispatch}
              disabled={productItem.stock === 0}
            >
              +
            </button>
          </div>
        ) : (
          <div>
            <button className="btn-primary btn-go-cart" onClick={() => handleAddDispatch()}>Add to cart</button>
          </div>
        )}

        {productCart && (
            <button  className="btn-secondary btn-go-cart" onClick={() => history.push('/shop-cart')}>Go to cart</button>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
