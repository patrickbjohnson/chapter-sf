import React, { Component } from 'react'

import social from '../../utils/socialLinks'

import styles from './footer.module.css'

class Footer extends Component {
  constructor() {
    super()
  }

  render() {
    const date = new Date();
    return (
      <>
        <div className={styles.spacer} data-newsletter-spacer />

        <section className={styles.section} data-newsletter>
          <div className={styles.container}>
            <div className={styles.contentSection}>
              <a
                href="https://goo.gl/maps/HLm4KDK4AS22"
                className={styles.address}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>2745 19th Street</p>
                <p>San Francisco</p>
                <p>California, 94110</p>
              </a>
              <br />
              <p className={`${styles.link} ${styles.phone}`}><a href="tel:+14155292529">+1 415 529 2529</a></p>
              <p className={styles.link}><a href="mailto:info@chaptersf.com" target="_blank">info@chaptersf.com</a></p>
            </div>

            <div className={`${styles.socialLinks} ${styles.contentSection}`}>
              {social.map((link, i) => {
                return <a
                className={styles.socialLink}
                href={link.url}
                key={i}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
              </a>
              })}
              <p className={styles.copyright}>&copy; {date.getFullYear()} Chapter</p>
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default Footer
