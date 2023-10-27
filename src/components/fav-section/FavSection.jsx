import React from 'react'
import styles from './FavSection.module.css'
import FavCard from '../fav-card/FavCard'

const cards = [
    {
        imageUrl: 'https://images.pexels.com/photos/13420066/pexels-photo-13420066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Giza Pyramids',
        subtitle: 'A wonderful place to visit'
    },
    {
        imageUrl: 'https://images.pexels.com/photos/13203904/pexels-photo-13203904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Machu Picchu',
        subtitle: 'A wonderful place to visit'
    },
    {
        imageUrl: 'https://images.pexels.com/photos/17857033/pexels-photo-17857033/free-photo-of-lake-with-forest-and-mountains-behind.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        title: 'Mount Fuji',
        subtitle: 'A wonderful place to visit'
    },
    {
        imageUrl: 'https://images.pexels.com/photos/10899933/pexels-photo-10899933.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        title: 'Angkor Wat',
        subtitle: 'A wonderful place to visit'
    },
]

const FavSection = () => {
  return (
    <section className={styles.container}>

        <div className={styles.heading}>
            <p>Find the best spots for you</p>
            <h2>Favourite spots</h2>
        </div>

        <div className={styles.card_container}>
            {
                cards.map(card => (
                    <FavCard props={card} />
                ))
            }
        </div>

        <div className={styles.button_container}>
            <button className={styles.fav_button}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.fav_button_svg}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>

            </button>
            <button className={styles.fav_button}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.fav_button_svg}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
            </button>
        </div>

    </section>
  )
}

export default FavSection