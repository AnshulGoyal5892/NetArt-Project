import React from 'react'
import logo from '../../images/logo.png'
import styles from './Header.module.css'

const Header = () => {
  return (
      <img src={logo} alt="logo" className={styles.logo} />
  )
}

export default Header