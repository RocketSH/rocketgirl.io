import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const HeroFooter = ({siteTitle}) => (
  <div className="hero-foot">
    <div className="hero-foot--wrapper">
      <div className="columns">
        <div className="column is-12 hero-menu-desktop has-text-centered">
          {/* <Link to="/" className="navigation__logo">
            {siteTitle}
          </Link>
          <Link href="/life" className="navigation__item">
            Life
          </Link> */}
          <ul>
            <Link to="/">Home</Link>
            <Link to="/learning-notes">Learning Notes</Link>
            <li>
              <Link to="/life">Life</Link>
            </li>
          </ul>
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
