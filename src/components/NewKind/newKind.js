import React from 'react'

import Content from '../Content'
import content from '../Content/content.module.css'
import styles from './newkind.module.css'

const Partner = () => {
  return (
    <section id="new-kind" className={styles.section} data-newkind>
      <Content>
        <p
          className={`${content.copy} ${content.white} ${content.center} ${content.ttu} ${content.smallCopy}`}
          data-sal="fade"
          data-sal-delay="100"
          data-sal-duration="600"
          data-sal-easing="ease-out-bounce"
        >
        chapter is new type of creative studio focused on designing soulful brands that thrive in today's world of unreasonable expectations.
        </p>
      </Content>
    </section>
  )
}

export default Partner
