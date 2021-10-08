import { useContext } from "react";
import { ProductListContext } from "../context/ProductListContext";
import { ShopCartContext } from "../context/ShopCartContext";

const useLessPlusItemCart = ( {name, description, price, id, img} ) => {

  const { state: cartState, dispatch: cartDispatch } =
    useContext(ShopCartContext);
  const { state: productState, dispatch: productDispatch } =
    useContext(ProductListContext);

  //product of product context
  const productItem = productState.products.find((p) => p.id === id);
  //get the product of cart
  const productCart = cartState.cart.find((p) => p.id === id);

  //Functions
  const handleAddDispatch = () => {
    productDispatch({ type: "DECREASE_STOCK", payload: { id } });
    cartDispatch({
      type: "ADD",
      payload: {
        name,
        description,
        price,
        id,
        img,
        quantity: productCart ? productCart.quantity : 1,
      },
    });
  };

  const handleRemoveDispatch = () => {
    cartDispatch({ type: "REMOVE", payload: { id, price, quantity :productCart.quantity } });
  };

  const handleRemoveItemDispatch = () => {
    productDispatch({ type: "ADD_UNIT_STOCK", payload: { id } });
    if (productCart.quantity === 1) {
      // eliminar el producto
      return handleRemoveDispatch();
    }
    cartDispatch({ type: "REMOVE_UNIT", payload: { id, price } });
  };

  const handleAddItemDispatch = () => {
    productDispatch({ type: "DECREASE_STOCK", payload: { id } });
    cartDispatch({ type: "ADD_UNIT_MORE", payload: { id, price } });
  };

  return {
    handleAddDispatch,
    handleRemoveDispatch,
    handleAddItemDispatch,
    handleRemoveItemDispatch,
    productItem,
    productCart,

  };
};

export { useLessPlusItemCart };