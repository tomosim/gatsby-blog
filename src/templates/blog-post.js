import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function BlogPost({ pageContext }) {
  const { slug } = pageContext
  return (
    <Layout>
      <SEO title="Blog" />
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>{slug}</h1>
        <p>Lorem blah blah blipsom</p>
      </div>
    </Layout>
  )
}
