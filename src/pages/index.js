import React, { Component } from 'react'
import Scrollbar from 'react-smooth-scrollbar'
import sal from 'sal.js'
import throttle from 'lodash.throttle'

import Layout from '../components/layout'
import Hero from '../components/Hero'
import Menu from '../components/DesktopMenu'
import Partner from '../components/Partner'
import Clients from '../components/Clients'
import Projects from '../components/Projects'
import Tumblr from '../components/Tumblr'
import NewKind from '../components/NewKind'
import Meet from '../components/Meet'
import Us from '../components/Us'
import Footer from '../components/Footer'

import styles from '../components/smoothScroll.module.css'

class IndexPage extends Component {
  constructor() {
    super()
    this.mq = null
    this.hero = null
    this.heroDims = null
    this.newKind = null
    this.menu = null
    this.offset = null
    this.scrollContainer = null
    this.pastHero = false
    this.baseAnimationSpeed = .25;

    this.state = {
      pastHero: false
    }
  }

  componentDidMount() {
    const { scrollbar } = this.scrollContainer

    this.mq = window.matchMedia('(min-width: 1024px)')
    this.hero = document.querySelector('[data-hero]')
    this.heroDims = this.hero.getBoundingClientRect()

    this.parallaxSections = Array.from(document.querySelectorAll('[data-parallax-section]'))

    this.newKind = document.querySelector('[data-newkind]')
    this.menu = document.querySelector('[data-nav]')

    this.footer = document.querySelector('[data-newsletter]')
    this.footerSpacer = document.querySelector('[data-newsletter-spacer]')
    this.footerSpacer.style.height = `${
      this.footer.getBoundingClientRect().height
    }px`
    this.footer.style.left = 0
    this.footer.style.right = 0


    if (this.mq.matches) {
      this.baseAnimationSpeed = .25;
    } else {
      this.baseAnimationSpeed = .1;
    }

    this.initialNavSetup(this.mq.matches)

    scrollbar.addListener(({ offset }) => {
      this.offset = offset

      this.footer.style.top = `${offset.y +
        (scrollbar.bounding.bottom -
          this.footer.getBoundingClientRect().height)}px`

      const parallax1 = this.parallaxSections[0].getBoundingClientRect()
      const parallax2 = this.parallaxSections[1].getBoundingClientRect()

      if (parallax1.top < (window.innerHeight)) {
        const images = Array.from(this.parallaxSections[0].querySelectorAll('[data-parallax-image]'))
        this.parallaxImageStyles(images);
      }


      if (parallax2.top < (window.innerHeight)) {
        const images = Array.from(this.parallaxSections[1].querySelectorAll('[data-parallax-image]'))
        this.parallaxImageStyles(images);
      }


      if (this.offset.y < window.innerHeight) {
        this.hero.style.visibility = 'visible'
        this.footer.style.visibility = 'hidden'
      } else {
        this.hero.style.visibility = 'hidden'
        this.footer.style.visibility = 'visible'
      }

      if (this.offset.y >= this.heroDims.height) {
        this.pastHero = true
        this.setState({pastHero: true})
      } else {
        this.pastHero = false
        this.setState({pastHero: false})
      }

      if (this.mq.matches) {
        this.hero.style.top = `${offset.y}px`
        this.menu.style.top = `${this.hero.getBoundingClientRect().height}px`

        this.menuScrollOffsets()
      } else {
        this.menu.style.top = `${offset.y}px`
        this.hero.style.top = ` ${offset.y + 70}px`
      }
    })

    this.mq.addListener(media => {
      this.heroDims = this.hero.getBoundingClientRect()

      this.footerSpacer.style.height = `${
        this.footer.getBoundingClientRect().height
      }px`

      if (media.matches) {

        if (this.offset) {
          this.baseAnimationSpeed = .25;
          this.hero.style.top = `${this.offset.y}px`
          this.menuScrollOffsets()
        } else {
          this.initialNavSetup(media.matches)
        }
      } else {
        this.baseAnimationSpeed = .1;
        if (this.offset) {
          this.hero.style.top = `${this.offset.y + 70}px`
          this.menu.style.top = `${this.offset.y}px`
        } else {
          this.initialNavSetup(media.matches)
        }
      }
    })

    window.addEventListener('resize', throttle(() => {
      this.resizeOffsets()
    }, 200).bind(this))

    sal({
      threshold: 0.4,
      once: true,
    })
  }

  initialNavSetup(isLarge) {
    if (isLarge) {
      this.menu.style.top = `${this.hero.getBoundingClientRect().height}px`
      this.hero.style.top = 0
    } else {
      this.menu.style.top = 0
      this.hero.style.top = `70px`
    }
  }

  resizeOffsets() {
    const heroDims = this.hero.getBoundingClientRect()

    if (this.offset) {
      this.menuScrollOffsets();
    } else {
      this.menu.style.top = this.mq.matches ? `${heroDims.height}px` : 0
      this.pastHero = false
    }
  }

  menuScrollOffsets() {
    const heroDims = this.hero.getBoundingClientRect()

    if (this.offset.y > heroDims.height) {
      this.menu.style.top = `${this.offset.y}px`
      this.pastHero = true
    } else {
      this.menu.style.top = `${heroDims.height}px`
      this.pastHero = false
    }
  }

  parallaxImageStyles(images) {
    return images.map((image, i) => {

      const multipler = i === images.length - 1 || i === 0 ? 1 : i + 1;
      const top = image.getBoundingClientRect().top
      image.style.transform = `translateY(${top * (this.baseAnimationSpeed * multipler)}px)`;
    })
  }

  render() {
    return (
      <Layout>
        <div className={styles.container}>
          <Scrollbar ref={c => (this.scrollContainer = c)}>
            <Hero
              clickHandler={(e, id) => {
                e.preventDefault()
                this.scrollContainer.scrollbar.scrollIntoView(document.querySelector(id), {
                  alignToTop: true,
                  offsetTop: 70,
                });
              }}
            />
            <Menu
              pastHero={this.state.pastHero}
              clickHandler={(e, id) => {
                e.preventDefault()
                this.scrollContainer.scrollbar.scrollIntoView(document.querySelector(id), {
                  alignToTop: true,
                  offsetTop: 70,
                });
              }}
            />
            <NewKind />
            <Us />
            <Clients />
            <Partner />
            <Projects />
            <Tumblr />
            <Meet />
            <Footer />
          </Scrollbar>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
