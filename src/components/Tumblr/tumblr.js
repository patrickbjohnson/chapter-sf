import React from 'react'

import JoinUs from '../JoinUs'
import styles from './tumblr.module.css'
import Tumblr1 from '../Tumblr1'
import Tumblr2 from '../Tumblr2'
import Tumblr3 from '../Tumblr3'
import Tumblr4 from '../Tumblr4'

const Tumblr = () =>{
  return (
    <>
      <section className={styles.section}>
        <Tumblr1 classes={styles.imageWrap} />
        <Tumblr2 classes={styles.imageWrap} />
      </section>

      <JoinUs />

      <section className={styles.section}>
        <Tumblr3 classes={styles.imageWrap} />
        <Tumblr4 classes={styles.imageWrap} />
      </section>
    </>
  )
}

export default Tumblr
