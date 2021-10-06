import React, { useContext } from "react";
import { ShopCartContext } from "../../context/ShopCartContext";
import "./ShopCart.styles.css";
import { Button } from "react-bootstrap";
import TableCart from "../../layouts/TableCart";

const ShopCart = () => {
  const { state, dispatch } = useContext(ShopCartContext);

  return (
    <>
      <TableCart>
        {state.cart.map((product, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{product.name}</td>
            <td>
              <img
                src={product.img}
                alt={product.name}
                style={{ maxWidth: "10%" }}
              />
            </td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td>
              <Button
                variant="danger"
                onClick={() =>
                  dispatch({ type: "REMOVE", payload: {id: product.id, name: product.name, price: product.price} })
                }
              >
                Remove
              </Button>
            </td>
          </tr>
        ))}
      </TableCart>
    </>
  );
};

export default ShopCart;
