import React from "react"
import { Link } from "gatsby"

export default function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>
    </div>
  )
}
