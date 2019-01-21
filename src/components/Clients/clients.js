import React, { Component } from 'react'
import data from '../../../content/data'
import createMailLink from '../../utils/createMailLink'

import Client from '../Client'

import styles from './clients.module.css'

class Clients extends Component {
  constructor() {
    super()

    this.state = {
      mq: null,
      activeClient: null,
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

    data.clients.list.map((client, i) => {
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
          <h2 className={styles.title}>{data.clients.title}</h2>

          <ul className={styles.clientList}>
            {data.clients.list.map((client, i) => {
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

          <p className={styles.cta}>The work we do makes it difficult to share what we're up to publicly. For a private viewing of these projects, please <a href={createMailLink(data.clients.email)} target="_blank">contact us</a></p>
        </div>
      </section>
    )
  }
}

export default Clients
