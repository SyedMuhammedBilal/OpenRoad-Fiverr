import React from "react";
import BikeCard from "../images/bike.jpg";
import styles from "../styles/Card2.module.css";

function Cards() {
  return (
    <div className={styles.maindiv1}>
      <div className={styles.cardDiv1}>
        <img height={120} src={BikeCard} alt="bike" />
        <div className={styles.cardContent1}>
          <h2>TOP TEN ROADS TO TRY BEFORE YOU DIE</h2>
          <p>14-SEP-2020</p>
          <p>
            Remember though , that if you do buy new gear break it in before the
            journey so that no comfort or compability issues hamper your riding
            enjoyment Remember though , that if you do buy new gear break it in
            before the journey so that no comfor or compability issues hamper
            your riding enjoyment. Remember though
          </p>
        </div>
      </div>
      <br />

      <div className={styles.cardDiv1}>
        <img height={220} src={BikeCard} alt="bike" />
        <div className={styles.cardContent1}>
          <h2>TOP TEN ROADS TO TRY BEFORE YOU DIE</h2>
          <p>14-SEP-2020</p>
          <p>
            Remember though , that if you do buy new gear break it in before the
            juroney so that no comfort or compability issues hamper your riding
            enjoyment Remember though , that if you do buy new gear break it in
            before the jurney so that no comfort or compability issues hamper
            your riding enjoyment. Remember though
          </p>
        </div>
      </div>
      <br />

      <div className={styles.cardDiv1}>
        <img height={220} src={BikeCard} alt="bike" />
        <div className={styles.cardContent1}>
          <h2>TOP TEN ROADS TO TRY BEFORE YOU DIE</h2>
          <p>14-SEP-2020</p>
          <p>
            Remember though , that if you do buy new gear break it in before the
            jurney so that no comfort or compability issues hamper your riding
            enjoyment Remember though , that if you do buy new gear break it in
            before the jurney so that no comfort or compability issues hamper
            your riding enjoyment. Remember through
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;