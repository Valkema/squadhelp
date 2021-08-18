import React from 'react';
import styles from './FaqList.module.sass';
import FaqListItem from './FaqListItem/FaqListItem';
import FAQ_CONTENT from './faqContent.json';

const FaqList = () => {

    const menuRender = () => {
        return (
            FAQ_CONTENT.map((item) => 
            <li key={item.id}>
                <a href={`#${item.id}`} className={styles.menu_link}>
                {item.title}   
                </a>
            </li>)
        );
    }

    const faqItemsRender = () => {
        return (
            FAQ_CONTENT.map((data) => 
            <li key={data.id} id={data.id} className={styles.list_item}>
            <FaqListItem data={data} />
            </li>)
        );
    }

   return (
    <>
        <div className={styles.wrapper}>
            <div className={styles.menu_container}>
                <ul className={styles.menu}>
                {menuRender()}
                </ul>
            </div>
            <div className={styles.list_container}>
                <ul className={styles.list}>
                    {faqItemsRender()}
                </ul>    
            </div>
        </div>
    </>
    );
}

export default FaqList;