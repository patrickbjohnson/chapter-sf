import React from 'react'

import Client from '../Client'

import styles from './clients.module.css'

const Clients = () => {
    const clients = [
        {
            name: 'Google',
            info: false
        },
        {
            name: 'Airbnb',
            info: 'How might we make a more engaging and helpful experience for the financially underserved?'
        },
        {
            name: 'Sonos',
            info: false
        },
        {
            name: 'Dropbox',
            info: false
        },
        {
            name: 'Oculus',
            info: false
        },
        {
            name: 'Uber',
            info: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.'
        },
        {
            name: 'Domo',
            info: false
        },
        {
            name: 'Kodak',
            info: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.'
        },
        {
            name: 'Facebook',
            info: false
        },
        {
            name: 'PayPal',
            info: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.'
        },
        {
            name: 'Target',
            info: false
        },
        {
            name: 'Pillpack',
            info: false
        }
    ]
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Some of our pioneering partners</h2>

            <ul className={styles.clientList}>
                {clients.map((client, i) => {
                        return <li key={i}><Client {...client}/></li>
                    })
                }
            </ul>
        </section>
    )
}

export default Clients