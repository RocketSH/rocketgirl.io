import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({siteTitle}) => (
  <header className="navigation">
    <p className="navigation__logo">{siteTitle}</p>

    <a href="#" className="navigation__item push-right">
      Home
    </a>
    <a href="#" className="navigation__item">
      Rails
    </a>
    <a href="#" className="navigation__item">
      HTML
    </a>
    <a href="#" className="navigation__item">
      CSS
    </a>
    <a href="#" className="navigation__item">
      Git
    </a>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
