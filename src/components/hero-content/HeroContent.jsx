import React, { useState, useEffect } from 'react'
import styles from './HeroContent.module.css'

const items = [
  {
    number: '01',
    location: 'BOTSWANA',
    subtitle: 'Learn about Botswana National Tourism',
  },
  {
    number: '02',
    location: 'JAPAN',
    subtitle: 'Learn about Japan National Tourism',
  },
  {
    number: '03',
    location: 'SOUTH AFRICA',
    subtitle: 'Learn about South Africa National Tourism',
  },
  {
    number: '04',
    location: 'NAMIBIA',
    subtitle: 'Learn about Namibia National Tourism',
  },
  {
    number: '05',
    location: 'THAILAND',
    subtitle: 'Learn about Thailand National Tourism',
  },
]

const HeroContent = () => {
  
  // the default center item is number 3 
  const [selectedItem, setSelectedItem] = useState(0);
  const [preVal, setPreVal] = useState(selectedItem === 0 ? 4 : selectedItem-1);
  const [nextVal, setNextVal] = useState(selectedItem === 4 ? 0 : selectedItem+1);

  // Test case
  // console.log([preVal,selectedItem,nextVal]);


  // function to loop forwards through scroller items
  const next = function() {
    selectedItem === 4 ? setSelectedItem(0) : setSelectedItem(selectedItem+1);
  }

  // function to loop backwards through scroller items
  const prev = function() {
    selectedItem === 0 ? setSelectedItem(4) : setSelectedItem(selectedItem-1);
  }

  useEffect(() => {
    setNextVal(selectedItem === 4 ? 0 : selectedItem+1);
    setPreVal(selectedItem === 0 ? 4 : selectedItem-1);
  },[selectedItem])

  setInterval(() => {
    next();
  },6000)

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>
            <span>VISIT</span>
            <span>{items[selectedItem].location}</span>
        </h1>
        <h4>{items[selectedItem].subtitle}</h4>
      </div>
      <Scroller props={{selectedItem,preVal,nextVal,prev,next}}/>
    </div>
  )
}


const Scroller = ({props}) => {
  const {selectedItem,preVal,nextVal,prev,next} = props;

  return (
    <div className={styles.scroller}>
          <button onClick={prev} className={styles.scroller_item}>
            <span className={styles.scroller_number}>{items[preVal].number}</span>
          </button>
          <div className={`${styles.scroller_item} ${styles.active}`}>
            <span className={`${styles.scroller_number} ${styles.active}`}>{items[selectedItem].number}</span>
          </div>
          <button onClick={next} className={styles.scroller_item}>
            <span className={styles.scroller_number}>{items[nextVal].number}</span>
          </button>
    </div>
  )
}

export default HeroContent