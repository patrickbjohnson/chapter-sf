import React, { Component } from 'react'

import styles from './client.module.css'

class Client extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible: false,
            hasInfo: false
        }
    }

    componentDidMount() {
        this.setState({
            hasInfo: this.props.info ? true : false
        })
    }

    toggleInfoDisplay = () => {
        if (!this.state.hasInfo) return
        this.setState({
            isVisible: !this.state.isVisible
        })
    }


    render () {
        const { name, info } = this.props
        return (
            <div onClick={this.toggleInfoDisplay} className={styles.client}>
                {name}
                {info && 
                    <>
                        <span>*
                        {this.state.isVisible && 
                            <div className={styles.panel}>{info}</div>
                        }
                        </span>

                        
                    </>
                }
            </div>
        )
    }
}


export default Client