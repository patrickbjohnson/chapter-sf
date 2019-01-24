import React from 'react'
import data from '../../../content/data'
import Content from '../Content'
import content from '../Content/content.module.css'
import styles from './newkind.module.css'

const Partner = () => {
  return (
    <section id="new-kind" className={styles.section} data-newkind>
      <Content>
        <div
          data-sal="fade"
          data-sal-delay="100"
          data-sal-duration="600"
          data-sal-easing="ease-out-bounce"
        >

        <h2 className={`${styles.content}`}>{data.newKind.title}</h2>
        <p className={content.introCopy}>{data.newKind.first}</p>
        <p className={content.introCopy}>{data.newKind.second}</p>
        <p className={content.introCopy}>{data.newKind.third}</p>
        </div>



      </Content>
    </section>
  )
}

export default Partner
