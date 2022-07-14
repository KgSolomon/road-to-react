import React from 'react';
import {  Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import logo from './icon.png';

const navbar= () =>{
  return (
  <div className={styles.nav}>
    <div className={styles.container}>
        <a href="/" className={styles.logo} >
            <img src={logo} className={styles.icon} alt="logo"/>
            Todo List
          </a>
        <li>
            <Link to="/" className={styles.link}>Home</Link>
        </li>
        <li>
            <Link to="/new" className={styles.link}>Create List</Link>
        </li>
    </div>
  </div>
  );
}
export default navbar;