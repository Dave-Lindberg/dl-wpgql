import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
    Grid,
    GridItem,
    LinkBox,
    Heading,
    Text,
    Link,
    LinkOverlay,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
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
    console.log(features);
    
    // declare a new state variable, which we'll call "isActive"
    const [isActive, setIsActive] = useState(false);
    
    // add another state variable to track which item is clicked
    const [selectedIndex, setSelectedIndex] = useState('')

    const { isOpen, onOpen, onClose } = useDisclosure()

    function handleToggle(e, id) {
        e.preventDefault();
        setIsActive(!isActive);
        console.log("id: " + id);
        console.log("id: " + typeof id);
        setSelectedIndex(id);
        console.log("isActive: " + isActive);
        console.log("selectedIndex: " + selectedIndex);
        console.log(typeof selectedIndex);
        if(id===selectedIndex){onOpen(id)}; 
    };


    const featureItems = features.map((feature) => 
    <>

        <LinkBox key = { feature.id.toString() }
            className = { feature.id.toString(), "feature" }
            onClick = {(e) =>  handleToggle(e, feature.id)} 
            backgroundColor = "brand.background"
            borderWidth = "1px"
            borderRadius = "md"
            borderColor = "brand.sand.100"
            color = "brand.grey.700"
            m = "1rem" 
            display = "grid"
            gridTemplateRows = "auto auto auto"
            gridTemplateColumns = "1fr"> 
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
        </LinkBox>
        
        <Modal 
            key = { feature.id.concat('-M') }
            isOpen={isOpen} 
            onClose={onClose} 
            className = "modal" 
            backgroundColor = "brand.background"
            borderWidth = "1px"
            borderRadius = "md"
            borderColor = "brand.sand.100"
            color = "brand.grey.700"
            m = "1rem" 
        >
            <ModalOverlay />
            <ModalContent>
                <GatsbyImage 
                    image = { feature.featuredImage.node.localFile.childImageSharp.gatsbyImageData }
                    aspectRatio = { 16 / 9 }
                />  
                <ModalHeader 
                    as = "h2"
                    size = "md"
                    p = ".5rem 1rem" 
                >
                    <LinkOverlay 
                        href = { feature.slug } > 
                    </LinkOverlay> 
                    { feature.title } 
                </ModalHeader > 
                <ModalCloseButton />
                <ModalBody>
                    <Text p = ".5rem 1rem"
                        noOfLines = { 10 } 
                    > 
                        { feature.featureCardFields.shortDescription } 
                    </Text > 
                </ModalBody>
                <ModalFooter>
                    < Link color = "brand.salmon.400"
                        fontWeight = { 700 }
                        pl = ".5rem"
                        whiteSpace = "nowrap" 
                        onClick = { handleToggle }
                    > 
                        { feature.featureCardFields.ctaText }
                    </Link> 
                </ModalFooter>
            </ModalContent>
        </Modal>
    </>
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