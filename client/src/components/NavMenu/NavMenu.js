import React from 'react';
//import { connect } from 'react-redux';
import styles from './NavMenu.module.sass';
import CONSTANTS from '../../constants';

const SubmenuItemsRender = (item)  =>{
    item.ITEMS.map((item) => 
        <li key={item}><a href={item.match(/How It Works/) ? "/how-it-works" : "https://google.com"}>{item}
        </a></li>);
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
    return (
    <div className={styles.nav}>
        <ul>
            {MenuRender()}
        </ul>
    </div>
    );
}

export default NavMenu;