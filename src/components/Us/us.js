import React from 'react'

import Content from '../Content'
import content from '../Content/content.module.css'
import styles from './us.module.css'

import UsImage from '../UsImage'

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
            This is Chapter. We do things differently here. Founded by{' '}
            <a
              href="https://www.linkedin.com/in/neilrobinson/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gareth Kay
            </a>{' '}
            and{' '}
            <a
              href="https://www.linkedin.com/in/garethkaysf/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Neil Robinson
            </a>{' '}
            in 2014, we’re a group of optimistic misfits whose past lives spans
            time in creative places as well as time in the classroom, the pub
            and the shed—meet us and figure out which of us was an English
            teacher, who was the barmaid and who is the woodworker.
          </p>
          <p className={`${styles.copy} ${content.copySmall}`}>
            We’re a new type of creative studio, built from the ground up to
            better deliver the commercial creativity pioneering companies need
            today. Creativity that is defined by the impact it has, not the
            channel it is delivered in. Creativity that closes the growing gap
            between what people expect and what companies deliver.
          </p>
        </div>
      </Content>

    </section>
  )
}

export default Us
