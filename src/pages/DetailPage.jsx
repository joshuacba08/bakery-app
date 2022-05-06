import React from 'react';

import { useParams } from 'react-router-dom';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';

const DetailPage = () => {

  const { id } = useParams(); //cualquier cosa que venga en el useParams es un string
 
  return (
    <main>
      <h1>Detalle de Producto {id}</h1>
      <ItemDetailContainer id={id} />


    </main>
  )
}

export default DetailPage