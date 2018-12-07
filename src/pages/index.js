import React, { Component } from 'react'
import Scrollbar from 'react-smooth-scrollbar'

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
    this.mq = null
    this.state = { hasRun: true, navOffset: null, mq: null, mqMatches: null }
    this.hero = null
    this.heroDims = null
    this.menu = null
  }

  componentDidMount() {
    const { scrollbar } = this.scrollContainer
    this.mq = window.matchMedia('(min-width: 1024px)')
    this.hero = document.querySelector('[data-hero')
    this.heroDims = this.hero.getBoundingClientRect()
    this.menu = document.querySelector('[data-nav]')
    this.offset = null
    this.foo = null

    this.initialNavSetup(this.mq.matches)

    scrollbar.addListener(({ offset }) => {
      this.offset = offset

      if (this.mq.matches) {
        this.hero.style.top = ` ${offset.y}px`
        this.menu.style.top = `${this.hero.getBoundingClientRect().height}px`

        this.menuScrollOffsets()
      } else {
        this.menu.style.top = `${offset.y}px`
        this.hero.style.top = ` ${offset.y + 30}px`
      }
    })

    this.mq.addListener(media => {
      this.heroDims = this.hero.getBoundingClientRect()

      if (media.matches) {
        if (this.offset) {
          this.hero.style.top = `${this.offset.y}px`
          this.menuScrollOffsets()
        } else {
          this.initialNavSetup(media.matches)
        }
      } else {
        if (this.offset) {
          this.hero.style.top = `${this.offset.y + 30}px`
          this.menu.style.top = `${this.offset.y}px`
        } else {
          this.initialNavSetup(media.matches)
        }
      }
    })
  }

  initialNavSetup(isLarge) {
    if (isLarge) {
      this.menu.style.top = `${this.hero.getBoundingClientRect().height}px`
      this.hero.style.top = 0
    } else {
      this.menu.style.top = 0
      this.hero.style.top = `30px`
    }
  }

  menuScrollOffsets() {
    if (this.offset.y > this.heroDims.height) {
      this.menu.style.top = `${this.offset.y}px`
    } else {
      this.menu.style.top = `${this.heroDims.height}px`
    }
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
