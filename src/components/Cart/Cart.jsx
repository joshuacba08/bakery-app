import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const [items, setItems] = useState([]);

  const { cart } = useContext(CartContext);

  useEffect(() => {
    setItems(cart);
  }, [cart]);

  return (
    <section>
      {items.length > 0 ? (
        items.map((item) => {
          return <li key={item.id}>{item.productName}</li>;
        })
      ) : (
        <p>No tenés productos en el carrito</p>
      )}
    </section>
  );
};

export default Cart;
