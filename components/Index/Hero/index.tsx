import React from 'react'
import Carousel from './carousel'
import styles from './hero.module.css'

const Hero = () => {
  return (
    <section
      className="mx-auto "
      id="home"
      style={{
        // backgroundImage: 'url("/images/bg1.webp")',
        // background: 'linear-gradient(45deg, #fffae3, #ffd700)',
        // backgroundSize: 'cover', inline-block w-full z-index-1
        maxHeight: '80vh',
        marginTop: '-80px',
      
      }}
    >
      <div className={styles['context']}>
        <div className="w-full -z-1 leading-8" style={{marginTop:'-80px'}}>
          <Carousel />
        </div>
      </div>
      <div className={styles['area']}>
        <ul className={styles['circles']}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </section>
  )
}

export default Hero
