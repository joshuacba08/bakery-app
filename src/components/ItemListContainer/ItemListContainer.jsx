import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard';

import './ItemListContainer.scss';

const ItemListContainer = () => {

    const url = 'https://run.mocky.io/v3/8c83d4ff-8b8b-433a-98f2-349415402525';

    const [products, setProducts] = useState([]);

    // const getProducts = async () => {

    //     try {
    //         const resp = await fetch(url);
    //         setProducts(resp.json());
    //     } catch (error) {
    //         console.log(error);
    //     }
        

    // }

    useEffect(() => {
        
        // getProducts();
        /*uso de fetch API*/
        fetch(url)
            .then(resp => resp.json())
            .then(data => setProducts(data))
            .catch(err=> console.log(err));

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