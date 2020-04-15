/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

exports.createPages = async ({actions, graphql, reporter}) => {
  const {createPage} = actions

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)
  const categoryTemplate = path.resolve(`src/templates/category.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: {order: DESC, fields: [frontmatter___date]}
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              categories
              title
              date
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  let postsData = result.data.allMarkdownRemark.edges
  let categories = {}
  postsData.forEach(function(post) {
    let frontmatter = post.node.frontmatter
    frontmatter.categories.forEach(category => {
      if (!categories[category]) {
        categories[category] = []
      }
      categories[category].push(frontmatter)
    })
  })

  Object.keys(categories).forEach(name => {
    createPage({
      path: `/${name.toLowerCase()}`,
      component: categoryTemplate,
      context: {
        posts: categories[name],
        categoryName: name,
      },
    })
  })
  // console.log(JSON.stringify(result.data.allMarkdownRemark.edges))

  result.data.allMarkdownRemark.edges.forEach(({node}) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {}, // additional data can be passed via context
    })
  })
}
