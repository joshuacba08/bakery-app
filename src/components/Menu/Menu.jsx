import React from "react";
import { NavLink } from "react-router-dom";
import { MdMenu, MdExpandMore } from "react-icons/md";
import menu from "../../assets/data/links";
import SubMenu from "./SubMenu";

import "./scss/Menu.scss";


const Menu = () => {
  let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <nav className="links">
      <ul className="links-container">
        {menu.map((link) => {
          return (
            <li className="links-container__items" key={link.id}>
              <NavLink
                to={link.path}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                {link.name}
              </NavLink>
              {link.subPath.length > 0 && <MdExpandMore />}
              {link.subPath.length > 0 && <div className="sub-menu"><SubMenu subLinks={link.subPath} mainPath={link.path}/></div>}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;
