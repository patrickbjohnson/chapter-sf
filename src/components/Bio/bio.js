import React from 'react';
import { withPrefix } from 'gatsby'
import styles from './bio.module.css'

const Bio = (props) => {
    return (
        <div className={styles.bioWrap}>
            <div
                className={styles.bio}
                style={{ backgroundImage: `url(${props.image})` }}
            >
                <div className={styles.bioCopy}>
                  <h3 className={styles.name}>{props.name}</h3>
                  <span className={styles.title}>{props.title}</span>
                  <p className={styles.desc}>{props.desc}</p>
                </div>
            </div>
            <a className={styles.bioLink} href={`https://www.linkedin.com/in/${props.linkedin}`} taget="_blank">LinkedIn</a>
            <a className={styles.bioLink} href={`https://twitter.com/${props.twitter}`} taget="_blank">Twitter</a>
        </div>

    )
}

export default Bio