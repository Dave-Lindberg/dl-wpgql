import React, { useState } from "react"
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
    const data = useStaticQuery(graphql `
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
    
    // declare a new state variable, which we'll call "isActive"
    const [isActive, setIsActive] = useState(false);
    
    // add another state variable to track which item is clicked
    const [selectedIndex, setSelectedIndex] = useState('')

    const handleToggle = (e, id) => {
        e.preventDefault();
        setIsActive(!isActive);
        setSelectedIndex(id);
        console.log(isActive);
        console.log(selectedIndex);
    };


    const featureItems = features.map((feature) => 
    < LinkBox key = { feature.id }
        className = {
            selectedIndex === feature.id && 
            isActive ? "active" : "inactive" } 
        onClick = {(e) =>  handleToggle(e, feature.id) } 
        backgroundColor = "brand.background"
        borderWidth = "1px"
        borderRadius = "md"
        borderColor = "brand.sand.100"
        color = "brand.grey.700"
        m = "1rem" 
        display = "grid"
        templateRows = "auto auto auto"
        templateColumns = "1fr"> 
        <GatsbyImage 
            image = { feature.featuredImage.node.localFile.childImageSharp.gatsbyImageData }
            aspectRatio = { 16 / 9 }
        />  
        <Heading 
            as = "h2"
            size = "md"
            p = ".5rem 1rem" 
        >
            <LinkOverlay 
                href = { feature.slug } > 
            </LinkOverlay> 
            { feature.title } 
        </Heading > 
        <Text p = ".5rem 1rem"
            noOfLines = { 10 } 
        > 
            { feature.featureCardFields.shortDescription } 
            < Link color = "brand.salmon.400"
                fontWeight = { 700 }
                pl = ".5rem"
                whiteSpace = "nowrap" 
                onClick = { handleToggle }
            > 
                { feature.featureCardFields.ctaText }
            </Link> 
        </Text > 
    </LinkBox>
    );

    return ( 
        <Grid 
            templateColumns = {{
                base: "1fr",
                md: "1fr 1fr"
            }}
            templateRows = "auto"
            mb = "2rem" > 
            <GridItem
                colStart="1"
                colEnd={{
                    base: "2", 
                    md: "3"
                }}
                justifySelf = "center"
            >
                <Heading 
                    as="h3"
                    display="GridItem"
                    size = "sm"
                    color = "brand.blue.700"
                    >
                        Featured Stories
                </Heading>
            </GridItem>
            { featureItems } 
        </ Grid >
    )
}


export default FeaturedStories