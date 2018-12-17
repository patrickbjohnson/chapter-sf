import React from 'react'
import createMailLink from '../../utils/createMailLink'
import styles from './joinUsRow.module.css'

const JoinUsRow = props => {
  const { title, copy, message, buttonText, mailto } = props

  return (
    <div className={styles.row}
    data-sal="slide-up"
    data-sal-delay="100"
    data-sal-duration="600"
    data-sal-easing="ease-out-bounce"
    >
      <h1 className={styles.title}>{title}</h1>

      <div className={styles.flex}>
        <div >
          <div className={styles.content}>
            <p className={styles.copy}>{copy}</p>
            {message && <p className={styles.message}>{message}</p>}
          </div>
        </div>

        <a className={styles.button} href={createMailLink(mailto)}>
          {buttonText}
        </a>
      </div>

    </div>
  )
}

export default JoinUsRow
