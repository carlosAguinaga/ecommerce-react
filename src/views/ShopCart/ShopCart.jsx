import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import ProductCartItem from "../../components/ProductCartItem/ProductCartItem";
import { ShopCartContext } from "../../context/ShopCartContext";
import "./ShopCart.styles.css";

const ShopCart = () => {
  const { state } = useContext(ShopCartContext);
  const history = useHistory()

  return (
    <>
      {state.cart.length !== 0 ? (
        <div className="container cart-container">
          <div>
            {state.cart.map(({ id, img, name, description, price }) => (
              <ProductCartItem
                key={id}
                img={img}
                name={name}
                description={description}
                price={price}
                id={id}
              />
            ))}
          </div>
          <div className="detail-cart-container">
            <h2 className="text-total-title">Total</h2>
            <p className="price-total-detail">${state.totalPrice}</p>
            <button className="btn-primary btn-cart-detail" onClick={()=> history.push('/checkout')}>
              Go to checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="text-empty-detail">
          <Link to="/">Cart empty, go to home</Link>
        </div>
      )}
    </>
  );
};

export default ShopCart;
