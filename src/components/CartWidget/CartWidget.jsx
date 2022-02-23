import React from 'react';
import { GiSlicedBread } from "react-icons/gi";

import './CartWidget.scss';

const CartWidget = ({qty = 0}) => {
  return (
    <div className="cartwidget-container">
        <GiSlicedBread className="cartwidget-container__bread-icon"/>
        <span className="cartwidget-container__qty">{ qty }</span>
    </div>
  )
}

export default CartWidget;