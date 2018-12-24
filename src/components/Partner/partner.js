import React, { Component } from 'react'

import Content from '../Content'
import content from '../Content/content.module.css'
import styles from './partner.module.css'

class Partner extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section id="partner" className={styles.section} data-section>
        <Content>
          <h2
            className={`${content.title} ${content.whiteFill}`}
            data-sal="fade"
            data-sal-delay="100"
            data-sal-duration="600"
            data-sal-easing="ease-out-bounce"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 116">
              <path d="M5 4.9h57.1c24.7 0 41 13 41 32.7 0 11.1-5.4 21-14.6 26.9-6.2 4-11.9 5.2-23.3 5.2H21.1v40.7H5V4.9zm15.7 14.6l.5-.5v36.4H63c16.8 0 24.7-5.9 24.7-18.2 0-10.8-8.9-17.7-22.3-17.7H20.7zM195.5 4.9h18.7l49 105.5h-17.7l-11.1-24.2h-63.8l-12.3 24.2h-18.4L195.5 4.9zM229 71.5l-24.7-53.7L178 71.5h51zM305.4 4.9h66.4c22 0 35.6 10.3 35.6 27.1 0 14.6-10.8 23.3-30.5 25.2 3.2 4.3 4.3 5.9 6.8 10l27.8 43.3h-20.1l-31.8-52h-38.1v-.2 52.3h-16.1V4.9zm15.7 13.7h.4V44h51.9c11.7 0 18.5-4.7 18.5-13 0-8.1-6.8-12.5-19.5-12.5h-51.3zM446.2 4.9h106.1v14.4h-44.9v91.2h-16.1V19.4h-45.1V4.9zM594.9 4.9h21.8l55.4 68.2 12.5 16.5.5.8s-.6-11.9-.6-21.7V4.9h15.3v105.5h-17.9L622.8 38c-6.2-7.6-12.5-16.5-12.5-16.5l-.6.3.8-.3v88.9H595V4.9zM750.3 4.9h89.1v14.6h-72.9v23.9h61.2V58h-61.4.1v38.1H843v14.4h-92.7V4.9zM888.9 4.9h66.4c22 0 35.6 10.3 35.6 27.1 0 14.6-10.8 23.3-30.5 25.2 3.2 4.3 4.3 5.9 6.8 10l27.8 43.3h-20.1l-31.8-52H905v52h-16.1V4.9zM905 18.6V44h51.9c11.7 0 18.5-4.7 18.5-13 0-8.1-6.8-12.5-19.5-12.5H905z" />
            </svg>
          </h2>

          <p
            className={`${content.copy} ${content.white}`}
            data-sal="fade"
            data-sal-delay="100"
            data-sal-duration="600"
            data-sal-easing="ease-out-bounce"
          >
            We work with a select number of pioneering companies who
            know they need to change what they do to meet the unreasonable
            expectations people have today.
          </p>
        </Content>
      </section>
    )
  }
}

export default Partner
