import React, { useContext } from "react";
import {ProductListContext} from "../../context/ProductListContext";
import Product from "../../components/Home/Product/Product";
import './Home.styles.css'

const Home = () => {
  const { state } = useContext(ProductListContext);
  console.log(state);

  return (
    <div>
      <h1 className="title">Home</h1>
      <div className="product-list">
        {state &&
          state.products &&
          state.products.map((product) => (
            <Product
              key={product.id}
              name={product.name}
              description={product.desc}
              price={product.price}
              id={product.id}
              img={product.img}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
