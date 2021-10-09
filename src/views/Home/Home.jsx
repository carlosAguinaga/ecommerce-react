import React, { useContext } from "react";
import { ProductListContext } from "../../context/ProductListContext";
import ProductItem from "../../components/ProductItem/ProductItem";
import "./Home.styles.css";

const Home = () => {
  // Context del listado de productos
  const { state: listState } = useContext(ProductListContext);

  return (
    <div className="container">
      <h1 className="title">All Products</h1>
      <hr />
      <div className="product-grid">
        {listState &&
          listState.products &&
          listState.products.map((product) => (
            <ProductItem
              key={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              id={product.id}
              img={product.img}
              status={"add"}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
