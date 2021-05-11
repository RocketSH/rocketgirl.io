import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"
import Hero from "../components/hero"
import MainContent from "../components/homepage/main-content"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <MainContent />
  </Layout>
)

export default IndexPage
