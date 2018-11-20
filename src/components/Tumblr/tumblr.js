import React from 'react'

import styles from './tumblr.module.css'

const Tumblr = () => {
    return (
        <section className={styles.section}>
            <div className={styles.imageWrap}>
                <img src="http://placehold.it/400x600" alt="Alt text"/>
            </div>
            <div className={styles.imageWrap}>
                <img src="http://placehold.it/400x600" alt="Alt text"/>
            </div>
        </section>
    )
}

export default Tumblr