import { createContext, useReducer } from "react";
// import {useLocalStorage} from '../hooks/useLocalStorage'

const ProductListContext = createContext();

let initialState = {
  products: [
    {
      id: 1,
      name: 'TWS WHIZZER-TP1',
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto',
      price: 75,
      stock: 6,
      img: '/products/product1.jpg' 
    },
    {
      id: 2,
      name: 'ELECOM LBT-TWS05',
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto',
      price: 90,
      stock: 5,
      img: '/products/product2.jpg' 
    },
    {
      id: 3,
      name: 'Headphone C1 HIFI',
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto',
      price: 300,
      stock: 6,
      img: '/products/product3.jpg' 
    },
    {
      id: 4,
      name: 'Headphone Fire-250',
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto',
      price: 180,
      stock: 3,
      img: '/products/product4.jpg' 
    },
    {
      id: 5,
      name: 'Marshall Major 2',
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto',
      price: 150,
      stock: 8,
      img: '/products/product5.jpg' 
    },
    {
      id: 6,
      name: 'Air-force 1914',
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto',
      price: 200,
      stock: 4,
      img: '/products/product6.jpg' 
    },
    {
      id: 7,
      name: 'Old school 47',
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto',
      price: 270,
      stock: 5,
      img: '/products/product7.jpg' 
    },
    {
      id: 8,
      name: 'Big B-3',
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto',
      price: 320,
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

  if (localStorage.getItem("shopState")) {
    initialState = JSON.parse( localStorage.getItem("shopState") ).productState;
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const data = { state, dispatch };


  // useLocalStorage()



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


  return (
    <ProductListContext.Provider value={data}>
      {children}
    </ProductListContext.Provider>
  );
};

export { ProductListProvider, ProductListContext };
