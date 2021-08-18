import React from 'react';
import styles from './StatisticContainer.module.sass';
import CONSTANTS from '../../constants';


const StatisticContainer = () => {
    return (
        <>
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <div className={styles.card_img}>
                    <img src={[CONSTANTS.STATIC_IMAGES_PATH,'statistic/stars.svg'].join('')} alt='stat_icon'/>
                </div>
                <p><span>4.9 out of 5 stars </span>from 25,000+ customers.</p>   
            </div>
            <div className={styles.card}>
                <div className={styles.card_img}>
                    <img src={[CONSTANTS.STATIC_IMAGES_PATH,'statistic/img2.png'].join('')} alt='stat_icon'/>
                </div>
                <p>Our branding community stands <span>200,000+ </span> strong.</p>     
            </div>
            <div className={styles.card}>
                <div className={styles.card_img}>
                    <img src={[CONSTANTS.STATIC_IMAGES_PATH,'statistic/sharing-files.svg'].join('')} alt='stat_icon'/>
                </div>
                <p><span>140+ Industries </span>supported across more than <span>85 countries </span>– and counting. </p>   
            </div>
        </div>
        </>
    );
}

export default StatisticContainer;

