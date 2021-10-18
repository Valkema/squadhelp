import React, { useState }   from 'react';
import styles from './ButtonItem.module.sass';

const ButtonItem = (props) => {
 const {id, choice, title} = props;

 const [activeId, setActiveId] = useState('2');
    
   return (
    <>
        <div className={styles.wrapper}>
            <div className={id === activeId ? styles.card__active : styles.card}
            onClick = {() => { activeId === id ? setActiveId('') : setActiveId(id)}}>
                <p className={styles.card__choice}>{choice}</p>
                <p className={styles.card__title}>{title}</p>
            </div>
        </div>
    </>
    );
}

export default ButtonItem;