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

import "./layout.css"
import "../styles/app-styles.css"

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
      <Grid as ="app" 
          height="100vh"
          bg="brand.background"
          templateRows={{
            base:"auto auto 1fr auto auto",
            md: "auto 1fr auto"
          }}
          templateAreas={{
            base: "header sidebar main sidebar-right footer",
            md:`"header header header"
			          "sidebar main sidebar-right"
			          "footer footer footer"`
          }}
          templateColumns={{
            base: "1fr",
            md: "20% 1fr 20%"
          }}
        >
          <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

          <GridItem as="sidebar" area="sidebar" color="brand.grey.100">
          </GridItem>

          <GridItem as="main" area="main" 
            overflow="scroll" 
            padding="0" 
          >
            {children}
          </GridItem>

          <GridItem as="sidebarRight" area="sidebar-right" color="brand.grey.100">
          </GridItem>

          <GridItem 
            as="footer" 
            area="footer" 
            colStart="1"
            colEnd={{
              base: "1",
              md: "4"
            }}
            p="1rem"
            borderTop="1px"
            borderColor="brand.grey.100">
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
