import React from "react";
import BikeCard from "../../images/bike.jpg";
import styles from "../../styles/page2.module.css";

function Cards() {
  return (
    <div className={styles.maindiv}>
      <h1> MORE LIKE THIS </h1>
      <div className={styles.cardDiv}>
        <img height={220} src={BikeCard} alt="bike" />
        <div className={styles.cardContent}>
          <h2>TOP TEN ROADS TO TRY BEFORE YOU DIE</h2>
          <p>14-SEP-2020</p>
          <p>
            Remember though , that if you do buy new gear break it in before the
            jurney so that no comfor or compability issues hamper your riding
            enjoyment Remember though , that if you do buy new gear break it in
            before the journey so that no comfort or compability issues hamper
            your riding enjoyment. Remember though , that if you do buy new gear
            break it in before the journey so that no comfort or compability
            issues hamper your riding enjoyment.
          </p>
        </div>
      </div>
      <br />

      <div className={styles.cardDiv}>
        <img height={220} src={BikeCard} alt="bike" />
        <div className={styles.cardContent}>
          <h2>TOP TEN ROADS TO TRY BEFORE YOU DIE</h2>
          <p>14-SEP-2020</p>
          <p>
            Remember though , that if you do buy new gear break it in before the
            jurney so that no comfort or compability issues hamper your riding
            enjoyment Remember though , that if you do buy new gear break it in
            before the jurney so that no comfort or compability issues hamper
            your riding enjoyment. Remember though , that if you do buy new gear
            break it in before the jurney so that no comfor or compability
            issues hamper your riding enjoyment.
          </p>
        </div>
      </div>
      <br />

      <div className={styles.cardDiv}>
        <img height={220} src={BikeCard} alt="bike" />
        <div className={styles.cardContent}>
          <h2>TOP TEN ROADS TO TRY BEFORE YOU DIE</h2>
          <p>14-SEP-2020</p>
          <p>
            Remember though , that if you do buy new gear break it in before the
            jurney so that no comfor or compability issues hamper your riding
            enjoyment Remember though , that if you do buy new gear break it in
            before the jurney so that no comfor or compability issues hamper
            your riding enjoyment. Remember though , that if you do buy new gear
            break it in before the jurney so that no comfor or compability
            issues hamper your riding enjoyment.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;