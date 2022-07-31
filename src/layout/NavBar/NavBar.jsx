import React, {useState, useEffect} from 'react'
import { MdMenu } from "react-icons/md";
import logo from '../../assets/images/logo-dark.png';
import CartWidget from '../../components/CartWidget/CartWidget';
import menu from '../../assets/data/links';
import {Link} from 'react-router-dom';

import './NavBar.scss';
import Menu from '../../components/Menu/Menu';

const NavBar = () => {


  const [ resolution, setResolution ] = useState(null);

  useEffect(() => {
    // window.addEventListener('resize', (e) =>{
    //   setResolution(e.target.innerWidth);
    // })
  },[resolution])
  return (
    <header className="header-container">
    
      <div className="barnav-container">
        <MdMenu className="md-menu"/>
        <Link to="/">
          <div className="logo"></div>
        </Link>
        <Menu />
        <Link to="/cart">
          <CartWidget />
        </Link>
        
      </div>

    </header>
  )
}

export default NavBar