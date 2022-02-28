import React from 'react'

const ItemDetail = ({product}) => {
  return (
    <article>
        <img src={ product.img } />
        <h1>{product.name}</h1>
        <p>${product.price}</p>
    </article>
  )
}

export default ItemDetail