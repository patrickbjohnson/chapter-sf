import React from 'react'

import data from '../../../content/data'
import createMailLink from '../../utils/createMailLink'
import styles from './ctarow.module.css'

const CTARow = () => {
    return (
        <section className={styles.section}>
            <h4 className={styles.title}>{data.partner.desc}</h4>
            <a className={styles.button} href={createMailLink(data.partner.cta.email)}>{data.partner.cta.text}</a>
        </section>
    )
}

export default CTARow;