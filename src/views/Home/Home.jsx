import React, { useContext, useState } from "react";
import { ProductListContext } from "../../context/ProductListContext";
import Product from "../../components/Home/Product/Product";
import "./Home.styles.css";
import { ShopCartContext } from "../../context/ShopCartContext";
import {Link} from 'react-router-dom'

const Home = () => {
  // Context del listado de productos
  const { state: listState } = useContext(ProductListContext);
  // Context carrito de compras
  const { state: cartState } = useContext(ShopCartContext);
  const [cart, setCart] = useState([{}]);

  return (
    <div>
      <h1 className="title">Home</h1>
      <p className="title">total: {cartState.totalPrice}</p>
      <p className="title">products: {cartState.cart.length}</p>
      <Link to="/shop-cart">Shopping cart</Link>
      <hr />
      <div className="product-list">
        {listState &&
          listState.products &&
          listState.products.map((product) => (
            <Product
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
