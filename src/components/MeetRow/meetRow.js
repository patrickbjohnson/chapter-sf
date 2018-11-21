import React from 'react'

import styles from './meetRow.module.css'

const MeetRow = (props) => {
    
    return (
        <div className={styles.row}>
            <h3 className={styles.rowTitle}>Critroulette</h3>
            <div className={styles.innerContent}>
                <p className={styles.smallText}>4 design students x Chapter partners</p>
                <div className={styles.flex}>
                    <ul className={styles.list}>
                        <li>You have work.</li>
                        <li>We have thoughts.</li>
                        <li>Every Tuesday.</li>
                        <li>On Google Hangouts.</li>
                    </ul>
                    <button className={styles.button} onClick={props.clickHandler}>Book</button>
                </div>
                
            </div>
            <button className={styles.button} onClick={props.clickHandler}>Book</button>
            
        </div>
    )
}

export default MeetRow