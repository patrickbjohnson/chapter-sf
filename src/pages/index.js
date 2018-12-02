import React from 'react'

import Layout from '../components/layout'
import Hero from '../components/Hero'
import Menu from '../components/DesktopMenu'
import Partner from '../components/Partner'
import Clients from '../components/Clients'
import Projects from '../components/Projects'
import Tumblr from '../components/Tumblr'

import Meet from '../components/Meet'
import Us from '../components/Us'
import SocialLinks from '../components/SocialLinks'
import Newsletter from '../components/Newsletter'

const IndexPage = () => (
  <Layout>
    <Hero />
    <Menu />
    <Partner />
    <Clients />
    <Projects />
    <Tumblr />
    <Meet />
    <Us />
    <SocialLinks />
    <Newsletter />
  </Layout>
)

export default IndexPage
