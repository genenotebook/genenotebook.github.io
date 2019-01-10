const path = require('path')
// const { createFilePath } = require('gatsby-source-filesystem')


exports.createPages = function createPages({ actions, graphql}){
  const { createPage } = actions;
  const documentationTemplate = path.resolve('src/templates/documentation-template.js')
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    result.data.allMarkdownRemark.edges.forEach(({ node, ...rest }) => {
      createPage({
        path: node.frontmatter.path,
        component: documentationTemplate,
        context: {}
      })
    })
  })
}

/*
exports.onCreateNode = function onCreateNode ({ actions: { createNodeField }, node, getNode }) {
  switch (node.internal.type) {
    case 'MarkdownRemark':
      const slug = createFilePath({
        node,
        getNode,
        basePath: path.resolve('content')
      })
      createNodeField({
        node,
        name: 'slug',
        value: slug
      })
      break;
    default:
      break;
  }
}

exports.createPages = async function createPages({ actions: { createPage }, graphql }) {
  const data = await graphql(`
    {
      posts:allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
    .then(result => result.data)

  const blogPostTemplate = path.resolve('src/templates/documentation-template.js')

  data.posts.edges.forEach(({ node }) => {
    console.log({node})
    const { slug } = node.fields
    createPage({
      component: blogPostTemplate,
      path: slug,
      context: {
        slug
      }
    })
  })
}
*/