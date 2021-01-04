import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function Page({ data}) {
    console.log("data = " + data)
    const page = data.allWpPage.nodes[0]
    console.log(page)
    return (
        <Layout>
            <img 
                src={page.featuredImage.node.localFile.childImageSharp.sizes.src} 
                alt={page.featuredImage.node.altText}
            />
            <h1>{page.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: page.content}} />
        </Layout>
    )  
}
export const query = graphql`
    query($slug: String!) {
        allWpPage(filter: { slug: { eq: $slug } }) {
            nodes {
                title
                content
                featuredImage {
                    node {
                        altText
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