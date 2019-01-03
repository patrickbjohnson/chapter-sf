import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../../static/fonts/fonts.css'
import './layout.css'
import './sal.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
          link={[
            {
              rel: 'stylesheet',
              href:
                'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.css',
            },
            {
              rel: 'stylesheet',
              href: 'https://assets.calendly.com/assets/external/widget.css',
            },
            {
              rel: 'stylesheet',
              href:
                'https://cdnjs.cloudflare.com/ajax/libs/flickity/2.1.2/flickity.min.css',
            },
          ]}
          script={[
            {
              type: 'text/javascript',
              src: 'https://assets.calendly.com/assets/external/widget.js',
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        {children}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
