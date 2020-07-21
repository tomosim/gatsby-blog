import React from "react"
import TagButton from "./tag-button"
import styles from "./tag-list.module.css"

const TagList = ({ tags }) => {
  return (
    <div className={styles.list}>
      {tags.map(tag => {
        return <TagButton name={tag} key={tag} />
      })}
    </div>
  )
}

export default TagList
