import React, {useState} from 'react'
import Banner from '../components/Banner/Banner';
import Cart from '../components/Cart/Cart';
import CartForm from '../components/CartForm/CartForm';
import './styles/CartPage.scss';

const CartPage = () => {

  const [showForm, setShowForm] = useState(false);
  return (
    <main className="main">
        <Banner title="Carrito de compras" subtitle="Estás a un paso de finalizar tu compra." img="https://images.pexels.com/photos/5237707/pexels-photo-5237707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>

        <h1>Resumen de compras</h1>
        {

          showForm ? <CartForm /> : <Cart />

        }
        

        <button onClick={()=>{setShowForm(!showForm)}}>
          {showForm ? 'Volver Atrás' : 'Continuar'}
        </button>


    </main>
  )
}

export default CartPage