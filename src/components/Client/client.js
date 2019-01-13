import React, { Component } from 'react'

import styles from './client.module.css'

class Client extends Component {
  constructor(props) {
    super(props)

    this.clientRef = React.createRef()
    this.panelRef = React.createRef()

    this.state = {
      active: null,
      hasInfo: false,
    }
  }

  componentDidMount() {
    this.setState({
      hasInfo: this.props.info ? true : false,
    })
  }

  panelClasses = () => {
    return this.props.isActive
      ? `${styles.panel} ${styles.active}`
      : styles.panel
  }

  clientClasses = () => {
    return this.props.info
      ? `${styles.client} ${styles.hasInfo}`
      : styles.client
  }

  updatePosition = () => {
    const el = this.panelRef.current
    console.log(el)
    const win = window.innerWidth || document.documentElement.clientWidth
    const dims = el.getBoundingClientRect()
    const hasRightOverFlow = dims.right >= win - 20
    const hasLeftOverFlow = dims.left <= 20


    if (hasRightOverFlow) {
      el.style.left = `calc(50% - 15px)`
    }

    if (hasLeftOverFlow) {
      el.style.left = `calc(50% + 15px)`
    }
  }

  render() {
    const { name, info, eventHandler, mq } = this.props

    return (
      <div
        ref={this.clientRef}
        className={this.clientClasses()}
        onClick={() => {
          if (mq && this.state.hasInfo) return false

          this.updatePosition()
          eventHandler()
        }}
        onMouseEnter={() => {
          if (!mq && this.state.hasInfo) return false
          eventHandler()
        }}
      >
        <span>{name}</span>

        {info && (
          <div ref={this.panelRef} className={this.panelClasses()}>
            {info}
          </div>
        )}
      </div>
    )
  }
}

export default Client
