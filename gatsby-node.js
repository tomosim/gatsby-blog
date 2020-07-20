/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  const blogsByTag = path.resolve(`src/templates/blogs-by-tag.js`)
  return graphql(
    `
      query loadPagesQuery($limit: Int!) {
        allMarkdownRemark(
          limit: $limit
          sort: { fields: frontmatter___date, order: DESC }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                author
                date(formatString: "DD MMMM YYYY")
                title
                tags
              }
              fields {
                slug
              }
              excerpt(pruneLength: 300)
            }
          }
        }
      }
    `,
    { limit: 1000 }
  ).then(result => {
    const posts = result.data.allMarkdownRemark.edges
    const postsByTag = {}
    posts.forEach(post => {
      post.node.frontmatter.tags.forEach(tag => {
        if (tag in postsByTag === false) {
          postsByTag[tag] = [post]
        } else {
          postsByTag[tag].push(post)
        }
      })

      createPage({
        path: `/blog/${post.node.fields.slug}`,
        component: blogPostTemplate,
        context: {
          slug: post.node.fields.slug,
          tags: post.node.frontmatter.tags,
        },
      })
    })
    for (let tag in postsByTag) {
      createPage({
        path: `/tags/${tag}`,
        component: blogsByTag,
        context: {
          blogs: postsByTag[tag],
        },
      })
    }
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode }).slice(1, -1)
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
