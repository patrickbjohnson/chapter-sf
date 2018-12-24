import React from 'react'

import styles from './projects.module.css'

const projects = [
  'Experiences',
  'Products',
  'Systems',
  'Tortor Bibendum',
  'Sit',
  'Risus Mattis Dolor',
]

const Projects = () => {
  return (
    <section className={styles.section} id="project-list">
      <h2 className={styles.title}>Some things we’ve made</h2>
      {projects.length > 0 && (
        <div className={styles.content}>
          <ul className={styles.list}>
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

export default Projects
