import React from "react";
import styles from "../styles/Navbar.module.css";

function Nav() {
  return (
    <div className={styles.nav1}>
      <div className={styles.navcont}>
        <h4 className={styles.text}> GET STARTED </h4>
      </div>
      <div className={styles.navcont}>
        <h4 className={styles.text}> SKILLS </h4>
      </div>
      <div className={styles.navcont}>
        <h4 className={styles.text}> GEAR + PACKING </h4>
      </div>

      <div className={styles.navcont}>
        <h4 className={styles.text}> DESTINATIONS </h4>
      </div>
      <div className={styles.navcont}>
        <h4 className={styles.text}> REVIEWS </h4>
      </div>
      <div className={styles.navcont}>
        <h4 className={styles.text}> STORIES </h4>
      </div>
    </div>
  );
}

export default Nav;