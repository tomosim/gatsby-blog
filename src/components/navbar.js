import React, { useState } from "react"
import { Link } from "gatsby"
import DropDown from "./dropdown"
import styles from "./navbar.module.css"

export default function Navbar() {
  const [dropDownIsOpen, setDropDown] = useState(false)

  return (
    <nav className={styles.navbar}>
      <Link className={styles.navbarLink} to="/">
        Home
      </Link>
      <Link className={styles.navbarLink} to="/blog">
        Blog
      </Link>
      <DropDown dropDownIsOpen={dropDownIsOpen} setDropDown={setDropDown} />
    </nav>
  )
}
