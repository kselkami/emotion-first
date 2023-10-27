import React, { useState } from 'react'
import styles from './ArticleContainer.module.css'
import HeroArticle from '../hero-article/HeroArticle'

const ArticleContainer = () => {
    const [selectedArticle, setSelectedArticle] = useState(0);

  return (
    <div className={styles.container}>
        {
            [...Array(3)].map((article, index) => (
                <HeroArticle index={index} selectedArticle={selectedArticle}/>
            ))
        }
    </div>
  )
}

export default ArticleContainer