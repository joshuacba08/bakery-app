import React, { useState } from "react";
import HeroSlide from "./HeroSlide";

const HeroContainer = () => {
  const slides = [
    {
      title: "la panadería con más historia",
      subtitle:
        "somos parte de la historia de la ciudad, y eso nos llena de orgullo.",
      img:"https://images.pexels.com/photos/5812847/pexels-photo-5812847.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      id:1
    },
    {
      title: "Date el gusto con nuestros productos",
      subtitle:
        "Conoce toda la variedad de productos que tenemos para ofrecerte.",
      img:"https://images.pexels.com/photos/4916562/pexels-photo-4916562.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      id:2  
    },
    {
      title: "Estamos muy cerca tuyo",
      subtitle:
        "Estamos en el corazón de la ciudad, pero también contamos con muchas sucursales.",
      img:"https://images.pexels.com/photos/776938/pexels-photo-776938.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      id:3
    },
  ];

  const [index, setIndex] = useState(0);

  const changeSlide = (i) => {
    setIndex( i );
  }

  return <HeroSlide 
            slide={slides[index]}     
            changeSlide={changeSlide} 
            arrayIndex={slides.map(el=> el.id)}/>;
};

export default HeroContainer;
