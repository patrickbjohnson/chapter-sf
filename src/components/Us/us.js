import React from 'react'

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
            WE’RE BUILDING A HOME FOR BRILLIANT MISFITS
          </p>
        </div>
      </Content>
      <div className={styles.grid}>
        <div className={styles.col}
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-duration="600"
          data-sal-easing="ease-out-bounce"
        >
          <Bio
            image="http://placehold.it/300x400"
            name="Gareth Kay"
            title="Co-Founder"
            desc="Ex-CSO of Goodby, Silverstein and Partners. Left a 20 year career at some of the world’s best ad agencies to apply strategic creativity more expansively. Failed musician."
          />
        </div>
        <div className={styles.col}
          data-sal="slide-up"
          data-sal-delay="200"
          data-sal-duration="600"
          data-sal-easing="ease-out-bounce"
        >
          <Bio
            image="http://placehold.it/300x400"
            name="Neil Robinson"
            title="Co-Founder"
            desc="Ex-ECD AQKA San Francisco. After helping to build one of the best agencies in the world for 17 years hit the reset button to build something from the ground up that's designed to do the right thing."
          />
        </div>
        <div className={styles.col}
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-duration="600"
          data-sal-easing="ease-out-bounce"
        >
          <Bio
            image="http://placehold.it/300x400"
            name="Sue Murphy"
            title="Partner"
            desc="Ex-Wieden+Kennedy, Wolff Olins and Ogilvy. The odd-shaped maverick swapping sides of the fence in advertising, branding and design studios. Pulling pints since age 6. Designing since age 11."
          />
        </div>
      </div>
      <Content>
        <div
          className={`${styles.contentInner} ${styles.bottom}`}
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-duration="600"
          data-sal-easing="ease-out-bounce"
        >
          <p className={`${styles.copy} ${content.copySmall}`}>
          Our experience has led us to do things a bit differently. We act as an agent of change not an agency of record. We’re obsessed in finding the human opportunity or problem and solving or seizing it in whatever shape it takes. We break down silos. We move fast. We’re open. We show the thing. We’re fearless, optimistic explorers in search of the better path less traveled.
          </p>
        </div>
      </Content>
    </section>
  )
}

export default Us
