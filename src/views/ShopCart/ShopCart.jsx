import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ProductCartItem from "../../components/ProductCartItem/ProductCartItem";
import { ShopCartContext } from "../../context/ShopCartContext";
import "./ShopCart.styles.css";

const ShopCart = () => {
  const { state } = useContext(ShopCartContext);

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
          <div>
            <p>checkout</p>
            <button>pagar</button>
          </div>
        </div>
      ) : (
        <Link to="/">Cart empty, go to home</Link>
      )}
    </>
  );
};

export default ShopCart;
