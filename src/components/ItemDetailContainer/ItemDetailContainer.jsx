import React, { useEffect, useState } from 'react';
import { getItemById } from '../../helpers/firestore.controller';

// import { getProductById } from '../../helpers/getProducts'; //antes de usar firebase

import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = ({ id }) => {

  const [product, setProduct] = useState(null);

  const getItemFromFirebase = async () => {
    try {
      const item = await getItemById(id, 'products');
      setProduct(item);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(()=>{
    // getProductById(id, setProduct);//Antes de firebase
    getItemFromFirebase();

  }, []);

  


  return (

    <div>

      { 
        product ?

        <ItemDetail product = {product} />

        : <p>Cargando producto...</p>
      }

    </div>

  )
}

export default ItemDetailContainer