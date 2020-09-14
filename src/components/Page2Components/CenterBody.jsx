import { Link } from "gatsby";
import React from "react";
import styles from "../../styles/page2.module.css";

function CenterBody() {
  return (
    <div className={styles.bodymain}>
      <div className={styles.bodyContent}>
        <h1>
        <span>
            MELBOURNE HAS ENOUGH TO KEEP VISITOR ENGAGED FOR MONTHS -
            BARS,GALLERIES,LIVE MUSIC, SHOPPING .BUT THE GREAT OCEAN ROAD
            BECHONS:A CLASSIC AUSSIE ROAD TRIP.
        </span>
        </h1>
        <br />
        <h2>WHAT IS MICRO DESIGN?</h2>
        <br />
        <p>This section is for what you will wear on the motorcycle trip</p>

        <p>
          you probably already have most of this .but you may find that a newer
          piece of gear is better suited to your
          <Link to="" style={{color: 'green', textDecoration: 'underline'}}> intended destination</Link>
        </p>

        <p>
          Remember though , that if you do buy new gear break it in before the
          journey so that no comfort or compability issues hamper your riding
          enjoyment.
        </p>
        <ul>
          <li> list item one</li>
          <li>list item two</li>
          <li> list item three</li>
        </ul>

        <h2>WHAT IS MICRO DESIGN?</h2>

        <p>This section is for what you will wear on the motorcycle trip</p>

        <p>
          you probably already have most of this .but you may find that a newer
          piece of gear is better suited to your
          <Link to="" style={{color: 'green', textDecoration: 'underline'}}> intended destination</Link>
        </p>

        <p>
          Remember though , that if you do buy new gear break it in before the
          journey so that no comfort or compability issues hamper your riding
          enjoyment.
        </p>
      </div>
    </div>
  );
}

export default CenterBody;