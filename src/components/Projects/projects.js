import React, { Component } from 'react'

import styles from './projects.module.css'
import data from '../../../content/data'


class Projects extends Component {
  constructor() {
    super()
    this.slider = React.createRef()
    this.sliderWrap = React.createRef()
    this.mq = null;
    this.matches = null;
    this.state = {
      flky: null,
    }
  }

  componentDidMount() {
    this.mq = window.matchMedia('(min-width: 768px)');
    this.matches = this.mq.matches;

    this.mq.addListener(data => {
      this.matches = data.matches
      this.fkly.resize();
    });

    const Flickity = require('flickity')

    const flky = new Flickity(this.slider.current, {
      prevNextButtons: false,
      pageDots: false,
      friction: 0.98,
      percentPosition: true,
      autoPlay: this.matches ? 4000 : false,
      wrapAround: this.matches ? true : false,
      cellAlign: this.matches ? 'left' : 'center',
      contain: this.matches ? true : false,
    })

    this.setState({
      flky: flky,
    })

    this.slider.current.querySelector('.flickity-viewport').style.overflow = 'visible';

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
        <h2 className={styles.title}>{data.projects.title}</h2>
        {data.projects.list.length > 0 && (
          <div className={styles.content}>
            <ul className={styles.list} ref={this.slider}>
              {data.projects.list.map((project, i) => {
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
