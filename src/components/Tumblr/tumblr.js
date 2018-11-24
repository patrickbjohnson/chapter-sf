import React from 'react'

import styles from './tumblr.module.css'

const Tumblr = (props) => {
    const { bg1, bg2 } = props
    return (
        <section className={styles.section}>
            <div className={styles.imageWrap} style={{backgroundImage: `url(${bg1})`}}></div>
            <div className={styles.imageWrap} style={{backgroundImage: `url(${bg2})`}}></div>
        </section>
    )
}

export default Tumblr