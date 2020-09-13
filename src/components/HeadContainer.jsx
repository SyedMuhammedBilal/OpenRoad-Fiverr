import React from 'react'
import cont from '../images/cont.png'
import styles from '../styles/HeadContainer.module.css'

function HeadContainer() {
    return (
        <>
            {/*<section class="text-gray-700 body-font">
                <div style={{border: '5px solid black', marginTop: '5vh'}} class="container mx-auto flex px-5 md:flex-row flex-col items-center">
                    <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                        <img alt="feature" class="object-cover object-center h-full w-full" src={cont} />
                    </div>
                <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center">
                    <h1 style={{fontSize: '5vh', letterSpacing: '4px', textShadow: '2px 2px black', color: 'white'}} class="title-font sm:text-4xl text-3xl mb-4 font-large para text-gray-900">TOP TEN ROADS
                    <br class="hidden lg:inline-block" />TO TRY BEFORE
                    <br class="hidden lg:inline-block" />YOU DIE
                    </h1>
                    <p style={{color: 'black'}} class="mb-8 leading-relaxed">Old school buddies and off-road newbies, Jess and Andy team up on a adventure to tackle a notoriously challenging route from Kathmandu to A Mustang. Old school buddies and off-road newbies, Jess and Andy team up on a adventure to tackle a notoriously</p>
                    <div class="flex justify-center">
                    <button style={{fontWeight: 600}} class="inline-flex cont-btn py-2 px-6">READ NOW</button>
                    </div>
                </div>
                </div>
            </section>*/}
            <div className={styles.maindiv1}>
            <div className={styles.cardDiv1}>
                <img height={120} src={cont} alt="bike" />
                <div className={styles.cardContent1}>
                <h2>TOP TEN ROADS TO TRY BEFORE YOU DIE</h2>
                <br />
                <br />
                <p>14-SEP-2020</p>
                <p>
                    Remember though , that if you do buy new gear break it in before the
                    journey so that no comfort or compability issues hamper your riding
                    enjoyment Remember though ,that if you do buy new gear break it in
                    before the journey so that no comfort or compablity issues hamper
                    your riding enjoyment. Remember though , that if you do buy new gear
                    break it in before the journey so that no comfort or compability
                    issues hamper your riding enjoyment.
                </p>
                <button style={{fontWeight: 600, border: '1px solid black', width: '140px', marginTop: '6%'}} class="inline-flex cont-btn py-2 px-6">READ NOW</button>
            </div>
            </div>
            </div>
        </>
    )
}

export default HeadContainer
