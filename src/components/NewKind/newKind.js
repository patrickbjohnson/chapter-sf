import React from 'react'

import '../../../content/data.json'

import Content from '../Content'
import content from '../Content/content.module.css'
import styles from './newkind.module.css'

const Partner = () => {
  return (
    <section id="new-kind" className={styles.section} data-newkind>
      <Content>
        <p
          className={`${styles.content}`}
          data-sal="fade"
          data-sal-delay="100"
          data-sal-duration="600"
          data-sal-easing="ease-out-bounce"
        >
        Chapter is a new type of creative studio focused on designing soulful brands that thrive in today's world of unreasonable expectations.
        </p>
      </Content>
    </section>
  )
}

export default Partner
