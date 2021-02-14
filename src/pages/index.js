import React from "react"
import SEO from "../components/seo"
import { Box, Heading } from "@chakra-ui/react";
import AnimatedHeadline from "../components/animated-headline"
import FeaturedStories from "../components/featured-stories"

export default function Home({ data }) {
  return (
    <div>
      <SEO title = "home" />
      <AnimatedHeadline />
      <Box p={8}>
        <Heading as="h3" size="sm">Featured Stories</Heading>
      </Box>
      <FeaturedStories />
    </div>
  )
}

