import React from 'react'
import createMailLink from '../../utils/createMailLink'
import styles from './joinUsRow.module.css'

const JoinUsRow = props => {
  const { title, copy, message, buttonText, mailto } = props

  return (
    <div className={styles.row}>
      <h1 className={styles.title}>{title}</h1>

      <div className={styles.flex}>
        <div className={styles.content}>
          <p className={styles.copy}>{copy}</p>
          {message && <p className={styles.message}>{message}</p>}
        </div>
      </div>
      <a className={styles.button} href={createMailLink(mailto)}>
        {buttonText}
      </a>
    </div>
  )
}

export default JoinUsRow
