import React from "react"
import { Link } from "gatsby"
import styles from "./tag-button.module.css"

const TagButton = ({ name }) => {
  return (
    <Link to={`/tags/${name}`}>
      <button className={styles.tag}>{name}</button>
    </Link>
  )
}

export default TagButton
