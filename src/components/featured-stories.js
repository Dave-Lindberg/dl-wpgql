import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { 
    Grid, 
    GridItem, 
    LinkBox,
    Heading, 
    Text, 
    Link,
    LinkOverlay
    } from "@chakra-ui/react"
import { GatsbyImage } from "gatsby-plugin-image"
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
                                gatsbyImageData(
                                    width: 1200, 
                                    placeholder: BLURRED, 
                                    aspectRatio: 1.7777
                                )
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
    console.log(features);

    const featureItems = features.map((feature) => 
    <LinkBox 
        key={feature.id} 
        backgroundColor="brand.background"
        borderWidth="1px"
        borderRadius="md"
        borderColor="brand.sand.100"
        color="brand.grey.700"
        className="feature-card inactive"
        m="1rem"
    >
        <GatsbyImage 
            image={feature.featuredImage.node.localFile.childImageSharp.gatsbyImageData} 
            aspectRatio = {16/9}
        />
        <Heading as="h2" size="md" p=".5rem 1rem" >
            <LinkOverlay href={feature.slug}></LinkOverlay>
            {feature.title}
        </Heading>
        <Text  p=".5rem 1rem" noOfLines={10}>
            {feature.featureCardFields.shortDescription}
            <Link 
                color="brand.salmon.400" 
                fontWeight={700}
                pl=".5rem"
                whiteSpace="nowrap"
                >
                {feature.featureCardFields.ctaText}
            </Link>
        </Text>
    </LinkBox>
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
