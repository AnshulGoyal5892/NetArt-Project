import React from 'react'
import styles from './Footer.module.css'
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";

const Footer = () => {
  return (
    <div className={styles.mainFoot} >
        <strong><p className={styles.content3} >C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p></strong>   
        <p className={styles.content3} >CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD & BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE & RESIDENTIAL</p>  
        <div className={styles.foot} >
            <div className={styles.child} >
              <FaPhoneSquareAlt style={{color:'white'}} />
              <p>Toll Free 1800 200 1234</p>
            </div>
            <div className={styles.child} >
              <FaFacebook style={{color:'white'}} />
              <p>www.facebook.com/cripumps</p>
            </div>
            <div className={styles.child} >
              <CiGlobe style={{color:'white',fontWeight:900}}  />
              <p>www.crigroups.com</p>
            </div>
        </div> 
    </div> 
  )
}

export default Footer