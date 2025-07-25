import React from 'react';
import {useNavigate} from 'react-router-dom';
import {heroImg, logo} from '../assets';
import styles from '../styles';
import {Alert} from '../components';
import {useGlobalContext} from '../context';

const PageHOC = (Component, title, description)  => ()=>{
    const navigate = useNavigate();
    const {showAlert} = useGlobalContext();
    return (
        <div className={styles.hocContainer}>
            {showAlert.status && <Alert message={showAlert.message} type={showAlert.type}/>}
            <div className= {styles.hocContentBox}>
                <img src={logo} alt="logo" className={styles.hocLogo} onClick={()=>navigate('/')}/>
                <div className={styles.hocBodyWrapper}>
                    <div className="flex flex-row w-full">
                        <h1 className={`flex ${styles.headText} head-text`}>{title}</h1>
                    </div>
                    <p className={`${styles.normalText} my-10`}>{description}</p>
                    <Component/>
                </div>
            </div>
            <div className="flex flex-1">
                <img src={heroImg} alt="hero-img" className="w-full xl:h-full object-cover"/>
            </div>
        </div>
    )
}

export default PageHOC;