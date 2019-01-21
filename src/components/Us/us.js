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
          <p className={`${styles.copy} ${content.copySmall}`}>
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
                image="http://placehold.it/300x400"
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
          className={`${styles.contentInner} ${styles.bottom}`}
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-duration="600"
          data-sal-easing="ease-out-bounce"
        >
          <p className={`${styles.copy} ${styles.bottom} ${content.copySmall}`}>
          Our experience has led us to do things a bit differently. We act as an agent of change not an agency of record. We’re obsessed in finding the human opportunity or problem and solving or seizing it in whatever shape it takes. We break down silos. We move fast. We’re open. We show the thing. We’re fearless, optimistic explorers in search of the better path less traveled.
          </p>
        </div>
      </Content>
    </section>
  )
}

export default Us
