import { createContext, useReducer } from "react";

const ProductListContext = createContext();

const initialState = {
  products: [
    {
      id: 1,
      name: "Product 1",
      desc: "Description 1",
      price: 250,
      img: "https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C71zlNekbI0L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX385_.png",
      stock: 3,
    },
    {
      id: 2,
      name: "Product 2",
      desc: "Description 2",
      price: 560,
      img: "https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C71zlNekbI0L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX385_.png",
      stock: 1,
    },
    {
      id: 3,
      name: "Product 3",
      desc: "Description 3",
      price: 300,
      img: "https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C71zlNekbI0L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX385_.png",
      stock: 2,
    },
  ],
};

const reducer = (state, action) => {
    switch (action.type) {
        // case "a":
        //     return 
        default:
         return state;
    }
}

const ProductListProvider = ({ children }) => {
  
    const [state, dispatch] = useReducer(reducer, initialState)
    const data = {state};

  return (
    <ProductListContext.Provider value={data}>
      {children}
    </ProductListContext.Provider>
  );
};

export { ProductListProvider, ProductListContext };

