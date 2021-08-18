import React, { useState } from 'react';
import styles from './NavMenu.module.sass';
import CONSTANTS from '../../constants';


const SubmenuItemsRender = (item)  =>{
   return (item.ITEMS.map((item, index) => 
        <li key={index}>
          <a href={item.match(/How It Works/) ? "/how-it-works" : "https://google.com"}>
            {item}
         </a>
        </li>)
      );
  }

const  MenuItemsRender = (item) => (
    <li key={item.TITLE}>
      <span>{item.TITLE}</span>
      <img
        src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
        alt="menu"
      />
      <ul>
      {SubmenuItemsRender(item)}
      </ul>
    </li>
  );

const MenuRender = ()  =>{
  return CONSTANTS.NAV_ITEMS.map((item) => MenuItemsRender(item));
}



const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const OpeningMobileMenu = () => setIsOpen(!isOpen);

    return (
    <div className = {isOpen ? styles.open_mob_menu : styles.closed_mob_menu}>
        <div className = {styles.menu_icon} onClick={OpeningMobileMenu}>
        <span> </span>
        </div>
        <ul>
            {MenuRender()}
        </ul>        
    </div>
    );
}

export default NavMenu;