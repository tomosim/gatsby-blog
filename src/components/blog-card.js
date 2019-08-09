import React from "react"
import styles from "./blog-card.module.css"
import { Link } from "gatsby"

const BlogCard = ({ blog: { node } }) => {
  const path = `/blog/${node.fields.slug}`
  return (
    <div className={styles.blogCard}>
      <h4 className={styles.date}>{node.frontmatter.date}</h4>
      <Link to={path}>
        <header className={styles.title}>
          <h2>{node.frontmatter.title}</h2>
        </header>
      </Link>
      <main className={styles.description}>
        <p>{node.excerpt}</p>
      </main>
      <p className={styles.author}>{node.frontmatter.author}</p>
    </div>
  )
}

export default BlogCard
