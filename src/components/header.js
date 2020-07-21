import PropTypes from "prop-types"
import React from "react"
import styles from "./header.module.css"
import formatTag from "../utils/tag-formatter"

const Header = ({ siteTitle, tag }) => (
  <header>
    <h1 className={styles.title}>{siteTitle}</h1>
    {tag && <h2 className={styles.subTitle}>{formatTag(tag)}</h2>}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
