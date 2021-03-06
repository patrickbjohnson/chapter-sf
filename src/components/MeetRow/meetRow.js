import React from 'react'

import styles from './meetRow.module.css'

const MeetRow = props => {
  const { title, copy, listItems } = props

  return (
    <div className={styles.row}
      data-sal="slide-up"
      data-sal-delay="100"
      data-sal-duration="600"
      data-sal-easing="ease-out-bounce"
    >
      <h3 className={styles.rowTitle}>{title}</h3>

      <div className={styles.innerContent}>
        <div className={styles.flex}>
          {listItems && (
            <ul className={styles.list}>
              {listItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
          <p className={styles.smallText}  dangerouslySetInnerHTML={{ __html: copy }}></p>
        </div>
        <button className={styles.button} onClick={props.clickHandler}>
          Book
        </button>
      </div>
    </div>
  )
}

export default MeetRow
