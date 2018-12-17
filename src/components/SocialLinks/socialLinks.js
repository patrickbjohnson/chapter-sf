import React from 'react'

import social from '../../utils/socialLinks'

import styles from './socialLinks.module.css'

const SocialLinks = () => {
  return (
    <section
      className={styles.section}
      data-social
    >
      <div className={styles.container}
        data-sal="slide-up"
        data-sal-delay="100"
        data-sal-duration="600"
        data-sal-easing="ease-out-bounce"
      >
        {social.map((link, i) => {

          switch(link.name) {
            case 'twitter':
                return <a
                className={styles.link}
                href={link.url}
                key={i}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M30 15c0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15C0 6.716 6.716 0 15 0c8.284 0 15 6.716 15 15zm-7.125-4.557a6.233 6.233 0 0 1-1.754.48 3.08 3.08 0 0 0 1.343-1.69 6.286 6.286 0 0 1-1.942.735 3.055 3.055 0 0 0-5.207 2.784 8.655 8.655 0 0 1-6.297-3.184c-.265.448-.414.97-.414 1.537 0 1.062.541 1.995 1.359 2.544a3.045 3.045 0 0 1-1.383-.383v.038a3.056 3.056 0 0 0 2.45 2.997 3.058 3.058 0 0 1-1.374.053 3.065 3.065 0 0 0 2.86 2.122A6.124 6.124 0 0 1 8 19.742a8.687 8.687 0 0 0 4.692 1.372c5.623 0 8.694-4.655 8.694-8.686 0-.13 0-.26-.009-.39a6.18 6.18 0 0 0 1.527-1.583l-.029-.012z" fill="#000" fillRule="evenodd"/></svg>
              </a>
              break;
            case 'instagram':
              return <a
                className={styles.link}
                href={link.url}
                key={i}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M30 15c0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15C0 6.716 6.716 0 15 0c8.284 0 15 6.716 15 15zM19.4 11.407a.807.807 0 1 0-1.615 0 .807.807 0 0 0 1.615 0zM15 17.244a2.243 2.243 0 1 1 0-4.487 2.243 2.243 0 1 1 0 4.487zm0-5.7a3.456 3.456 0 1 0 0 6.913 3.456 3.456 0 1 0 0-6.913zm0-2.064c1.797 0 2.011.009 2.72.04.657.032 1.013.14 1.25.233.315.122.538.267.776.503.234.235.381.46.502.774.091.237.202.594.231 1.25.032.71.04.923.04 2.72 0 1.798-.009 2.01-.042 2.72-.034.658-.143 1.014-.236 1.25a2.135 2.135 0 0 1-.504.776 2.1 2.1 0 0 1-.774.502c-.236.093-.598.202-1.254.232-.715.03-.925.039-2.726.039s-2.012-.008-2.726-.042c-.657-.034-1.018-.143-1.254-.235a2.089 2.089 0 0 1-.773-.505 2.024 2.024 0 0 1-.505-.774c-.093-.236-.202-.597-.236-1.253-.026-.707-.034-.926-.034-2.718 0-1.793.008-2.012.034-2.727.034-.656.143-1.017.236-1.254a1.98 1.98 0 0 1 .505-.774c.234-.235.454-.387.773-.504.236-.093.589-.202 1.246-.236.715-.025.925-.033 2.726-.033L15 9.48zm0-1.212c-1.828 0-2.057.009-2.775.04-.717.035-1.205.148-1.634.314a3.299 3.299 0 0 0-1.193.776 3.28 3.28 0 0 0-.776 1.194c-.167.428-.28.917-.313 1.633-.034.718-.041.947-.041 2.776 0 1.828.008 2.056.041 2.774.033.717.146 1.205.313 1.635.172.44.402.818.776 1.192s.75.606 1.193.777c.43.166.917.28 1.634.313.718.033.947.04 2.775.04 1.829 0 2.057-.01 2.775-.04.717-.034 1.205-.147 1.634-.313a3.31 3.31 0 0 0 1.193-.777c.373-.374.606-.75.777-1.192.166-.43.279-.918.312-1.635.034-.718.041-.946.041-2.774 0-1.83-.009-2.058-.041-2.776-.033-.716-.146-1.206-.312-1.633a3.31 3.31 0 0 0-.777-1.194 3.277 3.277 0 0 0-1.193-.776c-.429-.166-.917-.28-1.634-.313-.718-.034-.946-.041-2.775-.041z" fill="#000" fillRule="evenodd"/></svg>
              </a>
              break;
            case 'medium':
              return <a
                className={styles.link}
                href={link.url}
                key={i}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M30 15c0 8.285-6.716 15-15 15-8.284 0-15-6.715-15-15C0 6.716 6.716 0 15 0c8.284 0 15 6.715 15 15zm-7.52-5.687v-.252h-4.134l-2.947 7.354-3.353-7.353H7.709v.251l1.397 1.683a.577.577 0 0 1 .189.489v6.612a.761.761 0 0 1-.203.656L7.52 20.661v.25h4.456v-.251l-1.572-1.907a.784.784 0 0 1-.216-.656v-5.719l3.912 8.533h.455l3.359-8.533v6.802c0 .182 0 .216-.12.334l-1.207 1.174v.251h5.866v-.252l-1.166-1.145a.348.348 0 0 1-.133-.334v-8.415a.349.349 0 0 1 .133-.335l1.194-1.145z" fill="#000" fillRule="evenodd"/></svg>
              </a>
              break;
            case 'linkedin':
              return <a
                className={styles.link}
                href={link.url}
                key={i}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M30 15c0 8.285-6.716 15-15 15-8.284 0-15-6.715-15-15C0 6.716 6.716 0 15 0c8.284 0 15 6.715 15 15zm-8.47 6.52v-4.78c0-2.347-.506-4.149-3.245-4.149-1.317 0-2.2.723-2.563 1.408h-.034v-1.188H13.09v8.709h2.703v-4.31c0-1.135.215-2.235 1.625-2.235 1.387 0 1.408 1.3 1.408 2.31v4.235h2.703zm-11.492-9.9a1.57 1.57 0 1 0 0-3.14 1.57 1.57 0 0 0 0 3.14zm-1.354 9.9h2.71v-8.709h-2.71v8.709z" fill="#000" fillRule="evenodd"/></svg>
              </a>
              break;
            case 'spotify':
              return <a
                className={styles.link}
                href={link.url}
                key={i}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M23.852 13.35C19.05 10.5 11.026 10.2 6.45 11.626c-.75.224-1.5-.226-1.726-.9-.225-.752.226-1.5.9-1.728 5.326-1.575 14.1-1.274 19.652 2.027.674.375.898 1.275.523 1.95-.374.526-1.274.75-1.948.375m-.15 4.2c-.376.525-1.051.75-1.578.375C18.076 15.45 11.924 14.7 7.2 16.2c-.6.15-1.276-.15-1.425-.75-.151-.6.149-1.277.75-1.426C12 12.375 18.75 13.202 23.4 16.05c.45.226.675.975.3 1.5m-1.8 4.125c-.3.448-.824.6-1.276.3-3.525-2.175-7.95-2.626-13.201-1.427-.522.154-.973-.223-1.124-.673-.15-.526.226-.975.675-1.125 5.7-1.276 10.65-.75 14.55 1.65.525.225.599.824.377 1.275M15 0C6.75 0 0 6.75 0 15s6.75 15 15 15 15-6.75 15-15S23.326 0 15 0" fill="#000" fillRule="evenodd"/></svg>
              </a>
              break;
            default:
              return false;
          }

        })}
      </div>
      <a
        href="https://goo.gl/maps/HLm4KDK4AS22"
        className={styles.address}
        target="_blank"
        rel="noopener noreferrer"
      >
        2745, 19th Street, San Francisco, California, 94110
      </a>
    </section>
  )
}

export default SocialLinks
