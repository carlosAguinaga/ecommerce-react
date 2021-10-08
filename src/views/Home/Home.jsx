import React, { useContext } from "react";
import { ProductListContext } from "../../context/ProductListContext";
import ProductItem from "../../components/ProductItem/ProductItem";
import "./Home.styles.css";
import {Link} from 'react-router-dom'

const Home = () => {
  // Context del listado de productos
  const { state: listState } = useContext(ProductListContext);

  return (
    <div className="container">
      <Link to="/shop-cart">Shopping cart</Link>
      <hr />
      <div className="product-grid">
        {listState &&
          listState.products &&
          listState.products.map((product) => (
            <ProductItem
              key={product.id}
              name={product.name}
              description={product.desc}
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
