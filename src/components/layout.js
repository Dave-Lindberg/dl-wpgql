/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Grid, GridItem } from "@chakra-ui/react"

import Header from "./header"
import SiteMenu from "./Menu"
import AnimatedHeadline from "./animated-headline"
import "../styles/app-styles.css"
import FeaturedStories from "./featured-stories"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Grid 
        className ="AppGrid" 
        height="100vh"
        bg="brand.background"
        templateRows={{
          base:"repeat(5, auto) ",
          md: "auto"
        }}
        templateColumns={{
          base: "1fr",
          md: "20% 60% 20%"
        }}
        maxWidth = {{
          base: "100%", 
          md: "1200px"
        }}
        m = "0 auto"
      >
        <Header 
          siteTitle={data.site.siteMetadata?.title || `Title`} 
          flexWrap="wrap"
        />
        <AnimatedHeadline 
          area="hero"
        />
        <GridItem 
          area="sidebar" 
          color="brand.grey.100"
          p="6" 
        >
          <h3>sidebar runs here</h3>
        </GridItem>

        <FeaturedStories 
          area="main" 
          className="main"
          p="0" 
        >
          {children}
        </FeaturedStories>

        <GridItem 
          area="sidebar-right" 
          color="brand.grey.100"
          p="6" 
        >
          <h3>right sidebar runs here</h3>

        </GridItem>

        <GridItem 
          className="footer" 
          p="1rem"
          borderTop="1px"
          borderColor="brand.grey.100"
          colStart="1"
          colEnd={{
            base: "2", 
            md: "4"
          }}
      
        >
          <SiteMenu />
        </GridItem>
      </Grid>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
