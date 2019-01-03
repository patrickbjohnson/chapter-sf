import React from 'react'

import Slider from 'react-slick'

import styles from './hero.module.css'

const slides = [
  {
    img: 'https://images.unsplash.com/photo-1498248193836-88f8c8d70a3f',
    credit: 'Mark Clennon',
    url: 'https://www.markclennon.com/',
  },
  {
    img: 'https://images.unsplash.com/photo-1542979915-a9c2df9a2e74',
    credit: 'Mark Clennon',
    url: 'https://www.markclennon.com/',
  },
  {
    img: 'https://images.unsplash.com/photo-1543013180-2bf6c621052f',
    credit: false,
    url: false,
  },
  {
    img: 'https://images.unsplash.com/photo-1543050169-a7b5c9094109',
    credit: 'Mark Clennon',
    url: 'https://www.markclennon.com/',
  },
]

const slideSettings = {
  infinite: true,
  speed: 500,
  arrows: false,
  dots: false,
  autoplay: true,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const Hero = (props) => {

  return (
    <section className={styles.section} data-hero >
      <div className={styles.spacer} />
        <h1 className={styles.title}
            data-sal="fade"
            data-sal-delay="200"
            data-sal-duration="500"
            data-sal-easing="ease-in-cubic">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1863 236">
            <path
              fill="#fff"
              d="M187.3 77.9c-11.1-25.2-38-35.8-69-35.8-22.5 0-40.1 6.7-55.3 21.4-15.5 14.9-23.1 32.8-23.1 55 0 44.5 31.9 75.5 77.3 75.5 19 0 36.6-5.6 50-15.8 7.6-5.9 12.6-11.4 21.4-23.7l23.7 15.5c-11.7 15.5-19.6 23.4-31.3 31.3-17.3 11.1-40.4 17.8-63.2 17.8-33.7 0-55-7.3-74.6-24.3-20.2-18.1-31.9-45.6-31.9-74.6 0-61.5 42.1-103.3 104.2-103.3 23.1 0 45.9 6.1 64.7 17 14 8.2 23.1 17.9 31.3 33.1l-24.2 10.9zM294.5 20.4h29.8V87.8v-.1h135V20.4h29.8v195.2h-29.8V114h-135v101.5h-29.8V20.4zM671.4 20.4h34.5l90.7 195.2h-32.8l-20.5-44.8H625.4l-22.8 44.8h-33.9L671.4 20.4zm60.8 124.1L687.9 43.9l-49.6 100.6h93.9zM874.4 20.4H980c45.7 0 75.8 24 75.8 60.6 0 20.5-10 38.9-26.9 49.8-11.4 7.3-21.9 9.7-43 9.7h-81.6v75.3h-29.8V20.4zm29.9 26.8v66.4h77.2c31 0 45.6-10.8 45.6-33.7 0-19.9-16.4-32.8-41.3-32.8l-81.5.1zM1124.3 20.4h196.4V47h-77.3l-5.9.1v168.5h-29.8V47h-83.4V20.4zM1399.1 20.4h164.8v26.9H1429v44.2h113.3v26.9H1429h.1V189h-.2 141.8v26.6h-171.5V20.4zM1655.4 20.4h122.9c40.7 0 65.8 19 65.8 50 0 26.9-19.9 43-56.5 46.5 5.9 7.9 7.9 10.8 12.6 18.4l51.5 80.2h-37.2l-58.8-96.3h-70.5v96.2h-29.8v-195zm29.9 25.2v47.1h96c21.7 0 34.2-8.8 34.2-24 0-14.9-12.6-23.1-36-23.1h-94.2z"
            />
          </svg>
        </h1>

      <Slider {...slideSettings}>
        {slides.map((slide, i) => {
          return (
            <div key={i}>
              <div
                className={styles.slide}
                style={{ backgroundImage: `url(${slide.img})` }}
              >
                <h2>{slide.text}</h2>
                <div className={styles.caption}>
                  {slide.credit &&
                    slide.url && (
                      <a className={styles.credit} href={slide.url}>
                        {slide.credit}
                      </a>
                    )}

                  {slide.credit &&
                    !slide.url && (
                      <span className={styles.credit}>{slide.credit}</span>
                    )}
                </div>
              </div>
            </div>
          )
        })}
      </Slider>

      <div className={styles.downArrow} onClick={(e) => {
          e.preventDefault();
          props.clickHandler(e, '#new-kind')
        }}/>
    </section>
  )
}

export default Hero
