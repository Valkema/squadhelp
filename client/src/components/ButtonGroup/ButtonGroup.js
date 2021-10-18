import React from 'react';
import styles from './ButtonGroup.module.sass';
import ButtonItem from './ButtonItem/ButtonItem';
import BTN_CONTENT from './ButtonContent.json';

const ButtonGroup = () => {

    const RenderItems = () => {
       return ( 
        BTN_CONTENT.map((item) => 
        <li key={item.id}>
           <ButtonItem choice={item.choice} title={item.title} />
        </li>));
    }
    
   return (
    <>
        <div className={styles.wrapper}>
            <div className={styles.header}>
                 <p className={styles.header__title}>
                     Do you want a matching domain (.com URL) with your name?
                </p>
                <p className={styles.header__subtitle}>
                If you want a matching domain, our platform will only accept those
                 name suggestions where the domain is available. (Recommended)
                </p>
            </div>
            <ul className={styles.buttons}>
                {RenderItems()}    
            </ul>
        </div>
    </>
    );
}

export default ButtonGroup;