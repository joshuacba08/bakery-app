import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard';
import { getProducts } from '../../helpers/getProducts';

import './ItemListContainer.scss';

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        /*uso de fetch con async/await*/
        getProducts(setProducts);

        /*uso de fetch API con promesas --descomentar y comentar "getProducts()' para probar--*/
        // fetch(url)
        //     .then(resp => resp.json())
        //     .then(data => setProducts(data))
        //     .catch(err=> console.log(err));

    }, [])
    


  return (
    <section className="products-container">

        {
            products.length ?          
            (
                products.map( product => {
                    return(
                        <div key={product.name}>
                            <ProductCard product={product} />
                        </div>
                        
                    )
                })
            )
            : <p>Cargando productos...</p>
        }

    </section>
  )
}

export default ItemListContainer