import React,{ useContext } from 'react';
import { GiSlicedBread } from "react-icons/gi";

import './CartWidget.scss';

const CartWidget = ({qty = 0}) => {

  /*usar método reduce de los arrays para saber el valor total de productos*/ 

  return (
    <div className="cartwidget-container">
        <GiSlicedBread className="cartwidget-container__bread-icon"/>
        <span className="cartwidget-container__qty"> 0 </span>
    </div>
  )
}

export default CartWidget;