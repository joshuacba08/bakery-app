import React from 'react';
import { Link } from 'react-router-dom';


import './ProductCard.scss';

const ProductCard = ({ product }) => {

  const { image, productName, id , price } = product;

  return (
    <article className="product-card">
        <div className="product-card__img">
            <img src={ image } alt="" />
        </div>
        <div className="product-card__detail">
            <Link to={`/product/${ id }`}>
              <h3> { productName } </h3>
            </Link>
            <span> ${ price } </span>
        </div>
    </article>
  )
}

export default ProductCard