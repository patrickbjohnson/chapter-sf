import React, { Component } from 'react'

import Client from '../Client'

import styles from './clients.module.css'

class Clients extends Component {
  constructor() {
    super()

    this.state = {
      mq: null,
      activeClient: null,
      clients: [
        {
          name: 'Google',
          info:
            'new ways to go to market',
        },
        {
          name: 'Airbnb',
          info: 'new product launch',
        },
        {
          name: 'Sonos',
          info: 'Naming',
        },
        {
          name: 'Dropbox',
          info: 'Brand and Product Vision',
        },
        {
          name: 'Oculus',
          info: 'Experience Vision',
        },
        {
          name: 'Uber',
          info: 'Communications',
        },
        {
          name: 'Domo',
          info: 'Brand Story',
        },
        {
          name: 'Kodak',
          info: 'End to End Experience',
        },
        {
          name: 'Facebook',
          info: 'Brand Creation',
        },
        {
          name: 'PayPal',
          info: 'Product Vision',
        },
        {
          name: 'Target',
          info: 'Experience Vision',
        },
        {
          name: 'Pillpack',
          info: 'Go To Market',
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
          <h2 className={styles.title}>Some of our pioneering partners</h2>

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
        </div>
      </section>
    )
  }
}

export default Clients
