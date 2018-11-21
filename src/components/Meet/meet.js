import React from 'react'

import MeetRow from '../MeetRow'

import styles from './meet.module.css'

const Meet = () => {
    return (
        <section className={styles.section}>
            <span className={styles.title}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 561.7 116"><path d="M7.8 5.3h24.4L68.6 89l40.5-83.2h22.5v104.7h-16.1l.8-88.3L105 46.9l-31 63.6H62L33.9 47.7 23 22.2l.9 88.3H7.8V5.3zM181.3 5.2h89.1v14.6h-72.9v23.9h61.2v14.6h-61.4.1v38.1H274v14.4h-92.7V5.2zM319.4 5.2h89.1v14.6h-72.9v23.9h61.2v14.6h-61.4.1v38.1H412v14.4h-92.7V5.2zM449.5 5.2h106.1v14.4h-44.9v91.2h-16.1V19.7h-45.1V5.2z"/></svg>
            </span>
            <p className={styles.copy}>Meeting people is easy. We came up with a few ways to <span>keep it interesting</span>.</p>
            
            <MeetRow clickHandler={() => {console.log('clicked!')}}/>
            <MeetRow />
        </section>
    )
}

export default Meet