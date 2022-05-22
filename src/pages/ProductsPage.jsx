import React from 'react'
import Banner from '../components/Banner/Banner'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'

const ProductsPage = () => {
  return (
    <main>
        <Banner title="Productos" subtitle="Viví la experiencia Bakery" img="https://images.pexels.com/photos/4913487/pexels-photo-4913487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
        <ItemListContainer />
    </main>
  )
}

export default ProductsPage