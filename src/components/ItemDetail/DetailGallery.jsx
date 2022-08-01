import React from 'react'

import './scss/DetailGallery.scss';

const DetailGallery = ({img}) => {
  return (
    <ul className="gallery-grid">
        <li className="gallery-grid__item">
            <img src={img} alt="" />
        </li>
        <li className="gallery-grid__item">
            <img src={img} alt="" />
        </li>
        <li className="gallery-grid__item">
            <img src={img} alt="" />
        </li>
        <li className="gallery-grid__item">
            <img src={img} alt="" />
        </li>

    </ul>
  )
}

export default DetailGallery