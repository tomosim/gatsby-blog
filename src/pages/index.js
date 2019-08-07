import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <Header siteTitle={data.site.siteMetadata.title} />
    </Layout>
  )
}

export default IndexPage
