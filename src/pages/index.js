import React from 'react'

import Layout from '../components/layout'
import Partner from '../components/Partner'
import Clients from '../components/Clients'
import Projects from '../components/Projects'
import Tumblr from '../components/Tumblr'
import JoinUs from '../components/JoinUs'
import Meet from '../components/Meet'
import Us from '../components/Us'
import SocialLinks from '../components/SocialLinks'
import Newsletter from '../components/Newsletter'

const IndexPage = () => (
  <Layout>
    <Partner />
    <Clients />
    <Projects />
    <Tumblr />
    <JoinUs />
    <Tumblr />
    <Meet />
    <Us />
    <SocialLinks />
    <Newsletter />
  </Layout>
)

export default IndexPage
