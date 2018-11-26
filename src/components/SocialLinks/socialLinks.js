import React from 'react'

import social from '../../utils/socialLinks'

import styles from './socialLinks.module.css'

const SocialLinks = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {social.map((link, i) => {
                    return <a className={styles.link} href={link.url} key={i}  target="_blank" rel="noopener noreferrer">{link.name}</a>
                })}
            </div>
            <a href="https://goo.gl/maps/HLm4KDK4AS22" className={styles.address} target="_blank" rel="noopener noreferrer">2745, 19th Street, San Francisco, California, 94110</a>
        </section>
    )
}

export default SocialLinks