import React, { Component } from "react"
// import BlogCard from "../components/blog-card"
import styles from "./blog-list.module.css"

export default class BlogList extends Component {
  render() {
    return (
      <div className={styles.blogGrid}>
        {this.props.blogs.map(blog => {
          return <h3>{blog.node.frontmatter.title}</h3>
          //   return <BlogCard key={blog.node.frontmatter.title} blog={blog} />
        })}
      </div>
    )
  }
}
