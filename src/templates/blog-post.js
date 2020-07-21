import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import styles from "./blog-post.module.css"
import TagList from "../components/tag-list"

export default function BlogPost({ pageContext, data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO title="Blog" />
      <main className={styles.blogMain}>
        <h1 className={styles.title}>{post.frontmatter.title}</h1>
        <h4 className={styles.subtitle}>
          {post.frontmatter.date} | {post.frontmatter.author || "Anonymous"}{" "}
        </h4>
        <TagList tags={post.frontmatter.tags} />
        <article
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        ></article>
      </main>
    </Layout>
  )
}

export const blogPageQuery = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt(format: HTML, pruneLength: 1000)
      html
      frontmatter {
        title
        author
        date(formatString: "MMMM DD, YYYY")
        tags
      }
    }
  }
`
