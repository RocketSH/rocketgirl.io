import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({siteTitle}) => (
  <header className="navigation">
    <Link to="/" className="navigation__logo">
      {siteTitle}
    </Link>

    <Link to="/" className="navigation__item push-right">
      那些地球上的旅行 Earth tour
    </Link>
    <Link to="/rails" className="navigation__item">
      Rails
    </Link>
    <a href="#" className="navigation__item">
      Frontend
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
