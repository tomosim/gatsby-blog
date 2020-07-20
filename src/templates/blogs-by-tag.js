import React from "react"
import BlogList from "../components/blog-list"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"

export default function BlogsByTag({ data, pageContext }) {
  return (
    <Layout>
      <SEO title="Blogs" />
      <div className="parallax-blogs"></div>
      <main>
        <Header siteTitle="Blogs" />
        <BlogList blogs={pageContext.blogs} />
      </main>
    </Layout>
  )
}
