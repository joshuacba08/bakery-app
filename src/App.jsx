import React from 'react';
import AppRouter from './routes/AppRouter';
import CartProvider from './context/CartContext';
import './App.scss';

function App() {

  return (
    <CartProvider>
      <AppRouter />
    </CartProvider>
  )
}

export default App

