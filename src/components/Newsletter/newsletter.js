import React from 'react'

import styles from './newsletter.module.css'

const Newsletter = () => {
    return (
        <section className={styles.section}>
            <form className={styles.form}>
                <input className={styles.input} type="email" placeholder="Follow our newsletter" />
                <button type="submit" className={styles.button}>
                    <span className={styles.sr}>Submit</span>
                </button>
            </form>
        </section>
    )
}

export default Newsletter