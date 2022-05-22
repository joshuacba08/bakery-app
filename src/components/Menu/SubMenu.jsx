import React from 'react'
import { NavLink } from 'react-router-dom';

import './scss/SubMenu.scss';
const SubMenu = ({subLinks, mainPath}) => {
    let activeStyle = {
        color: "#333333",
        textDecoration: "underline"
      };
      let noActive = {
        color: "#333333"
      };
  return (
    <ul className="submenu-container">
        {subLinks.map(subLinks =>{
            return(
                <li className="submenu-container__items" key={subLinks.id}>
                    <NavLink 
                        to={`${mainPath}${subLinks.path}`}
                        style={({ isActive }) => (isActive ? activeStyle : noActive)}
                    >
                        {subLinks.name}
                    </NavLink>
                </li>
            )
        })}
    </ul>
  )
}

export default SubMenu