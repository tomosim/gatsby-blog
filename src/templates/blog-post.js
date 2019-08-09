import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Header from "../components/header"
import Img from "gatsby-image"
import styles from "./blog-post.module.css"

export default function BlogPost({ pageContext, data }) {
  // const { slug } = pageContext
  const post = data.markdownRemark
  const featuredImgFluid = post.frontmatter.primaryImage.childImageSharp.fluid
  return (
    <Layout>
      <SEO title="Blog" />
      <main className={styles.blogMain}>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <Img fluid={featuredImgFluid}></Img>
        <div
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.excerpt }}
        ></div>
      </main>
    </Layout>
  )
}

export const blogPageQuery = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt(format: HTML, pruneLength: 10000)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        primaryImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
