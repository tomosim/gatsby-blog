import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogList from "../components/blog-list"
import Header from "../components/header"

const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout>
      <SEO title="Blogs" />
      <div className="parallax-blogs"></div>
      <main>
        <Header siteTitle="Blogs" />
        <BlogList blogs={posts} />
      </main>
    </Layout>
  )
}

export const blogListQuery = graphql`
  query AllPosts {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          frontmatter {
            author
            date(fromNow: true)
            title
          }
          fields {
            slug
          }
          excerpt(pruneLength: 300)
        }
      }
    }
  }
`

export default BlogPage
