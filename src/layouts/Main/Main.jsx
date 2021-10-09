import React, { useContext } from "react";
import Header from "../../components/custom/Header/Header";
import { ShopCartContext } from "../../context/ShopCartContext";
import { UserContext } from "../../context/UserContext";
import "./Main.styles.css";

const Main = ({ children }) => {
  const { state: cartState } = useContext(ShopCartContext);
  const { state: userState } = useContext(UserContext);

  return (
    <>
      <Header
        cart={cartState.cart}
        total={cartState.totalPrice}
        name={cartState.user}
        session={userState}
      />
      <div className="main-container">{children}</div>
    </>
  );
};

export default Main;
