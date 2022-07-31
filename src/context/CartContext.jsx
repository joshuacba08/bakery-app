import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = (props) => {
    /*Métodos y funciones, states, etc*/
    const [ cart, setCart ] = useState([]);

    const addToCart = (item, qty) => {
        const newItem = {...item, qty};

        if(cart.some(product => product.id == newItem.id)){
            /*cuando el carrito ya tiene el producto que se está pasando*/ 
            console.warn('El producto ya está en el carrito');
            const newCart = cart.map( product =>{
                if(product.id == newItem.id){
                    product.qty = product.qty + newItem.qty;
                }
                return product;
            });
            setCart(newCart);
        }else{
            /*Cuando el carrito no tiene el producto*/
            setCart([...cart, newItem]);
        }


    }

    return(
        <CartContext.Provider
            value={{
                /*Acá va todo lo que quiero que se distribulla a través del context*/
                cart,
                setCart,
                addToCart    
            }}
        >
            { props.children }
        </CartContext.Provider>
    );

};

export default CartProvider;