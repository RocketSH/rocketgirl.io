import React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const RailsPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Welcome to my Rails learning page</h1>
    <p>
      <Link to="/page-2/">符號 Symbols in Ruby </Link>
    </p>
  </Layout>
)

export default RailsPage
