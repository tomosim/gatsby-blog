import React from "react"
import styles from "./blog-card.module.css"
import { Link } from "gatsby"

const BlogCard = ({ blog: { node } }) => {
  const path = `/blog/${node.fields.slug}`
  return (
    <div className={styles.blogCard}>
      <header className={styles.header}>
        <Link to={path}>
          <h2 className={styles.title}>{node.frontmatter.title}</h2>
        </Link>
        <h4 className={styles.date}>{node.frontmatter.date}</h4>
      </header>
      <article className={styles.description}>
        <p>{node.excerpt}</p>
      </article>
      <p className={styles.author}>{node.frontmatter.author}</p>
    </div>
  )
}

export default BlogCard
