import React, { Component } from 'react'
import axios from 'axios'
import styles from './partner.module.css'

class Partner extends Component {
  constructor(props) {
    super(props)

    this.state = {
      successMessage: 'Success! You\'ll hear from us soon.',
      formUrl: 'https://usebasin.com/f/fe1f13ede55d',
      isEmpty: true,
      success: null,
      message: '',
    }
  }

  changeHandler = (e) => {
    console.log(e.target.value)
    this.setState({
      isEmpty: !!e.target.value.length <= 0,
      message: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    
    if (this.state.isEmpty) return

    axios.post(
      this.state.formUrl, 
      {message: this.state.message}, 
      {headers: {'Accept': 'application/json'}}
    )
    .then((response) => {
      const { success } = response.data

      this.setState({
        success: success,
        message: '',
        isEmpty: true,
      })
    })
    .catch((error) => {
        this.setState({
          success: false,
          isEmpty: true,
        })
    });
  }

  buttonClasses = () => {
    return this.state.isEmpty
      ? [styles.button, styles.disabled].join(' ')
      : styles.button
  }

  render() {
    return (
      <section id="partner" className={styles.section} data-section>
        <div className={styles.content}>
          <span className={styles.title}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 116">
              <path d="M5 4.9h57.1c24.7 0 41 13 41 32.7 0 11.1-5.4 21-14.6 26.9-6.2 4-11.9 5.2-23.3 5.2H21.1v40.7H5V4.9zm15.7 14.6l.5-.5v36.4H63c16.8 0 24.7-5.9 24.7-18.2 0-10.8-8.9-17.7-22.3-17.7H20.7zM195.5 4.9h18.7l49 105.5h-17.7l-11.1-24.2h-63.8l-12.3 24.2h-18.4L195.5 4.9zM229 71.5l-24.7-53.7L178 71.5h51zM305.4 4.9h66.4c22 0 35.6 10.3 35.6 27.1 0 14.6-10.8 23.3-30.5 25.2 3.2 4.3 4.3 5.9 6.8 10l27.8 43.3h-20.1l-31.8-52h-38.1v-.2 52.3h-16.1V4.9zm15.7 13.7h.4V44h51.9c11.7 0 18.5-4.7 18.5-13 0-8.1-6.8-12.5-19.5-12.5h-51.3zM446.2 4.9h106.1v14.4h-44.9v91.2h-16.1V19.4h-45.1V4.9zM594.9 4.9h21.8l55.4 68.2 12.5 16.5.5.8s-.6-11.9-.6-21.7V4.9h15.3v105.5h-17.9L622.8 38c-6.2-7.6-12.5-16.5-12.5-16.5l-.6.3.8-.3v88.9H595V4.9zM750.3 4.9h89.1v14.6h-72.9v23.9h61.2V58h-61.4.1v38.1H843v14.4h-92.7V4.9zM888.9 4.9h66.4c22 0 35.6 10.3 35.6 27.1 0 14.6-10.8 23.3-30.5 25.2 3.2 4.3 4.3 5.9 6.8 10l27.8 43.3h-20.1l-31.8-52H905v52h-16.1V4.9zM905 18.6V44h51.9c11.7 0 18.5-4.7 18.5-13 0-8.1-6.8-12.5-19.5-12.5H905z" />
            </svg>
          </span>
          <p className={styles.copy}>
            Do you want to build something human friendly that people care about?
            We work with a <span>select number of pioneering companies</span> who
            know they need to change what they do to meet the unreasonable
            expectations people have today.
          </p>
          <form onSubmit={this.handleSubmit} className={styles.form} acceptCharset="UTF-8" method="POST">
            <input type="hidden" name="_gotcha" />
            <label className={styles.label}>What keeps you up at night?</label>
            <textarea onChange={this.changeHandler} className={styles.input} name="message" value={this.state.message}/>
            
            <button
              className={this.buttonClasses()}
              disabled={this.state.isEmpty ? 'disabled' : ''}
            >
              Send
            </button>
          </form>

          {this.state.success &&
            <div className={styles.message}>
              <p>{this.state.successMessage}</p>
            </div>
          }
        </div>
      </section>
    )
  }
}

export default Partner
