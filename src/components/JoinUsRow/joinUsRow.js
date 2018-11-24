import React from 'react'

import styles from './joinUsRow.module.css'

const JoinUsRow = (props) => {
    const { title, copy, message, buttonText } = props
    return (
        <div className={styles.row}>
            <h1 className={styles.title}>{title}</h1>
            
            <div className={styles.flex}>
                <div className={styles.content}>
                    <p className={styles.copy}>{copy}</p>
                    {message &&
                        <p className={styles.message}>{message}</p>
                    }            
                </div>
                <a className={styles.button} href="http://google.com">{buttonText}</a>
            </div>
            <a className={styles.button} href="http://google.com">{buttonText}</a>
            
        </div>
    )
}

export default JoinUsRow