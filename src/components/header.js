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
        padding: `1.5rem 1rem`,
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
            gridTemplateColumns: `2.5rem 1fr 1fr`,
            gridGap: `.5rem`,
            gridTemplateAreas: `"a b c"
                                "d b c"`,
          }}
        >
          <span 
            style={{ 
              color: `rgba(255,255,255,0.6)`,
              fontWeight: 900,
              fontSize: `75%`,
              border: `solid rgba(255,255,255,0.6) .2rem`,
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
              gridArea: `c`,
              color: `rgba(255,255,255,0.6)`,
            }}> 
            frontend developer
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
