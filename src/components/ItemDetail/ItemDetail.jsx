import React, { useContext } from 'react'
import DetailGallery from './detailGallery';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext';
import './scss/ItemDetail.scss';

const ItemDetail = ({product}) => {

  const cartContex = useContext( CartContext );
  const { addToCart } = cartContex;
  return (
    <article className="detail">
        <DetailGallery img={product.image}/>
        <div className="detail__info">
          <h2>{product.productName}</h2>
          <p className="info__price">${product.price}</p>
          <p className="info__description">{product.description}</p>
          <ItemCount onAdd={addToCart} item={product} />
        </div>
    </article>
  )
}

export default ItemDetail