import React from 'react'
import Header from './Components/Header/Header'
import Section from './Components/Section/Section'
import Footer from './Components/Footer/Footer'
import styles from './App.module.css'

const App = () => {
  return (
    <div className={styles.main} >
      <Header/>
      <Section/>
      <Footer/>
    </div>
  )
}

export default App