import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState("");

  const eventHandler = (e) => {
    setInCart(inCart === "" ? "in-cart" : "");
  };

  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={() => eventHandler()}>
        Add to Cart
      </button>
    </li>
  );
}

export default Item;
