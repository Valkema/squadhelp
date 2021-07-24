import React, {useState, useEffect} from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './HowItWorksPage.module.sass';
import CONSTANTS from '../../constants';

const HowItWorks = (props) => {



    return (
    <div>
        <Header/>

        <div>
            <span>World&prime;s &num;1 Naming Platform!</span>
            <h3>How Does Squadhelp Work?</h3>
            <p>Squadhelp helps you come up with a great 
            name for your business by combining the 
            power of crowdsourcing with sophisticated 
            technology and Agency-level validation services.
        </p>
        </div>
        <div> Play
            <iframe
                  title="Wistia video player"
                  allowFullScreen
                  frameBorder="0"
                  scrolling="no"
                  src="https://fast.wistia.net/embed/iframe/vfxvect60o"
                />
        </div>
        <div>
            <img src={`${CONSTANTS.STATIC_IMAGES_PATH}`} alt='title_img'/>
        </div>
        <span>Our Services</span>
            <Footer/>

    </div>
    );
};

export default HowItWorks;