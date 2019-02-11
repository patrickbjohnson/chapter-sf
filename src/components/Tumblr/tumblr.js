import React from 'react'

import JoinUs from '../JoinUs'
import styles from './tumblr.module.css'

import fear from '../../images/MakeFearYourTailwind.png'
import music from '../../images/02-music.png'
import art from '../../images/03-art.png'
import office from '../../images/04-office.png'
import rock from '../../images/05-rock.png'
import destroy from '../../images/Destroy.png'

const Tumblr = (props) => {

  return (
    <>
      <section className={`${styles.section}`}>
        <div className={styles.inner} data-parallax-section>
        <div className={`${styles.imageWrap} ${styles.media1}`} data-parallax-image>
            <img src={fear} alt=""/>
          </div>

          <div className={`${styles.imageWrap} ${styles.media2}`} data-parallax-image>
            <img src={music} alt=""/>
          </div>

          <div className={`${styles.imageWrap} ${styles.media3}`} data-parallax-image>
            <img src={art} alt=""/>
          </div>
        </div>
      </section>

      <JoinUs />

      <section className={styles.section}>
        <div className={styles.inner} data-parallax-section>

          <div className={`${styles.imageWrap} ${styles.media4}`} data-parallax-image>
            <img src={rock} alt=""/>
          </div>

          <div className={`${styles.imageWrap} ${styles.media5}`} data-parallax-image>
            <img src={destroy} alt="Destroy to create"/>
          </div>

          <div className={`${styles.imageWrap} ${styles.media6}`} data-parallax-image>
            <img src={office} alt=""/>
          </div>

        </div>
      </section>
    </>
  )
}

export default Tumblr
