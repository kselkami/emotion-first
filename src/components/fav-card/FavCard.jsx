import React from 'react'
import styles from './FavCard.module.css'

const FavCard = ({props}) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_image_container}>
        <span className={styles.card_image_filter}></span>
        <img className={styles.card_image} src={props.imageUrl} alt="giza temples"/>
      </div>
      <div className={styles.card_text}>
        <h4>{props.title}</h4>
        <p>{props.subtitle}</p>
      </div>
    </div>
  )
}

export default FavCard