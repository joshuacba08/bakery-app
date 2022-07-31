import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';


import './ProductCard.scss';

const ProductCard = ({ product }) => {
  const { image, productName, id , price } = product;

  const cartContex = useContext( CartContext );
  const { addToCart } = cartContex;

  return (
    <article className="product-card">
        <div className="product-card__img">
            <img src={ image } alt="" />
            <button 
              className='button button-primary'
              onClick={ ()=>{ addToCart(product, 1)} }
            >
              Add to Cart
            </button>
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