import React, { Component } from 'react'
import sal from 'sal.js'

import Content from '../Content'
import JoinUsRow from '../JoinUsRow'

import content from '../Content/content.module.css'
import styles from './joinUs.module.css'

const workshopEmail = {
  to: 'join@chaptersf.com',
  cc: false,
  subject: 'apply for the workshop',
  body: false,
}

const leagueEmail = {
  to: 'join@chaptersf.com',
  cc: false,
  subject: 'join the league',
  body: false,
}

const crewEmail = {
  to: 'join@chaptersf.com',
  cc: false,
  subject: 'join the crew',
  body: false,
}

class JoinUs extends Component {
  constructor() {
    super()

    this.state = {
      sections: null,
    }
  }

  componentDidMount() {
    sal({
      threshold: 0.5,
      once: true,
    })
  }

  render() {
    return (
      <section id="join" className={styles.section} data-section>
        <Content>
          <h2
            className={content.title}
            data-sal="slide-up"
            data-sal-delay="100"
            data-sal-duration="600"
            data-sal-easing="ease-out-bounce"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 481.9 116">
              <path d="M28.1 60.3c-1.3 7.7-2 13.2-2 16.9 0 6.6.9 10.1 4.1 13.9 3.9 5.2 8.8 7.6 16.1 7.6 13.2 0 20.8-8 20.8-21.6V5.3h16.1v73c0 12.3-2.7 19.2-9.8 25.5-6.8 6-15.6 8.8-27.1 8.8-11.2 0-21.8-3.9-28.4-10.7-5.9-5.8-8.2-12.6-8.2-23.1 0-2.4.2-7.7.5-12.5l17.9-6zM235.3 19.7c10.1 9.8 15.6 23.3 15.6 38.3 0 31.7-24.4 54.4-59 54.4-36.4 0-62.3-22.7-62.3-54.4 0-31.5 26-54.5 62-54.5 18.1-.1 32.5 5.3 43.7 16.2zm-89 38.1c0 24.6 18 41.1 45.1 41.1 24.8 0 42.7-17.2 42.7-41.1 0-10.9-4.1-21.1-11.2-28.5-8-8.5-18.4-12.6-31.8-12.6-26.8 0-44.8 16.5-44.8 41.1zM297.5 5.3h16.1v105.2h-16.1V5.3zM364 5.2h21.8l55.4 68.2 12.5 16.5.5.8s-.6-11.9-.6-21.7V5.2h15.3v105.5H451l-59.2-72.5c-6.2-7.6-12.5-16.5-12.5-16.5l-.6.3.8-.3v88.9H364V5.2z" />
            </svg>
          </h2>

          <p className={`${content.center} ${content.ttu} ${content.intro}`}>
            We're a crew of optimistic misfits with strong opinions, softly held looking to meet folk similar enough to get along but different enough to be dangerous
          </p>

          <JoinUsRow
            title="Crew"
            copy="We’re a bunch of designers, writers, producers and strategists restlessly dissatisfied with how brands, agencies and consultancies act today. If you feel like you’re a misfit, let’s change things together."
            message="Join our crew."
            buttonText="Join"
            mailto={crewEmail}
          />

          <JoinUsRow
            title="League"
            copy="Most places just want to buy your time. We want you to join our league of diverse freelance talent from which we custom build teams to match extraordinary people with extraordinary projects."
            message="Join the league."
            buttonText="Join"
            mailto={leagueEmail}
          />

          <JoinUsRow
            title="Workshop"
            copy="This is not an internship. It’s an always-on crash course in solving real problems, open to talent all over the world, done 10 weeks at a time."
            message="Apply for the workshop"
            buttonText="Apply"
            mailto={workshopEmail}
          />
        </Content>

      </section>
    )
  }
}

export default JoinUs
