import { createContext, useEffect, useReducer } from "react";

const ProductListContext = createContext();

const initialState = {
  products: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCTS":
      return { ...state, products:action.payload };
    default:
      return state;
  }
};

const ProductListProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getFetch = async () => {
      try {
        const response = await fetch("http://localhost:1337/products");
        const payload = await response.json();
        dispatch({type: "ADD_PRODUCTS", payload})
      } catch (error) {
        console.log(error);
      }
    };

    getFetch();
  }, []);

  
  const data = { state };

  return (
    <ProductListContext.Provider value={data}>
      {children}
    </ProductListContext.Provider>
  );
};

export { ProductListProvider, ProductListContext };
