/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

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
      <app 
        style={{
          height: `100vh`,
          display: `grid`,
          gridTemplateColumns: `1fr`,
          gridTemplateRows: `auto 1fr auto`,
          gridTemplateAreas: `'header''main''footer'`
        }}>
          <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

          <main
            style={{
              gridArea: `main`,
              overflow: `auto`,
              padding: `1em`
            }}
          >
            {children}
          </main>
          <footer 
            style={{
              gridArea: `footer`,
              padding: `1em`,
              borderTop: `1px solid grey`
            }}
          >
            <SiteMenu />
          </footer>
      </app>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
