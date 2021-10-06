import { createContext, useReducer } from "react";

const ProductListContext = createContext();

const initialState = {
  products: [
    {
      id: 1,
      name: 'producto 1',
      desc: 'description 1',
      price: 250,
      img: 'https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C71AXDEy8WZL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UL1500_.png' 
    },
    {
      id: 2,
      name: 'producto 2',
      desc: 'description 2',
      price: 200,
      img: 'https://m.media-amazon.com/images/I/B1MuEgxHlwS._CLa%7C2140%2C2000%7C71FTUN5mcFL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX679._SX._UX._SY._UY_.png' 
    },
    {
      id: 100,
      name: 'producto 3',
      desc: 'description 3',
      price: 400,
      img: 'https://ih1.redbubble.net/image.32576156.9850/ssrco,classic_tee,mens,5e504c:7bf03840f4,front_alt,square_product,600x600.u4.jpg' 
    },
    {
      id: 4,
      name: 'producto 4',
      desc: 'description 4',
      price: 350,
      img: 'https://m.media-amazon.com/images/I/C1xk9V1QWKS._CLa%7C500%2C468%7C71FTUN5mcFL.png%7C0%2C0%2C500%2C468%2B0.0%2C0.0%2C500.0%2C468.0_AC_.png' 
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
