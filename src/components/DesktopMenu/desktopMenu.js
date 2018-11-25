import React, { Component } from 'react'

import styles from './desktopMenu.module.css'

class DesktopMenu extends Component {
    constructor() {
        super()

        this.state = {
            sticky: false,
            smallScreen: false,
            offsetThreshold: 0
        }
    }

    scrollHandler = () => {
        const scrollHeight = window.scrollY
        const stuck = (scrollHeight > this.state.offsetThreshold)
    
    
        if (stuck) {
          this.setState({
            sticky: true
          })
        } else {
          this.setState({
            sticky: false
          })
        }
    }

    // componentDidMount() {
    //     let mq = window.matchMedia('(max-width: 1023px')
    //     let heroHeight = document.querySelector('[data-hero]') ? document.querySelector('[data-hero]').getBoundingClientRect().height : false
    
    //     this.setState({
    //       smallScreen: mq.matches,
    //       offsetThreshold: heroHeight
    //     })
    
    //     window.addEventListener('scroll', this.scrollHandler)
    
    //     mq.addListener((data) => this.setState({
    //       smallScreen: data.matches
    //     }))
    // }

    // componentWillUnmount() {
    //     window.removeEventListener('scroll', this.scrollHandler)
    // }

    menuClasses = () => {
        return this.state.stuck ? [styles.nav, styles.stuck].join(' '): styles.nav
    }
    
    render() {
        return (
            <nav className={this.menuClasses()}>
                <a href="http://google.com">Nav Item 1</a>
                <a href="http://google.com">Nav Item 2</a>
                <a href="http://google.com">Nav Item 3</a>
                <a href="http://google.com">Nav Item 4</a>
            </nav>
        )
    }
}

export default DesktopMenu