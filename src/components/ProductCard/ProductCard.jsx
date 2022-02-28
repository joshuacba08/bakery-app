import React from 'react';
import { Link } from 'react-router-dom';


import './ProductCard.scss';

const ProductCard = ({ product }) => {
  return (
    <article className="product-card">
        <div className="product-card__img">
            <img src={ product.img } alt="" />
        </div>
        <div className="product-card__detail">
            <Link to={`/product/${ product.id }`}>
              <h3> { product.name } </h3>
            </Link>
            <span> ${ product.price } </span>
        </div>
    </article>
  )
}

export default ProductCard