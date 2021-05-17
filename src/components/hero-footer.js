import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const HeroFooter = ({siteTitle}) => (
  <div className="hero-foot">
    <div className="hero-foot--wrapper">
      <div className="columns">
        <div className="column is-12 hero-menu-desktop has-text-centered">
          <Link to="/">{siteTitle}</Link>
          <Link to="/" className="nav-items">
            Home
          </Link>
          {/* Todo: Timeline */}
          <Link to="/blog" className="nav-items">
            Blog
          </Link>
          <Link to="/gallery" className="nav-items">
            Gallery
          </Link>{" "}
          <Link to="/Resume" className="nav-items">
            Resume
          </Link>
        </div>
      </div>
    </div>
  </div>
)

HeroFooter.propTypes = {
  siteTitle: PropTypes.string,
}

HeroFooter.defaultProps = {
  siteTitle: ``,
}

export default HeroFooter
