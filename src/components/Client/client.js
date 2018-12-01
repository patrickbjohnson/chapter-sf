import React, { Component } from 'react'

import styles from './client.module.css'

class Client extends Component {
    constructor(props) {
        super(props)

        this.clientRef = React.createRef();
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

    render () {
        
        const { 
            name, 
            info,
            eventHandler,
            isActive,
            hideEvent,
            mq
        } = this.props

        return (
            <div 
                ref={this.clientRef}
                className={styles.client}   
                onClick={() => {
                    if (mq && this.state.hasInfo) return false
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
                        <div className={this.panelClasses()}>{info}</div>
                    </span>
                }
            </div>
        )
    }
}


export default Client