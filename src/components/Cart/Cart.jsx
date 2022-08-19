import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { getTotalItems, getTotalPrice } from "../../helpers/calculatorFunctions";
import CartItem from '../CartItem/CartItem';

import './Cart.scss'
const Cart = () => {
  const [items, setItems] = useState([]);

  const { cart } = useContext(CartContext);

  useEffect(() => {
    setItems(cart);
  }, [cart]);

  return (
    <section className="cart">
      <ul className="list-header">
        <li className="list-header__item"></li>
        <li className="list-header__item">Product</li>
        <li className="list-header__item">Price</li>
        <li className="list-header__item">Quantity</li>
        <li className="list-header__item">Subtotal</li>
      </ul>
      {items.length > 0 ? (
        items.map((item) => {
          return <CartItem key={item.id} product={item}/>;
        })
      ) : (
        <p className="cart__msg">No tenés productos en el carrito</p>
      )}
      <ul className="list-header">
        <li className="list-header__item"></li>
        <li className="list-header__item">Total</li>
        <li className="list-header__item"></li>
        <li className="list-header__item">{getTotalItems(cart)}</li>
        <li className="list-header__item">${getTotalPrice(cart)}</li>
      </ul>
    </section>
  );
};

export default Cart;
