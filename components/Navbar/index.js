"use client"
import React from 'react'
import {useRouter} from 'next/navigation'
import styles from '/styles/navbar.module.css';

const Navbar = () => {
  const router = useRouter();
  const pushToHome = () => {
      router.push(`/`);
  };

  const pushToExperience = () => {
      router.push(`/experience`); 
  };
  return (
    <div className={styles.navbarBody}>
      <section className={styles.buttonSection}>
        <img className="logo" src="/uploads/logo.jpg" alt="" style={{maxHeight: '80px'}}/>
        <button className={styles.homeButtonStyle} onClick={pushToHome}>Home</button>
        <button className={styles.buttonStyle} onClick={pushToExperience}>Experience</button>
      </section>
    </div>
  );
};

export default Navbar;