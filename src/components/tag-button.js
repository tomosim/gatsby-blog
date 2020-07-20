import React from "react"
import { Link } from "gatsby"

const TagButton = ({ name }) => {
  return (
    <Link to={`/tags/${name}`}>
      <button>{name}</button>
    </Link>
  )
}

export default TagButton
