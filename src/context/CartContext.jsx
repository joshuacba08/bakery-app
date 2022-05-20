import React,{ createContext, useState } from 'react';

export const CartContext = createContext();

/*Defino mi componente de react "CartProvider" */
const CartProvider = (props) => {
    /*Métodos o funciones, states, etc*/
    const [cart, setCart] = useState([]); //guardaré mis productos añadidos 

    //función para añadir productos al carrito
    const addToCart = (item, qty) => {
        const newItem = { ...item, qty }
        setCart([...cart, newItem  ]);
    }

    return(
        <CartContext.Provider value={{
            cart,
            addToCart
        }}>
            { props.children }
        </CartContext.Provider>
    )

};

export default CartProvider;