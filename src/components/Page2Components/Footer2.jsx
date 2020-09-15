import React from "react";
import styles from "../../styles/page2.module.css";

function Footer() {
  return (
    <div className={styles.greenfoot}>
      <h1> DON'T MISS AN UPDATE </h1>
      <p style={{fontFamily: 'Roboto Condensed, sans-serif', letterSpacing: '1px', wordSpacing: '2px'}}> Subscribe to our mailing list for exclusive promotions </p>
      <button className={styles.butn}> SUBSCRIBE </button>
    </div>
  );
}

export default Footer;