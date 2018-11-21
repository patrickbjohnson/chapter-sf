import React from 'react'

import styles from './socialLinks.module.css'

const SocialLinks = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <a className={styles.link} href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a className={styles.link} href="https://medium.com" target="_blank" rel="noopener noreferrer">Medium</a>
                <a className={styles.link} href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a className={styles.link} href="https://spotify.com" target="_blank" rel="noopener noreferrer">Spotify</a>
                <a className={styles.link} href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>            
            </div>
            <a href="https://goo.gl/maps/HLm4KDK4AS22" className={styles.address} target="_blank" rel="noopener noreferrer">2745, 19th Street, San Francisco, California, 94110</a>
        </section>
    )
}

export default SocialLinks