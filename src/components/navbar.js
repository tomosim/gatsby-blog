import React from "react"
import { Link } from "gatsby"
import styles from "./navbar.module.css"

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link className={styles.navbarLink} to="/">
        Home
      </Link>
      <Link className={styles.navbarLink} to="/blog">
        Blog
      </Link>
    </nav>
  )
}
