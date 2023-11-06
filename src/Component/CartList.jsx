import React from "react";
import CartItem from "./CartItem";

function CartList(props) {
  const { carts, handleClickDelete } = props;
  function cartRenderList() {
    const cartListRender = carts.map((cartItem) => {
      return (
        <CartItem
          cartItem={cartItem}
          key={cartItem.id}
          handleClickDelete={handleClickDelete}
        />
      );
    });
    return cartListRender;
  }
  return <div>{cartRenderList()}</div>;
}

export default CartList;
