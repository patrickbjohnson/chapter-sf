import React, { Component } from 'react'

import styles from './projects.module.css'

const projects = [
  'Experiences',
  'Products',
  'Systems',
  'Tortor Bibendum',
  'Bibendum',
  'Risus Mattis Dolor',
]

class Projects extends Component {
  constructor() {
    super()
    this.slider = React.createRef()
    this.sliderWrap = React.createRef()
    this.state = {
      flky: null,
    }
  }

  componentDidMount() {
    const Flickity = require('flickity')

    const flky = new Flickity(this.slider.current, {
      prevNextButtons: false,
      autoPlay: 2000,
      wrapAround: true,
      pageDots: false,
      selectedAttraction: 0.01,
      friction: 0.2,
      cellAlign: 'left',
      percentPosition: false,
    })

    this.setState({
      flky: flky,
    })

    this.slider.current.addEventListener('mouseout', e => {
      this.mouseHandler()
    })
  }

  mouseHandler() {
    this.state.flky.playPlayer()
  }

  render() {
    return (
      <section className={styles.section} id="project-list">
        <h2 className={styles.title}>Some things we’ve made</h2>
        {projects.length > 0 && (
          <div className={styles.content}>
            <ul className={styles.list} ref={this.slider}>
              {projects.map((project, i) => {
                return (
                  <li className={styles.item} key={i}>
                    {project}
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </section>
    )
  }
}

export default Projects
