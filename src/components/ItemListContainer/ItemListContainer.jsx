import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';

import './ItemListContainer.scss';
import { getItemById, getItems, getItemsByCondition } from '../../helpers/firestore.controller';

const ItemListContainer = () => {

    const url = "https://run.mocky.io/v3/d03bc1b0-ecf9-4cbe-97a8-073437e7135a"


    const { category } = useParams();
    const [products, setProducts] = useState([]);

    const getProductsFromDB = async () => {
        try {
            if(!category){
                const arrayProducts = await getItems('products');
                setProducts(arrayProducts);
            }else{
                const arrayProducts = await getItemsByCondition('category','==',category,'products');
                setProducts(arrayProducts);
            }
        } catch (error) {
            console.error(error);        
        }
    }
    const getProducts = async ( ) => {//está función se usaba antes de integrar firebase
        try {
            const response = await fetch(url);
            const data = await response.json();
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
        // getProducts();
        getProductsFromDB();
        
        getItemById('0N7xSB4he6PmNyCFQQ70','products');
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