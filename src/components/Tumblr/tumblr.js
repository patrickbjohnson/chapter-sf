import React, { Component } from 'react'
import chunk from 'lodash.chunk'

import JoinUs from '../JoinUs'
import styles from './tumblr.module.css'

class Tumblr extends Component {
  constructor(props) {
    super(props)

    this.state = {
      photos: [
        {
          src: 'http://placehold.it/800x800'
        },
        {
          src: 'http://placehold.it/800x800'
        },
        {
          src: 'http://placehold.it/800x800'
        },
        {
          src: 'http://placehold.it/800x800'
        }
      ],
    }
  }

  componentDidMount() {
    this.processPosts()
  }

  processPosts = posts => {
    this.setState({
      photoSets: chunk(this.state.photos, 2),
    })
  }

  render() {
    return (
      <>
        {this.state.photoSets &&
          this.state.photoSets[0].length === 2 && (
            <section className={styles.section}>
              {this.state.photoSets[0].map((photo, i) => {
                return (
                  <div
                    className={styles.imageWrap}
                    key={i}
                    style={{
                      backgroundImage: `url(${photo.src})`,
                    }}
                  >
                    {photo.caption && (
                      <a className={styles.caption} href={photo.url}>
                        <p
                          dangerouslySetInnerHTML={{ __html: photo.caption }}
                        />
                      </a>
                    )}
                  </div>
                )
              })}
            </section>
          )}

        <JoinUs />

        {this.state.photoSets &&
          this.state.photoSets[1].length === 2 && (
            <section className={styles.section}>
              {this.state.photoSets[1].map((photo, i) => {
                return (
                  <div
                    className={styles.imageWrap}
                    key={i}
                    style={{
                      backgroundImage: `url(${photo.src})`,
                    }}
                  >
                    {photo.caption && (
                      <a className={styles.caption} href={photo.url}>
                        <p
                          dangerouslySetInnerHTML={{ __html: photo.caption }}
                        />
                      </a>
                    )}
                  </div>
                )
              })}
            </section>
          )}
      </>
    )
  }
}

export default Tumblr
