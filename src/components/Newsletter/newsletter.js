import React, { Component } from 'react'
import axios from 'axios'
import jsonpAdapter from 'axios-jsonp'

import styles from './newsletter.module.css'

class Newsletter extends Component {
  constructor() {
    super()

    this.state = {
      success: null,
      failure: null,
      email: null,
      msg: null,
      url:
        'https://pbj.us3.list-manage.com/subscribe/post-json?u=2bb0490335edae28c4fa22445&amp;id=4034230b9a&c=?',
    }
  }

  submitHandler = e => {
    e.preventDefault()

    axios({
      method: 'POST',
      adapter: jsonpAdapter,
      callbackParamName: 'c',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      params: {
        EMAIL: this.state.email,
      },
      url: this.state.url,
    })
      .then(response => {
        const { result, msg } = response.data

        this.setState({
          success: result === 'success',
          failure: result === 'error',
          msg: msg,
        })
      })
      .catch(error => {
        console.log('Error ---- ', error)
      })
  }

  changeHandler = e => {
    return this.setState({
      email: e.target.value,
    })
  }

  render() {
    return (
      <>
        <div className={styles.spacer} data-newsletter-spacer />
        <section className={styles.section} data-newsletter>
          <div className={styles.flex}>
            <form onSubmit={this.submitHandler} className={styles.form}>
              <input
                onChange={this.changeHandler}
                className={styles.input}
                type="email"
                placeholder="Follow our newsletter"
                required
              />

              <button type="submit" className={styles.button}>
                <span className={styles.sr}>Submit</span>
              </button>
            </form>
          </div>
          <div className={styles.message}>
            <p dangerouslySetInnerHTML={{ __html: this.state.msg }} />
          </div>
        </section>
      </>
    )
  }
}

export default Newsletter
