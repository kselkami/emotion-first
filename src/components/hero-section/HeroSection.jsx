import React from 'react'
import styles from "./HeroSection.module.css"

const HeroSection = ({children}) => {
  return (
    <div className={styles.container}>
        <div className={styles.overlay}>
            {children}
        </div>
    </div>
  )
}

export default HeroSection