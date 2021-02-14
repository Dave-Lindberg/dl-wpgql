import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Box, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react"
import "../styles/app-styles.css"


const FeaturedStories = () => {
  const data = useStaticQuery(graphql`
    query FeaturedStoriesQuery {
        allWpPost(filter: {categories: {nodes: {elemMatch: {name: {eq: "Feature"}}}}}) {
            nodes {
            title
            featureCardFields {
                ctaText
                fieldGroupName
                shortDescription
            }
            featuredImage {
                node {
                    altText
                    localFile {
                        childImageSharp {
                            fluid {
                                srcSet
                            }
                            sizes {
                                srcSet
                                src
                            }
                        }
                    }
                }
            }
            id
            slug
            }
        }
    }
  `)
    const features = Object.values(data.allWpPost.nodes);
    const featureString= JSON.stringify(features);
    console.log(featureString);
    const featureItems = features.map((feature) => 
    <GridItem 
        key={feature.id} 
        backgroundColor="brand.background"
        borderWidth="1px"
        borderRadius="md"
        borderColor="brand.sand.100"
        m="1rem"
    >
        <Image src={feature.featuredImage.node.localFile.childImageSharp.sizes.src} />
        <Heading as="h2" size="md" p=".5rem 1rem" >{feature.title}</Heading>
        <Text  p=".5rem 1rem" noOfLines={2}>{feature.featureCardFields.shortDescription}</Text>
    </GridItem>
    );

  return (
    <Grid 
        templateColumns="1fr 1fr"
        templateRows="auto"
        mb="2rem"
    >
            {featureItems}
    </Grid>
  )
}

FeaturedStories.propTypes = {
  children: PropTypes.node.isRequired,
}

export default FeaturedStories
