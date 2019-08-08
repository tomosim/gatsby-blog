import React from "react"
import { graphql } from "gatsby"

import Header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about"

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" />
      <Header siteTitle={data.site.siteMetadata.title} />
      <About />
    </Layout>
  )
}

export const blogPageQuery = graphql`
  query RecentPosts {
    allMarkdownRemark(
      limit: 3
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            author
            date(fromNow: false)
            title
            primaryImage {
              childImageSharp {
                fixed(width: 300) {
                  src
                  srcSet
                  height
                  width
                }
              }
            }
          }
          excerpt(pruneLength: 100)
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
