import { Link } from 'gatsby'
import React from 'react'
import cont from '../images/cont.png'
import styles from '../styles/HeadContainer.module.css'

function HeadContainer() {
    return (
        <>
            <div className={styles.maindiv1}>   
            <div className={styles.cardDiv1}>
                <img height={120} src={cont} alt="bike" />
                <div className={styles.cardContent1}>
                <h2><span>TOP TEN ROADS TO TRY BEFORE YOU DIE</span></h2>
                <br />
                <br />
                <p>14-SEP-2020</p>
                <p style={{letterSpacing: '1px'}}>
                    Remember though , that if you do buy new gear break it in before the
                    journey so that no comfort or compability issues hamper your riding
                    enjoyment Remember though ,that if you do buy new gear break it in
                    before the journey so that no comfort or compability issues hamper
                    your riding enjoyment. 
                </p>
                <Link exact to='/blog' style={{fontWeight: 600, border: '1px solid black', width: '140px', marginTop: '6%', cursor: 'pointer', color: 'black', textDecoration: 'none'}} class="inline-flex cont-btn py-2 px-6">READ NOW</Link>
            </div>
            </div>
            </div>
        </>
    )
}

export default HeadContainer
