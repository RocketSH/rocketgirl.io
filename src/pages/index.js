import React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import Hero from "../components/hero"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />

    <p>
      <Link to="/page-2/">Go to page 2</Link>
    </p>
  </Layout>
)

export default IndexPage
