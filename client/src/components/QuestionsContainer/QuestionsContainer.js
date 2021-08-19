/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from './QuestionsContainer.module.sass';
import CONSTANTS from '../../constants';


const QuestionsContainer = () => {
    return (
        <>
        <div className={styles.wrapper}>
            <div className={styles.info}>
                <div className={styles.info_wrap}>
                    <div className={styles.info_pay}>
                        <i className ="fas fa-angle-right"></i>
                        <div className={styles.info_pay_content}>
                            <p className={styles.info_pay_content_title}>Pay a Fraction of cost vs hiring an agency</p>
                            <p className={styles.info_pay_content_descr}>For as low as $199, our naming contests and marketplace
                            allow you to get an amazing brand quickly and affordably.</p>
                        </div>
                    </div>
                    <div className={styles.info_pay}>
                        <i className ="fas fa-angle-right"></i>
                        <div className={styles.info_pay_content}>
                            <p className={styles.info_pay_content_title}>Satisfaction Guarantee</p>
                            <p className={styles.info_pay_content_descr}>Of course! We have policies in place to ensure that you
                            are satisfied with your experience.&#160;
                            <a href='#'>Learn more</a></p>
                        </div>
                    </div>
                </div>

            </div>
            <div className={styles.questions}>
                <p className={styles.questions_title}>Questions?</p>
                <p className={styles.questions_info}>Speak with a Squadhelp platform expert to learn more and get your questions answered.</p>
                <div className={styles.questions_btn}>
                    <span>Schedule Consultation</span>
                </div>
                <div className={styles.questions_tel}>
                    <a href='tel:+8773553585'>
                        <img src={`${CONSTANTS.STATIC_IMAGES_PATH}phone.png`} alt="phone" />
                        <span>{CONSTANTS.CONTACT_US.PHONE}</span>   
                    </a>
                    <p>Call us for assistance</p>
                </div>       
            </div>
        </div>
        </>
    );
}

export default QuestionsContainer;

