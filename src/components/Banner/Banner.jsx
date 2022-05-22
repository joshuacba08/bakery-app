import React from 'react';

import './Banner.scss';

const Banner = ({img, title, subtitle, imgPosition="center"}) => {
  return (
    <section className="banner">
        <img className={`img-position-${imgPosition}`} src={img} alt={`fondo banner para ${title}`} />
        <h2>{title}</h2>
        <p>{subtitle}</p>
    </section>
  )
}

export default Banner