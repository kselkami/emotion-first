import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.container}>
        <span className={styles.nav_logo}>
            <svg className='' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z" clipRule="evenodd" />
            </svg>
            <h3>VISITWORLD</h3>
        </span>        
        <ul className={styles.nav_links}>
            <li style={{color: 'turquoise'}} className={styles.link}>Home</li>
            <li className={styles.link}>Favourites</li>
            <li className={styles.link}>Locations</li>
            <li className={styles.link}>Contact</li>
        </ul>
        <span>
            En
        </span>
    </div>
  )
}

export default Navbar