import React from "react"
import PropTypes from "prop-types"

import "./layout.css"
import Navbar from "./navbar"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="content">{children}</div>
      <footer>
        Follow me{" "}
        <a className="footerLink" href="https://www.instagram.come/simmms90/">
          @simmms90
        </a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
