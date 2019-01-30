import React from 'react'

import data from '../../../content/data'
import Content from '../Content'
import Bio from '../Bio'
import content from '../Content/content.module.css'
import styles from './us.module.css'

const Us = () => {
  return (
    <section id="about" className={styles.section} data-section>
      <Content>
        <div
          className={styles.contentInner}
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-duration="600"
          data-sal-easing="ease-out-bounce"
        >
          <p className={styles.title}>
            {data.about.title}
          </p>
        </div>
      </Content>
      <div className={styles.grid} >
        {data.bios.map((bio, i) => {
          return (
              <div
                className={styles.col}
                key={i}
                data-sal="slide-up"
                data-sal-delay="100"
                data-sal-duration="600"
                data-sal-easing="ease-out-bounce"
              >
                <Bio
                  name={bio.name}
                  title={bio.title}
                  desc={bio.desc}
                  linkedin={bio.linkedin}
                  email={bio.email}
                  image={bio.image}
                />
              </div>
          )
        })}
      </div>
      <Content>
        <div
          className={`${styles.contentInner} ${styles.bottom} `}
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-duration="600"
          data-sal-easing="ease-out-bounce"
        >
          <p className={`${styles.copy}  ${content.copySmall}`}>{data.about.bottom}</p>
        </div>
      </Content>
    </section>
  )
}

export default Us
