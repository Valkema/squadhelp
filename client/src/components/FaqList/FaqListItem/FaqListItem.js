import React from 'react';
import styles from './FaqListItem.module.sass';

const FaqList = (props) => {
    const {data} = props;

    const submenuRender = (arr) => {
        return (
        arr.map((i) => 
            <li key={i.id} className={styles.item_container}>
                <div className={styles.subtitle_container}>
                    <p className={styles.subtitle}>{i.subtitle}</p>
                    <i class="fas fa-arrow-right"></i>                   
                </div>
                <p className={styles.submenu_info}>
                   <span >{i.info.txt1}</span>
                   {i.info.link ? <a href={i.info.link.path}>{i.info.link.name}</a> : ''}
                   {i.info.txt2 ? <span>{i.info.txt2}</span> : ''}
                   {!i.info.info_list ? '' :
                   <ul>
                       {i.info.info_list.map((item) =>
                        (
                            <li key={item.id}>
                                {item.text1 ? <span>{item.text1}</span> : ''}
                                {item.text2 ? <span>{item.text2}</span> : ''}
                                {item.link ? <a href={item.link.path}>{item.link.name}</a> : ''}
                            </li>
                        )
                       )}
                    </ul>}
                </p>
            </li>
        ));}
    
    return (
    <>
        <h6>{data.title}</h6>
        <ul className={styles.item}>{submenuRender(data.content)}</ul>
    </>
    );
}
    
export default FaqList;