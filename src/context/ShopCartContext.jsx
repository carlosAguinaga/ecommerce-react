import { createContext, useReducer } from "react";

const ShopCartContext = createContext();

const initialState = {
  user: "Carlos Aguinaga",
  totalPrice: 0,
  cart: [],
};

const getUpdatedCart = (product, action, state) => {

  if (!product) {
    return [...state.cart, action.payload];
  }

  return state.cart.map((p) => {
    if (p.id === product.id) {
      const obj = { ...p };
      obj.quantity++;
      return obj;
    }
    return p;
  });
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const product = state.cart.find((p) => p.id === action.payload.id);
      return {
        ...state,
        totalPrice: state.totalPrice + action.payload.price,
        cart: getUpdatedCart(product, action, state),
      };

    case "REMOVE":
      return {
        ...state,
        totalPrice: state.totalPrice - action.payload.price,
        cart: state.cart.filter((product) => product.id !== action.payload.id),
      };
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
