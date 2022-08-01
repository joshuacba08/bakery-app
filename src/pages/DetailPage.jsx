import React from 'react';
import { useParams } from 'react-router-dom';
import Banner from '../components/Banner/Banner';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';

const DetailPage = () => {

  const { id } = useParams(); //cualquier cosa que venga en el useParams es un string
 
  return (
    <main>
      <Banner title="Detalle del producto" subtitle="Conocé más acerca de este producto" img="https://images.pexels.com/photos/5634637/pexels-photo-5634637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />

      <ItemDetailContainer id={id} />


    </main>
  )
}

export default DetailPage