import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import useForm from '../../hooks/useForm';

const CartForm = () => {

  //me traigo el cart
  const { cart } = useContext( CartContext );
  //datos del formulario del formulario
  const [ formValues, handleInputChange ] = useForm({
    name:'',
    lastName:'',
    email:'',
    telephone:''
  });

  const dataOrder = {
    buyer: formValues,
    items: cart, //'Los del carrito'
    totalPrice: 1234,
    date: new Date().toISOString()
  }

  //validación del formulario

  

  //eventos del formulario
  const handleSubmit = () => {
    console.log('Se envía el formulario')
  }

  return (
    <form onSubmit={handleSubmit}>

      <h2>Ingresa tus datos para generar la compra</h2>

    </form>
  )
}

export default CartForm