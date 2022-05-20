import React,{ useContext } from 'react';
import { GiSlicedBread } from "react-icons/gi";
import { CartContext } from '../../context/CartContext';

import './CartWidget.scss';

const CartWidget = ({qty = 0}) => {
  const cartContext = useContext( CartContext );
  const { cart } = cartContext;
  /*usar método reduce de los arrays para saber el valor total de productos*/ 

  return (
    <div className="cartwidget-container">
        <GiSlicedBread className="cartwidget-container__bread-icon"/>
        <span className="cartwidget-container__qty">{ cart.length }</span>
    </div>
  )
}

export default CartWidget;