import React from 'react'
import { MdMenu } from "react-icons/md";
import logo from '../../assets/images/logo-dark.png';
import CartWidget from '../../components/CartWidget/CartWidget';

import './NavBar.scss';

const NavBar = () => {
  return (
    <header className="header-container">
        
      <div className="barnav-container">
        <MdMenu className="md-menu"/>
        <img className="logo" src={ logo } alt="" />
        <CartWidget />
      </div>

    </header>
  )
}

export default NavBar