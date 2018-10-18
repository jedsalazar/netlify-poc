import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>What up my peeps?! From the second page</h1>
    <p>What a world</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
