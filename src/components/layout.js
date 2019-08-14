import React from "react"
import PropTypes from "prop-types"

import "./layout.css"
import Navbar from "./navbar"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="content">
        {children}
      </div>
      <footer >Made by <a className="footerLink" href="https://github.com/tomosim">@tomosim</a></footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
