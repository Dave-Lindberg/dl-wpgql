import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function BlogPost({ data}) {
    console.log("data = " + data)
    const post = data.allWpPost.nodes[0]
    console.log(post)
    return (
        <Layout>
            <div>
                <img 
                    src={post.featuredImage.node.localFile.childImageSharp.sizes.src} 
                    alt={post.featuredImage.altText}
                />
                <h1>{post.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.content}} />
                            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>

            </div>
        </Layout>
    )
}
export const query = graphql`
    query($slug: String!) {
        allWpPost(filter: { slug: { eq: $slug } }) {
            nodes {
                title
                content
                featuredImage {
                    node {
                        altText
                        sourceUrl
                        localFile {
                            childImageSharp {
                                id
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
`