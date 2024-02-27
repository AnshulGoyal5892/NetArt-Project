import React from 'react'
import styles from './Section.module.css'
import award from '../../images/reward.png'
import image2 from '../../images/image2.png'
import image1 from '../../images/image3.png'

const Section = () => {
  return (
    <div className={styles.mainSection} >
      <div className={styles.section1} >
        
        <div className={styles.imageDiv} >
          <img src={award} className={styles.award} alt='award' />
        </div>
        <span className={styles.subSection} >
          <h3>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h3>
          <ul>
            <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
            <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
          </ul>
          <img src={image2} className={styles.image2} alt='image2' />
          <p>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
        </span>
      </div>

      <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
      <div className={styles.imageDiv3}>
          <img src={image1} className={styles.image3}  alt='award' />
      </div>
      <p className={styles.content3} >Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
      <hr className={styles.line} />
    </div>
  )
}

export default Section