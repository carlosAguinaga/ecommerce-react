import React, { useContext } from "react";
import ProductCartItem from "../../components/ProductCartItem/ProductCartItem";
import { ShopCartContext } from "../../context/ShopCartContext";
import "./ShopCart.styles.css";

const ShopCart = () => {
  const { state, dispatch } = useContext(ShopCartContext);

  return (
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
  );
};

export default ShopCart;
