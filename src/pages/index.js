import React from "react"
import { graphql } from "gatsby"

import Header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about"
import BlogGrid from "../components/blog-list"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="parallax"></div>
      <main>
        <Header siteTitle={data.site.siteMetadata.title} />
        <About />
        <BlogGrid blogs={data.allMarkdownRemark.edges} />
      </main>
    </Layout>
  )
}

export const blogListQuery = graphql`
  query RecentPosts {
    allMarkdownRemark(
      limit: 3
      sort: { fields: frontmatter___date, order: DESC }
    ) {
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
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default IndexPage
