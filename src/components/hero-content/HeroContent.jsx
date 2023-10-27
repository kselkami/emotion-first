import React, { useState } from 'react'
import styles from './HeroContent.module.css'

const items = [
  {
    number: '01',
    title: ['VISIT', 'JAPAN'],
    subtitle: '',
  },
  {
    number: '02',
    title: ['VISIT', 'JAPAN'],
    subtitle: '',
  },
  {
    number: '03',
    title: ['VISIT', 'JAPAN'],
    subtitle: '',
  },
  {
    number: '04',
    title: ['VISIT', 'JAPAN'],
    subtitle: '',
  },
  {
    number: '05',
    title: ['VISIT', 'JAPAN'],
    subtitle: '',
  },
]

const HeroContent = () => {
  const [selectedItem, setSelectedItem] = useState(3);

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>
            <span>VISIT</span>
            <span>BOTSWANA</span>
        </h1>
        <h4>Welcome to Japan National Tourism</h4>
      </div>
      <Scroller selectedItem={selectedItem}/>
    </div>
  )
}

const Scroller = ({selectedItem}) => {
  return (
    <div className={styles.scroller}>
      {
        items.map((info, index)=>(
          <ScrollerItem index={index} info={info} selectedItem={selectedItem}/>
        )).filter((i, index) => {
          return index === selectedItem || index === selectedItem - 1 || index === selectedItem + 1;
        })
      }
  </div>
  )
}

const ScrollerItem = ({info, index, selectedItem}) => {
  return (
    <div className={index===selectedItem ? `${styles.scroller_item}` : `${styles.scroller_item} ${styles.active}`}>
      <span className={index===selectedItem ? `${styles.scroller_number} ${styles.active}` : `${styles.scroller_number}`}>{info.number}</span>
      <span className={index===selectedItem ? `${styles.scroller_line} ${styles.active}` : `${styles.scroller_line}`}/>
    </div>
  )
}

export default HeroContent