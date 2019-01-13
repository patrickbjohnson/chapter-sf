import React from 'react'

import styles from './ctarow.module.css'

const CTARow = () => {
    return (
        <section className={styles.section}>
            <h4 className={styles.title}>What keeps you up at night?</h4>
            <a className={styles.button} href="#">TALK TO US</a>
        </section>
    )
}

export default CTARow;