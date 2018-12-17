import React, { Component } from 'react'

import styles from './client.module.css'

class Client extends Component {
    constructor(props) {
        super(props)

        this.clientRef = React.createRef();
        this.panelRef = React.createRef();

        this.state = {
            active: null,
            hasInfo: false
        }
    }

    componentDidMount() {
        this.setState({
            hasInfo: this.props.info ? true : false
        })
    }

    panelClasses = () => {
        return this.props.isActive ? `${styles.panel} ${styles.active}` : styles.panel
    }

    updatePosition = () => {
        const el = this.panelRef.current
        const dims = el.getBoundingClientRect()
        const hasRightOverFlow = dims.right > (window.innerWidth - 10)
        const hasLeftOverFlow = dims.left > (window.innerWidth - 10)

        const offset = (dims.width / 4)

        if (hasRightOverFlow) {

            el.style.right = `-${offset}px`
            el.style.left = 'auto'
            el.style.transform  = 'translateX(0)'
        }

        if (hasLeftOverFlow) {

            el.style.left = `-${offset}px`
            el.style.right = 'auto'
            el.style.transform  = 'translateX(0)'
        }
    }

    render () {

        const {
            name,
            info,
            eventHandler,
            mq
        } = this.props

        return (
            <div
                ref={this.clientRef}
                className={styles.client}
                onClick={() => {
                    if (mq && this.state.hasInfo) return false

                    this.updatePosition();
                    eventHandler()
                }}

                onMouseEnter={() => {
                    if (!mq && this.state.hasInfo) return false
                    eventHandler()
                }}
            >
                {name}
                {info &&
                    <span>*
                        <div ref={this.panelRef} className={this.panelClasses()}>{info}</div>
                    </span>
                }
            </div>
        )
    }
}


export default Client