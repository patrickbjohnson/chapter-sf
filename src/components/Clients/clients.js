import React, { Component } from 'react'
import createMailLink from '../../utils/createMailLink'

import Client from '../Client'

import styles from './clients.module.css'

const contactEmail = {
  to: 'info@chapter.com',
  subject: 'hello',
  cc: false,
  body: false,
}

class Clients extends Component {
  constructor() {
    super()

    this.state = {
      mq: null,
      activeClient: null,
      clients: [
        {
          name: 'Google',
          info: 'go to market',
        },
        {
          name: 'Airbnb',
          info: 'brand design',
        },
        {
          name: 'Sonos',
          info: 'naming',
        },
        {
          name: 'Dropbox',
          info: 'product strategy',
        },
        {
          name: 'Oculus',
          info: 'experience design',
        },
        {
          name: 'Uber',
          info: 'communications design',
        },
        {
          name: 'Domo',
          info: 'story design',
        },
        {
          name: 'Kodak',
          info: 'end to end experience',
        },
        {
          name: 'Facebook',
          info: 'brand design',
        },
        {
          name: 'PayPal',
          info: 'product design',
        },
        {
          name: 'Target',
          info: 'business design',
        },
        {
          name: 'Pillpack',
          info: 'go to market',
        },
      ],
    }
  }

  componentDidMount() {
    const mq = window.matchMedia('(min-width: 1024px)')
    this.setState({
      mq: mq.matches,
    })

    mq.addListener(data => {
      this.setState({
        mq: data.matches,
      })
    })

    this.state.clients.map((client, i) => {
      const dom = this.refs[client.name].clientRef.current

      return dom.addEventListener('mouseleave', e => {
        if (this.state.activeClient !== client.name || !client.info)
          return false
        const currentClient = this.state.activeClient

        setTimeout(() => {
          if (currentClient === this.state.activeClient) {
            this.setState({
              activeClient: null,
            })
            clearTimeout()
          } else {
            clearTimeout()
          }
        }, 800)
      })
    })
  }

  toggleInfoDisplay = clientName => {
    this.setState({
      activeClient: clientName,
    })
  }

  hideInfoDisplay = () => {
    this.setState({
      activeClient: null,
    })
  }

  render() {
    return (
      <section className={styles.section}>
        <div
          className={styles.inner}
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-duration="600"
          data-sal-easing="ease-out-bounce"
        >
          <h2 className={styles.title}>We partner with pioneers</h2>

          <ul className={styles.clientList}>
            {this.state.clients.map((client, i) => {
              return (
                <li key={i}>
                  <Client
                    ref={client.name}
                    isActive={this.state.activeClient === client.name}
                    hideEvent={this.hideInfoDisplay}
                    eventHandler={() => {
                      this.toggleInfoDisplay(client.name)
                    }}
                    mq={this.state.mq}
                    {...client}
                  />
                </li>
              )
            })}
          </ul>

          <p className={styles.cta}>The work we do makes it difficult to share what we're up to publicly. <br />For a private viewing of these projects, please <a href={createMailLink(contactEmail)} target="_blank">contact us</a></p>
        </div>
      </section>
    )
  }
}

export default Clients
