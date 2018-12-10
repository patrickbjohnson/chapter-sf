import React from 'react'

import styles from './us.module.css'

const Us = () => {
  return (
    <section id="us" className={styles.section} data-section>
      <div className={styles.hero}>
        <span className={styles.title}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 277.3 116">
            <path d="M114.2 5.3v69.5c0 12.6-6.1 23.5-16.7 29.5-9.1 5.2-19.5 7.4-34.7 7.4-15.3 0-25.9-2.2-35-7.4C17.2 98.3 11 87.4 11 74.8V5.3h16.2v62.4c0 12.9 3 19.7 10.9 24 6 3.3 14.7 5.2 24.6 5.2 9.6 0 18.3-1.9 24.4-5.2 7.7-4.3 10.9-11 10.9-24V5.3h16.2zM170.1 75.8C179.7 92 193.3 99 214.6 99c21.1 0 34.7-7.9 34.7-20.3 0-10.1-7.7-16.1-21.9-17.2l-32.6-2.2c-11.7-.9-18-2.8-24.3-7.3-5.4-3.8-8.8-10.9-8.8-17.3 0-17.7 20-31.2 46.2-31.2 23.3 0 41.6 7.6 53.1 21.8L247.7 32c-9.9-10.2-21.3-14.8-36.6-14.8-20 0-33.3 6.6-33.3 16.2 0 6.1 6.8 10.1 18.6 10.9l28.4 1.6c11.5.6 19.9 2.7 26.6 6.8 8.7 5 14.2 15 14.2 25.5 0 10.9-6.3 21.1-16.2 26.3-8.8 5-21.8 7.9-34.2 7.9-28.2 0-45.4-8.4-59.6-28.5l14.5-8.1z" />
          </svg>
        </span>
      </div>
      <div className={styles.content}
        data-sal="slide-up"
        data-sal-delay="100"
        data-sal-duration="500"
        data-sal-easing="ease-out-bounce"
      >
        <div className={styles.innerContent}>
          <p>
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
          <p>
            We’re a new type of creative studio, built from the ground up to
            better deliver the commercial creativity pioneering companies need
            today. Creativity that is defined by the impact it has, not the
            channel it is delivered in. Creativity that closes the growing gap
            between what people expect and what companies deliver.{' '}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Us
