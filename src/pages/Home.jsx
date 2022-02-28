import React from 'react';
import HeroContainer from '../components/HeroContainer/HeroContainer';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';

import './styles/Home.scss';

const Home = () => {
  return (
    <main>
       <HeroContainer />
       <ItemListContainer /> 
    </main>
  )
}

export default Home