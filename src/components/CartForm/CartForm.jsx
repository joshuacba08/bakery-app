import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { getTotalPrice } from '../../helpers/calculatorFunctions';
import { createItem, deleteItem } from '../../helpers/firestore.controller';
import useForm from '../../hooks/useForm';

import './CartForm.scss';
const CartForm = () => {
  const navigate = useNavigate();
  //me traigo el cart
  const { cart } = useContext( CartContext );
  const [success, setSuccess] = useState(false);
  const [orderNumber, setOrderNumber] = useState(null);
  //datos del formulario del formulario
  const [ formValues, handleInputChange ] = useForm({
    fname:'',
    lname:'',
    email:'',
    address:''
  });

  const { fname, lname , email, address} = formValues;

  const dataOrder = {
    buyer: formValues,
    items: cart, //'Los del carrito'
    totalPrice: getTotalPrice(cart),
    date: new Date().toISOString()
  }

  //validación del formulario

  

  //eventos del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Se envía el formulario')
    try {
      setSuccess(true);
      const response = await createItem(dataOrder, 'orders');
      setOrderNumber(response);
      
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  const cancelOrder = async () => {
    try {
      const response = await deleteItem(orderNumber,'orders');
      console.warn(response);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      { success ? 
        <>
         { 
            orderNumber ?
            (<div>
              <p>Tu compra se generó con el número de orden { orderNumber }</p>
              
              <button className="button button-primary"
                onClick={cancelOrder}
              >Cancelar orden</button>
            
            </div>)
            : 
            <p>procesando compra</p>
          }    
        </>
       
      :
      
      (<form className="form" onSubmit={handleSubmit}>

      <h2>Ingresa tus datos para generar la compra</h2>
      <div className="form__group">
        <label htmlFor="">First Name:</label>
        <input type="text"
          name="fname"
          value={fname}
          onChange={handleInputChange}
        />
      </div>
      <div className="form__group">
        <label htmlFor="">Last Name:</label>
        <input type="text"
          name="lname"
          value={lname}
          onChange={handleInputChange}
        />
      </div>
      <div className="form__group">
        <label htmlFor="">Email:</label>
        <input type="text"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
      </div>
      <div className="form__group">
        <label htmlFor="">Address:</label>
        <input type="text"
          name="address"
          value={address}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="button button-primary">Finalizar compra</button>
    </form>)
    
    }
    </>
    
  )
}

export default CartForm