import { createContext, useContext, useEffect, useReducer } from "react";
import { ProductListContext } from "./ProductListContext";

const ShopCartContext = createContext();

let initialState = {
  user: "Carlos Aguinaga",
  totalPrice: 0,
  cart: [],
};

const getPlusItemCart = (state, action) => {
  const product = state.cart.find((p) => p.id === action.payload.id);

  return state.cart.map((p) => {
    if (p.id === product.id) {
      const obj = { ...p };
      obj.quantity++;
      return obj;
    }
    return p;
  });
};

const getRemoveItemCart = (state, action) => {
  const product = state.cart.find((p) => p.id === action.payload.id);

  return state.cart.map((p) => {
    if (p.id === product.id) {
      const obj = { ...p };
      obj.quantity--;
      return obj;
    }
    return p;
  });
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        totalPrice: state.totalPrice + action.payload.price,
        cart: [...state.cart, action.payload],
      };

    case "ADD_UNIT_MORE":
      return {
        ...state,
        totalPrice: state.totalPrice + action.payload.price,
        cart: getPlusItemCart(state, action),
      };
    case "REMOVE":
      return {
        ...state,
        totalPrice:
          state.totalPrice - action.payload.price * action.payload.quantity,
        cart: state.cart.filter((product) => product.id !== action.payload.id),
      };
    case "REMOVE_UNIT":
      return {
        ...state,
        totalPrice: state.totalPrice - action.payload.price,
        cart: getRemoveItemCart(state, action),
      };

    default:
      return state;
  }
};

const ShopCartProvider = ({ children }) => {

  if (localStorage.getItem("shopState")) {
    initialState = JSON.parse( localStorage.getItem("shopState") ).cartState;
  }

  const { state: productState } = useContext(ProductListContext);

  const [state, dispatch] = useReducer(reducer, initialState);
  const data = { state, dispatch };

  useEffect(() => {
    localStorage.setItem("shopState", JSON.stringify({productState, cartState: state}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <ShopCartContext.Provider value={data}>{children}</ShopCartContext.Provider>
  );
};

export { ShopCartProvider, ShopCartContext };
