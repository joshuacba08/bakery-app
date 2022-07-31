import React,{ useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { GiSlicedBread } from "react-icons/gi";
import { getTotalItems } from '../../helpers/calculatorFunctions';
import './CartWidget.scss';


const CartWidget = () => {

  /*usar método reduce de los arrays para saber el valor total de productos*/ 
  const cartContex = useContext( CartContext );
  const { cart } = cartContex;

  return (
    <div className="cartwidget-container">
        <GiSlicedBread className="cartwidget-container__bread-icon"/>
        <span className="cartwidget-container__qty"> {getTotalItems(cart)} </span>
    </div>
  )
}

export default CartWidget;