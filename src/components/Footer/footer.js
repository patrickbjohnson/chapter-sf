import React, { Component } from 'react'

import data from '../../../content/data'
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
              <p className={`${styles.link} ${styles.phone}`}><a href={data.phoneLink}>{data.phone}</a></p>
              <p className={styles.link}><a href={`mailto:${data.email}`} target="_blank">{data.email}</a></p>
            </div>

            <div className={`${styles.socialLinks} ${styles.contentSection}`}>
              {data.social.map((link, i) => {
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
