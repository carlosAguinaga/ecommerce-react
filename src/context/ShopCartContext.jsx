import { createContext, useReducer } from "react";

const ShopCartContext = createContext();

const initialState = {
  user: "Carlos Aguinaga",
  totalPrice: 0,
  cart: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        totalPrice: state.totalPrice + action.payload.price,
        cart: [...state.cart, action.payload],
      };
    case "REMOVE":
      return {
        ...state,
        totalPrice: state.totalPrice - action.payload.price,
        cart: state.cart.filter(product => product.id !== action.payload.id)
      }  
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
