import React from 'react'


import './ProductCard.scss';

const ProductCard = ({ product }) => {
  return (
    <article className="product-card">
        <div className="product-card__img">
            <img src={ product.img } alt="" />
        </div>
        <div className="product-card__detail">
            <h3> { product.name } </h3>
            <span></span>
        </div>
    </article>
  )
}

export default ProductCard