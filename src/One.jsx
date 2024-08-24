import React, { useState } from "react";
import Two from "./Two";

const One = () => {
  const [cartItem, setCartItem] = useState(0);
  const maxItems = 10;

  const handleAddToCart = () => {
    if (cartItem <= maxItems) {
      setCartItem(cartItem + 1);
    }
  };
  const handleRemoveFromCart = () => {
    if (cartItem >= 1) {
      setCartItem(cartItem - 1);
    }
  };
  return (
    <>
      <Two
        cartItem={cartItem}
        add={handleAddToCart}
        maxItems={maxItems}
        remove={handleRemoveFromCart}
      />
    </>
  );
};

export default One;
