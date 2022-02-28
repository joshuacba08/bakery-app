import React, { useEffect, useState } from 'react';

import { getProductById } from '../../helpers/getProducts';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = ({ id }) => {

  const [product, setProduct] = useState(null);
  
  
  useEffect(()=>{

    getProductById(id, setProduct);
    console.log(product);

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