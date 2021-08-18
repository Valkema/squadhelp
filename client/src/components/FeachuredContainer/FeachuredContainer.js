import React from 'react';
import styles from './FeachuredContainer.module.sass';
import CONSTANTS from '../../constants';


const FeachuredContainer = () => {
    return (
        <>
        <div className={styles.wrapper}>
            <div className={styles.images}>
                <img src={`${CONSTANTS.STATIC_IMAGES_PATH}sponsors/Forbes-inactive.png`} alt="forbes" />
                <img src={`${CONSTANTS.STATIC_IMAGES_PATH}sponsors/Forbes-active.png`} alt="forbes" />
            </div>
            <div className={styles.images}>
                <img
                src={`${CONSTANTS.STATIC_IMAGES_PATH}sponsors/the_next_web_inactive.png`}
                alt="web"
                />
                <img src={`${CONSTANTS.STATIC_IMAGES_PATH}sponsors/the_next_web_active.png`} alt="web" />
            </div>
            <div className={styles.images}>
                <img
                src={`${CONSTANTS.STATIC_IMAGES_PATH}sponsors/mashable-inactive.png`}
                alt="mashable"
                />
                <img
                src={`${CONSTANTS.STATIC_IMAGES_PATH}sponsors/mashable-active.png`}
                alt="mashable"
                />
            </div>
        </div>
        </>
    );
}

export default FeachuredContainer;

