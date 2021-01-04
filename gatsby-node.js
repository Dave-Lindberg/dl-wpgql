/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return graphql(`
        {
            allWpPost(sort: {fields: [date] }) {
                nodes {
                    title
                    excerpt
                    content
                    slug
                }
            }
            allWpPage {
                nodes {
                    title
                    content
                    slug
                    featuredImage {
                        node {
                            localFile {
                                childImageSharp {
                                    sizes {
                                        src
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `).then((result) => {
        console.log(result)
        result.data.allWpPost.nodes.forEach((node) => {
            createPage({
                path: node.slug,
                component: path.resolve(`./src/templates/blog-post.js`),
                context: {
                    // This is the $slug variable
                    // passed to blog-post.js
                    slug: node.slug,
                },
            })
        })
        result.data.allWpPage.nodes.forEach((node) => {
            createPage({
                path: node.slug,
                component: path.resolve(`./src/templates/page.js`),
                context: {
                    // This is the $slug variable
                    // passed to page.js
                    slug: node.slug,
                },
            })
        })
    })
}