import React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hello from "../components/hello"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people!</h1>
    <p>I am Rocketgirl, let's explore the universe of programming together.</p>
    <Hello />
    <div style={{maxWidth: `300px`, marginBottom: `1.45rem`}}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <br />
    <a href="https://www.freepik.com/free-photos-vectors/background">
      Background vector created by freepik - www.freepik.com
    </a>
  </Layout>
)

export default IndexPage
