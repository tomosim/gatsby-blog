import PropTypes from "prop-types"
import React from "react"
import styles from "./header.module.css"

const Header = ({ siteTitle, tag }) => (
  <header>
    <h1 className={styles.title}>{siteTitle}</h1>
    {tag && <h2 className={styles.subTitle}>{tag}</h2>}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
