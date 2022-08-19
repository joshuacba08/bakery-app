import React from 'react';
import Banner from '../components/Banner/Banner';
import CartForm from '../components/CartForm/CartForm';

import './styles/Checkout.scss';
const Checkout = () => {
  return (
    <main className="checkout">
        <Banner 
            title="Checkout" 
            subtitle="Tenemos los mejores medios de pago" 
            img={"https://images.pexels.com/photos/1070946/pexels-photo-1070946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
            imgPosition={'top-50'}
        />

        <CartForm />
    </main>
  )
}

export default Checkout