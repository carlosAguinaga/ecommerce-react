import { createContext, useReducer } from "react";

const ShopCartContext = createContext();

const initialState = {
    user: "Carlos Aguinaga",
    cart: []
};

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const ShopCartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const data = { state, dispatch };
  return (
    <ShopCartContext.Provider value={data}>{children}</ShopCartContext.Provider>
  );
};

export { ShopCartProvider, ShopCartContext };
