import React, { Component } from 'react'
import { Link } from 'gatsby'

import social from '../../utils/socialLinks'

import styles from './mobileMenu.module.css'

class MobileMenu extends Component {
  constructor(props) {
    super(props)
  }

  menuClasses = () => {
    return this.props.isOpen ? `${styles.menu} ${styles.open}` : styles.menu
  }

  navClasses = nav => {
    return this.props.activeNav === nav
      ? `${styles.active} ${styles.link}`
      : styles.link
  }

  render() {
    return (
      <div className={this.menuClasses()}>
        <nav className={styles.nav}>
          {this.props.menu.map((item, i) => {
            return (
              <Link
                to={`#${item.id}`}
                key={i}
                className={this.navClasses(item.id)}
              >
                {item.id}
              </Link>
            )
          })}
        </nav>
        <nav className={styles.smallNav}>
          {social.map((link, i) => {
            return (
              <a
                className={styles.smallLink}
                href={link.url}
                key={i}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
              </a>
            )
          })}
        </nav>
      </div>
    )
  }
}

export default MobileMenu
