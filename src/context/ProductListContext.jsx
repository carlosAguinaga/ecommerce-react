import { createContext, useReducer } from "react";

const ProductListContext = createContext();

const initialState = {
  products: [
    {
      id: 1,
      name: 'producto 1',
      description: 'description 1',
      price: 250,
      stock: 6,
      img: '/products/product1.jpg' 
    },
    {
      id: 2,
      name: 'producto 2',
      description: 'description 2',
      price: 200,
      stock: 5,
      img: '/products/product2.jpg' 
    },
    {
      id: 3,
      name: 'producto 3',
      description: 'description 3',
      price: 400,
      stock: 6,
      img: '/products/product3.jpg' 
    },
    {
      id: 4,
      name: 'producto 4',
      description: 'description 4',
      price: 100,
      stock: 3,
      img: '/products/product4.jpg' 
    },
    {
      id: 5,
      name: 'producto 5',
      description: 'description 5',
      price: 200,
      stock: 8,
      img: '/products/product5.jpg' 
    },
    {
      id: 6,
      name: 'producto 6',
      description: 'description 6',
      price: 150,
      stock: 4,
      img: '/products/product6.jpg' 
    },
    {
      id: 7,
      name: 'producto 7',
      description: 'description 7',
      price: 240,
      stock: 5,
      img: '/products/product7.jpg' 
    },
    {
      id: 8,
      name: 'producto 8',
      description: 'description 8',
      price: 150,
      stock: 7,
      img: '/products/product8.jpg' 
    },
  ],
};


const decreaseProductStock = (state, action) => {
  const productToDecrease = state.products.find(p => p.id ===  action.payload.id);
  const obj = { ...productToDecrease }
  if (obj.stock > 0) {
    obj.stock--
  }
  return state.products.map( p => p.id === action.payload.id? obj : p)
}

const incrementProductStock = (state, action) => {
  // aqui
  const productToIncrement = state.products.find(p => p.id ===  action.payload.id);
  const obj = { ...productToIncrement }
    obj.stock+= action.payload.numItems
  return state.products.map( p => p.id === action.payload.id? obj : p)
}

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCTS":
      return { ...state, products: action.payload };
    case "DECREASE_STOCK":
      return { ...state, products: decreaseProductStock(state, action) };
    case "ADD_UNIT_STOCK":
      return { ...state, products: incrementProductStock(state, action) };
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

  
  const data = { state, dispatch };

  return (
    <ProductListContext.Provider value={data}>
      {children}
    </ProductListContext.Provider>
  );
};

export { ProductListProvider, ProductListContext };
