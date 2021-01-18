import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `lightslategrey`,
      marginBottom: `1rem`,
      gridArea: `header`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            display: `grid`,
            alignItems: `center`,
            gridTemplateColumns: `2.5rem 1fr`,
            gridTemplateAreas: `"a b"
                                "c d"`,
          }}
        >
          <span 
            style={{ 
              color: `rgba(255,255,255,0.5)`,
              fontWeight: 900,
              fontSize: `75%`,
              border: `solid rgba(255,255,255,0.5) .2rem`,
              borderRadius: `100%`,
              padding:`.15rem`,
              marginRight: `.5rem`,
              verticalAlign: `.1rem`,
              gridArea: `a`
            }}>
            <span style={{ verticalAlign: `.1em`}}>:</span>  
            D
          </span>
          <span 
            style= {{
              gridArea: `b`
            }}>
            {siteTitle} 
          </span>
          <div 
            style={{ 
              fontWeight: 100,
              fontSize:`90%`,
              gridArea: `d`,
            }}> 
            frontend&nbsp;developer
          </div>
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
