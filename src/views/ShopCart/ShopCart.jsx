import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import Product from "../../components/Home/Product/Product";
import { ShopCartContext } from "../../context/ShopCartContext";
import "./ShopCart.styles.css";
import { Button } from "react-bootstrap";
import TableCart from "../../layouts/TableCart";

const ShopCart = () => {
  const { state } = useContext(ShopCartContext);

  return (
    <>
      <Link to="/">Go back</Link>
      <TableCart>
        {state.cart.map((product, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{product.name}</td>
            <td>
              <img
                src={product.img}
                alt={product.name}
                style={{ maxWidth: "20%" }}
              />
            </td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td>
              <Button variant="danger">Remove</Button>
            </td>
          </tr>
          // <Product
          //   key={product.id}
          //   name={product.name}
          //   description={product.desc}
          //   price={product.price}
          //   id={product.id}
          //   img={product.img}
          //   status={"delete"}
          // />
        ))}
      </TableCart>
    </>
  );
};

export default ShopCart;
