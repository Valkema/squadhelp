import React from 'react';
import styles from './Footer.module.sass';
import CONSTANTS from '../../constants';


const  topFooterItemsRender = (item) => (
    <div key={item.TITLE}>
      <h4>{item.TITLE}</h4>
      {item.ITEMS.map((i) => <a key={i} href={i.match(/How It Works\?*/) ? "/how-it-works" : "https://google.com"}>{i}</a>)}
    </div>
  );

const topFooterRender = ()  =>{
  return CONSTANTS.FOOTER_ITEMS.map((item) => topFooterItemsRender(item));
}


const Footer = () => {
    return (
      <div className={styles.footerContainer}>
        <div className={styles.footerTop}>
          <div>
            {topFooterRender()}
          </div>
        </div>
      </div>
    );
}


export default Footer;
