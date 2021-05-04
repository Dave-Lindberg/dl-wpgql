import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
    Grid, 
    GridItem,
    LinkBox,
    Heading,
    LinkOverlay,
    useDisclosure
} from "@chakra-ui/react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "../styles/app-styles.css"


export default function FeaturedStories()  {
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
    const [ activeId, setActiveId] = useState();
    // const { isOpen, onOpen, onClose } = useDisclosure()

    function handleClick(featureId) {
        setActiveId(featureId);
        console.log( activeId );
        // filter data to pull active record:
        var activeFeature = (features.filter(function(item){
            return item.id == activeId;
        }));
        console.log(activeFeature);
    }

    const featureItems = features.map((feature) => (
        <div>
            <LinkBox 
                key = { feature.id }
                className = { feature.id.toString(), "feature" }
                onClick = {() => { handleClick(feature.id) }}
                backgroundColor = "brand.background"
                borderWidth = "1px"
                borderRadius = "md"
                borderColor = "brand.sand.100"
                color = "brand.grey.700"
                m = "1rem" 
                display = "grid"
                gridTemplateRows = "auto auto auto"
                gridTemplateColumns = "1fr"
            > 
                <GatsbyImage
                    image={getImage(feature.featuredImage?.node?.localFile)}
                    aspectRatio={16 / 9}
                    alt="This is alt text"
                />
                <LinkOverlay href = { feature.slug } > 
                    <Heading 
                        as = "h2"
                        size = "md"
                        p = ".5rem 1rem" 
                    >
                        { feature.title } 
                    </Heading > 
                </LinkOverlay> 
            </LinkBox>
        </div>
    ))
    return ( 
        <div>
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
            </Grid>
        </div>
    );
}