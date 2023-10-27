import React from 'react'
import styles from './HeroArticle.module.css'

const HeroArticle = ({ index, selectedArticle }) => {
    
  return (
    <div
    style={{
        borderBottom: index === selectedArticle ? '2px solid var(--accent-col)' : '',
        color: index === selectedArticle ? 'var(--text-primary)' : '',
    }}
    className={styles.container}>
        <div className={styles.article_left}>
            <svg
            style={{
                stroke: index === selectedArticle ? 'var(--accent-col)' : '',
            }}
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.article_icon}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
            </svg>
        </div>
        <div className={styles.article_right}>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <a
            style={{
                color: index === selectedArticle ? 'var(--text-primary)' : '',
            }}
            href='#' className={styles.read_more}>
                <p>ReMore</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className={styles.read_more_icon}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
            </a>
        </div>
    </div>
  )
}

export default HeroArticle