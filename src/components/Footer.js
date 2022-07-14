import React from 'react';
import styles from "./Footer.module.css";
import icon1 from './iconmonstr-email-7.svg'
import icon2 from './iconmonstr-github-1.svg'

const Footer = () => {
    return(
        <div className={styles.footer}>
            <div className={styles.links}>
            <a href='https://github.com/KgSolomon'><img src={icon2} className={styles.link} alt='icon'/></a>
            <a href='mailto: gramoturgip@gmail.com'><img src={icon1} alt='icon' /></a>
            </div>
            <h5>
              &copy;{new Date().getFullYear()} Denis Ivanov | All rights reserved
            </h5>
        </div>
    )
}

export default Footer;