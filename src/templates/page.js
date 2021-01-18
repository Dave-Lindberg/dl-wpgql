import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"

export default function Page({ data}) {
    console.log("data = " + data)
    const page = data.allWpPage.nodes[0]
    console.log(page)
    if (page.title === "Stories") {
        return (
            <Layout>
                <h1>This is the blog page</h1>
      <h4>Posts</h4>
      {data.allWpPost.nodes.map((node) => (
        <div key={node.slug}>
          <Link to={node.slug}>
              <img 
                src={node.featuredImage.node.localFile.childImageSharp.sizes.src} 
                alt={node.featuredImage.node.altText}
            />
            <h2>{node.title}</h2>
          </Link>
          <div dangerouslySetInnerHTML={{__html: node.excerpt}} />
        </div>
      ))}

            </Layout>
        )
    }

    return (
        <Layout>
            <img 
                src={page.featuredImage.node.localFile.childImageSharp.sizes.src} 
                alt={page.featuredImage.node.altText}
            />
            <h1>{page.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: page.content}} />
                        © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>

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
          allWpPost(sort: { fields: [date] }) {
    nodes {
      title
      excerpt
      slug
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