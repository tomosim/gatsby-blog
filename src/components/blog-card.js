import React from "react"
import styles from "./blog-card.module.css"
import { Link } from "gatsby"

const BlogCard = ({ blog: { node } }) => {
  return (
    <Link to={`/placeholder`}>
      <div className={styles.blogCard}>
        <h4 className={styles.date}>{node.frontmatter.date}</h4>
        <header className={styles.title}>
          <h2>{node.frontmatter.title}</h2>
        </header>
        <main className={styles.description}>
          <p>{node.excerpt}</p>
        </main>
        <p className={styles.author}>{node.frontmatter.author}</p>
      </div>
    </Link>
  )
}

export default BlogCard
