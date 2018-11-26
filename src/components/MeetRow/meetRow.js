import React from 'react'

import styles from './meetRow.module.css'

const MeetRow = (props) => {
    const { 
        title, 
        copy, 
        listItems 
    } = props

    return (
        <div className={styles.row}>
            <h3 className={styles.rowTitle}>{title}</h3>
            
            <div className={styles.innerContent}>
                <div className={styles.flex}>
                    <p className={styles.smallText}>{copy}</p>
                    {listItems && 
                    <ul className={styles.list}>
                        {listItems.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>                    
                    }
                </div>
                <button className={styles.button} onClick={props.clickHandler}>Book</button>
            </div>

        </div>
    )
}

export default MeetRow