import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard';

import './ItemListContainer.scss';

const ItemListContainer = () => {

    const url = "https://run.mocky.io/v3/d03bc1b0-ecf9-4cbe-97a8-073437e7135a"

    const [products, setProducts] = useState([]);

    const getProducts = async ( ) => {
        try {

            const response = await fetch(url);
            const data = await response.json();
            console.table(data);
            setProducts(data);

        } catch (error) {
            console.danger(error)
        }        
    }

    useEffect(() => {
        getProducts();
    }, [])


  return (
    <section className="products-container">
        {
            products.length ? (
                products.map( prod => {
                    return (
                            <ProductCard 
                                key={ prod.id }
                                product={prod}
                            />
                    )
                })
             ) 
            : 
            <p>Cargando productos...</p>
        }

    </section>
  )
}

export default ItemListContainer