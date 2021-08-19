import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import StatisticContainer from '../../components/StatisticContainer/StatisticContainer';
import FeachuredContainer from '../../components/FeachuredContainer/FeachuredContainer';
import QuestionsContainer from '../../components/QuestionsContainer/QuestionsContainer';
import FaqList from '../../components/FaqList/FaqList';
import Footer from '../../components/Footer/Footer';
import styles from './HowItWorksPage.module.sass';
import CONSTANTS from '../../constants';
import listInfo from './listInfo.json';



const HowItWorks = () => {
    const createList = (items) =>
    items.map((item, ind) => (
      <li key={item.id}>
        <div>
            <span>{`${ind+1}.`}</span>
            <p>{item.content}</p>            
        </div>
      </li>
    ));

    return (
    <> 
     <div className={styles.wrapper}>
        <Header/>
        <div className={styles.how_sq_work_container}>
            <div className={styles.how_sq_work_container__info}>
                <span className={styles.info_accent}>World's #1 Naming Platform!</span>
                <h3>How Does Squadhelp Work?</h3>
                <p>Squadhelp helps you come up with a great 
                name for your business by combining the 
                power of crowdsourcing with sophisticated 
                technology and Agency-level validation services.
                </p>
                <div>
                    <i className="fa fa-play" aria-hidden="true"/>
                    <span>Play Video</span>
                </div>
            </div>
            <div className={styles.how_sq_work_container__img}>
                <img src={[CONSTANTS.STATIC_IMAGES_PATH, 'bg_images/How-it-bg1.png'].join('')} alt='backround_img'/>
            </div>            
        </div>
        <div className={styles.ways_to_use_container}>
            <div  className={styles.ways_to_use_container__title}>
                <span>Our Services</span>
                <h4>3 Ways To Use Squadhelp</h4>
                <p>Squadhelp offers 3 ways to get you a perfect name for your business.</p>
            </div>
            <div  className={styles.ways_to_use_container__cards}>
                <div className={styles.card}>
                    <div className={styles.card__img}>
                         <img src={[CONSTANTS.STATIC_IMAGES_PATH, 'icons/Icon1.png'].join('')} alt='icon'/>
                    </div>
                    <p className={styles.card__title}>Launch a Contest</p>
                    <p className={styles.card__desc}>
                    Work with hundreds of creative experts to get custom name suggestions for your business or brand. 
                    All names are auto-checked for URL availability.
                    </p> 
                    <div className={styles.card__link_btn}>
                        <Link to='/start-contest' className={styles.card__link}>
                            <span>Launch a contest</span>
                        </Link>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.card__img}>
                         <img src={[CONSTANTS.STATIC_IMAGES_PATH, 'icons/Icon2.png'].join('')} alt='icon'/>
                    </div>
                    <p className={styles.card__title}>Explore Names For Sale</p>
                    <p className={styles.card__desc}>
                    Our branding team has curated thousands of pre-made names that you can purchase instantly. 
                    All names include a matching URL and a complimentary Logo Design
                    </p> 
                    <div className={styles.card__link_btn}>
                        <Link to='#' className={styles.card__link}>
                            <span>Explore Names For Sale</span>
                        </Link>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.card__img}>
                         <img src={[CONSTANTS.STATIC_IMAGES_PATH, 'icons/Icon3.png'].join('')} alt='icon'/>
                    </div>
                    <p className={styles.card__title}>Agency-level Managed Contests</p>
                    <p className={styles.card__desc}>
                    Our Managed contests combine the power of crowdsourcing with the rich experience 
                    of our branding consultants. Get a complete agency-level experience at a fraction of Agency costs
                    </p> 
                    <div className={styles.card__link_btn}>
                        <Link to='#' className={styles.card__link}>
                            <span>Learn More</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.naming_contest_container}> 
            <div className={styles.naming_contest_container__title}>
                <div className={styles.title__img}>
                    <img src={[CONSTANTS.STATIC_IMAGES_PATH, 'icons/Icon4.png'].join('')} alt='icon'/>
                </div>
                <h4>How Do Naming Contests Work?</h4>
            </div>
            <div className={styles.naming_contest_container__info}>
                <div className={styles.info__img}>
                    <img src={[CONSTANTS.STATIC_IMAGES_PATH, 'bg_images/How-it-bg2.png'].join('')} alt='backgroung_img'/>
                </div>
                <div className={styles.info__list}>
                    <ul>{createList(listInfo)}</ul>
                </div>
            </div>
        </div>
        <FaqList/>
        <div className={styles.get_start_container}>
            <p className={styles.get_start_container__title}>Ready to get started?</p>
            <p>Fill out your contest brief and begin receiving custom name suggestions within minutes.</p>
            <div>
                <Link to='/start-contest' className={styles.get_start_container__link}>
                    <span>Start A Contest</span>
                </Link>
            </div>
        </div>
        <StatisticContainer/>
        <QuestionsContainer/>
        <FeachuredContainer/>
        <Footer/>
     </div>
    </>
    );
};

export default HowItWorks;