import React from "react";
import styles from "../../styles/page2.module.css";

function Header() {
  return (
    <div className={styles.head}>
      <div className={styles.headerSlogan}>
        <h1>How To Travel Nepal By Motorcycle</h1>
        <p style={{color: 'white'}}>
            <span>
                From motorcycle here to routes . luggage , insurance and permits
                everything you need to know to travel nepal on motorcycle
            </span>
        </p>
      </div>
    </div>
  );
}

export default Header;