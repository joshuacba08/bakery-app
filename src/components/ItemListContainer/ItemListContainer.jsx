import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';

import './ItemListContainer.scss';

const ItemListContainer = () => {

    const url = "https://run.mocky.io/v3/d03bc1b0-ecf9-4cbe-97a8-073437e7135a"

    const { category } = useParams();
    console.log(category)
    const [products, setProducts] = useState([]);

    const getProducts = async ( ) => {
        try {

            const response = await fetch(url);
            const data = await response.json();
            console.table(data);
            if(category){
                /*Cuando sí solicito una categoría*/
                const filtrado = data.filter( el => el.category === category);
                setProducts(filtrado);
            }else{
                /*Cuando no pase una categoria*/
                setProducts(data);
            }
            

        } catch (error) {
            console.warn(error)
        }        
    }

    useEffect(() => {
        getProducts();
    }, [category])


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