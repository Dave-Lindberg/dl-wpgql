import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import { Box } from "@chakra-ui/react";


export default function Home({ data }) {
  return (
    <div>
      <SEO title = "home" />
      <Box p={8}>
        <h1>My WordPress Blog</h1>
      </Box>
      <h4>Posts</h4>
      {data.allWpPost.nodes.map((node) => (
        <div key={node.slug}>
          <Box p={8} bg='antiqueWhite' mb={8}>
            <Link to={node.slug}>
              <h2>{node.title}</h2>
            </Link>
          <div dangerouslySetInnerHTML={{__html: node.excerpt}} />
          </Box>
        </div>
      ))}
    </div>
  )
}

export const pageQuery = graphql`
query {
  allWpPost(sort: { fields: [date] }) {
    nodes {
      title
      excerpt
      slug
    }
  }
}
`