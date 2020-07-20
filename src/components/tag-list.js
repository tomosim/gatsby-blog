import React from "react"
import TagButton from "./tag-button"

const TagList = ({ tags }) => {
  return (
    <div>
      {tags.map(tag => {
        return <TagButton name={tag} key={tag} />
      })}
    </div>
  )
}

export default TagList
