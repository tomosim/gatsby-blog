import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import styles from "./dropdown.module.css"
import onClickOutside from "react-onclickoutside"
import formatTag from "../utils/tag-formatter"

const DropDown = ({ dropDownIsOpen, setDropDown }) => {
  DropDown.handleClickOutside = () => setDropDown(false)
  return (
    <StaticQuery
      query={graphql`
        query AllTags {
          allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  tags
                }
              }
            }
          }
        }
      `}
      render={data => {
        const posts = data.allMarkdownRemark.edges
        console.log(posts)
        const tags = posts.reduce((acc, post) => {
          post.node.frontmatter.tags.forEach(tag => {
            if (!acc.includes(tag)) acc.push(tag)
          })
          return acc
        }, [])
        return (
          <div
            className={styles.navbarLink}
            onClick={() => setDropDown(true)}
            //   onMouseLeave={() => setDropDown(false)}
          >
            Tags
            {dropDownIsOpen && (
              <div className={styles.dropdown}>
                {tags.map(tag => {
                  return (
                    <Link to={`/tags/${tag}`} className={styles.dropdownItem}>
                      {formatTag(tag)}
                    </Link>
                  )
                })}
              </div>
            )}
          </div>
        )
      }}
    />
  )
}

const clickOutsideConfig = {
  handleClickOutside: () => DropDown.handleClickOutside,
}

export default onClickOutside(DropDown, clickOutsideConfig)
