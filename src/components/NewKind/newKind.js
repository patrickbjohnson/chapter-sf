import React from 'react'

import '../../../content/data.json'

import Content from '../Content'
import content from '../Content/content.module.css'
import styles from './newkind.module.css'

const Partner = () => {
  return (
    <section id="new-kind" className={styles.section} data-newkind>
      <Content

      >
        <div
          data-sal="fade"
          data-sal-delay="100"
          data-sal-duration="600"
          data-sal-easing="ease-out-bounce"
        >

        <h2 className={`${styles.content}`}>ONLY THE HUMAN FRIENDLY WILL THRIVE</h2>
        <p className={content.introCopy}>Today, people expect more from their brands. Those expectations may seem unreasonable but they have been reset for good. Brands can no longer draw comfort from being a bit better than their direct competitors or doing what they’ve always done before. They need a new playbook to thrive in today’s world; to be human friendly, not just human like.</p>
        <p className={content.introCopy}><span>Chapter is a new type of creative studio focused on designing soulful brands that thrive in today's world of unreasonable expectations. We help businesses seize the right opportunity, reset their direction and reinvent themselves and the categories they operate in.</span></p>
        <p className={content.introCopy}>We do this by focusing our energy on rethinking products, communications and the way they work together to bring brands to life in more unexpected, joyful and human friendly ways.</p>
        </div>



      </Content>
    </section>
  )
}

export default Partner
