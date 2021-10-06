import { createContext, useReducer } from "react";

const ProductListContext = createContext();

const initialState = {
  products: [
    {
      id: 1,
      name: 'producto 1',
      desc: 'description 1',
      price: 250,
      img: './products/product1.jpg' 
    },
    {
      id: 2,
      name: 'producto 2',
      desc: 'description 2',
      price: 200,
      img: './products/product2.jpg' 
    },
    {
      id: 100,
      name: 'producto 3',
      desc: 'description 3',
      price: 400,
      img: './products/product3.jpg' 
    },
    {
      id: 4,
      name: 'producto 4',
      desc: 'description 4',
      price: 350,
      img: './products/product4.jpg' 
    },
    {
      id: 5,
      name: 'producto 5',
      desc: 'description 5',
      price: 350,
      img: './products/product5.jpg' 
    },
    {
      id: 6,
      name: 'producto 6',
      desc: 'description 6',
      price: 350,
      img: './products/product6.jpg' 
    },
    {
      id: 7,
      name: 'producto 7',
      desc: 'description 7',
      price: 350,
      img: './products/product7.jpg' 
    },
    {
      id: 8,
      name: 'producto 8',
      desc: 'description 8',
      price: 350,
      img: './products/product8.jpg' 
    },
  ],
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

  // useEffect(() => {
  //   const getFetch = async () => {
  //     try {
  //       const response = await fetch("http://localhost:1337/products");
  //       const payload = await response.json();
  //       dispatch({type: "ADD_PRODUCTS", payload})
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   getFetch();
  // }, []);

  
  const data = { state };

  return (
    <ProductListContext.Provider value={data}>
      {children}
    </ProductListContext.Provider>
  );
};

export { ProductListProvider, ProductListContext };
