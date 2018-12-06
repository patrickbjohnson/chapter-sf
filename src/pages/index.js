import React, { Component } from 'react'
import Scrollbar from 'react-smooth-scrollbar'
import debounce from 'lodash.debounce'

import Layout from '../components/layout'
import Hero from '../components/Hero'
import Menu from '../components/DesktopMenu'
import Partner from '../components/Partner'
import Clients from '../components/Clients'
import Projects from '../components/Projects'
import Tumblr from '../components/Tumblr'

import Meet from '../components/Meet'
import Us from '../components/Us'
import SocialLinks from '../components/SocialLinks'
import Newsletter from '../components/Newsletter'

import styles from '../components/smoothScroll.module.css'

class IndexPage extends Component {
  constructor() {
    super()
    this.scrollRef = React.createRef()

    this.state = { hasRun: true, navOffset: null, mq: null, mqMatches: null }
    this.hero = null
    this.menu = null
  }

  componentDidMount() {
    const { scrollbar } = this.scrollContainer

    this.hero = document.querySelector('[data-hero')
    this.menu = document.querySelector('[data-nav]')

    this.setupScrollableElements()

    scrollbar.addListener(({ offset }) => {
      this.hero.style.top = ` ${offset.y}px`
      this.menu.style.position = 'absolute'

      if (this.state.mq.matches) {
        if (offset.y > this.state.navOffset) {
          this.menu.style.top = `${offset.y}px`
        } else {
          this.menu.style.top = `${this.state.navOffset}px`
        }
      } else {
        this.menu.style.top = `${offset.y}px`
        this.hero.style.top = ` ${offset.y + 30}px`
      }
    })

    window.addEventListener('resize', e => {
      console.log('foo')
    })
  }

  setupScrollableElements = () => {
    let hasRun = false
    const mq = window.matchMedia('(min-width: 1024px)')

    this.setState({
      mq: mq,
      mqMatches: mq.matches,
      navOffset: this.menu ? this.hero.getBoundingClientRect().height : 0,
    })

    hasRun = true

    this.menu.style.position = 'absolute'

    this.menu.style.top = mq.matches
      ? `${this.hero.getBoundingClientRect().height}px`
      : 0

    if (!hasRun) return
    mq.addListener(media => {
      this.setState({ mqMatches: media.matches })
    })
  }

  onResize = debounce(() => {
    console.log('foo')
  }, 200)

  getNavOffset = () => {
    console.log('offsettinggs')
    this.menu.style.top = this.state.mqMatches
      ? `${this.hero.getBoundingClientRect().height}px`
      : 0
  }

  render() {
    return (
      <Layout>
        <div className={styles.container}>
          <Scrollbar ref={c => (this.scrollContainer = c)}>
            <Hero />
            <Menu />
            <Partner />
            <Clients />
            <Projects />
            <Tumblr />
            <Meet />
            <Us />
            <SocialLinks />
            <Newsletter />
          </Scrollbar>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
