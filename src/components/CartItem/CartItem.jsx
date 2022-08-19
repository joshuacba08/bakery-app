import React, { useContext } from 'react';
import { MdOutlineClose } from "react-icons/md";
import { CartContext } from '../../context/CartContext';
import './CartItem.scss';


const CartItem = ({product}) => {

  const cartContex = useContext( CartContext );
  const { removeItemById } = cartContex;

  return (
    <div className="cart-item">
        <div className="cart-item__item"
          onClick={()=>{
            removeItemById(product.id)
          }}
        >
            <MdOutlineClose/>
        </div>
        <h4 className="cart-item__item">{product.productName}</h4>
        <span className="cart-item__item">${product.price}</span>
        <span className="cart-item__item">{product.qty}</span>
        <span className="cart-item__item">${product.qty * product.price}</span>
    </div>
  )
}

export default CartItem