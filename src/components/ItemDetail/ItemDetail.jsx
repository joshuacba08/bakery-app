import React from 'react'

import './ItemDetail.scss';
const ItemDetail = ({product}) => {
  return (
    <article className="detail">
        <img src={ product.image } />
        <h1>{product.productName}</h1>
        <p>${product.price}</p>
    </article>
  )
}

export default ItemDetail