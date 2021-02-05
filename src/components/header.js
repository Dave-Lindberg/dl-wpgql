import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { GridItem, Grid, Box } from "@chakra-ui/react"

const Header = ({ siteTitle }) => (
  <GridItem 
    as="header" 
    bg="brand.olive.700" 
    mb="0rem" 
    p="1.5rem 2rem 1rem"
    area="header"
    borderBottom="1px"
    borderColor="brand.olive.400"
    fontSize="110%"
    lineHeight="110%"
    colStart="1"
    colEnd={{
      base: "1",
      md: "4"
    }}
  >
    <Grid
        m="0 auto"
        maxW="960px"
        templateColumns="2.66rem auto auto"
        templateRows="auto "
        gap=".25rem"
        alignItems="center"
        
    >
      <Link 
        to="/"
        display="grid"
      >
        <Box 
          color="rgba(255,255,255,0.6)"
          fontSize="100%"
          fontWeight="900"
          border=".2rem solid" 
          borderColor="rgba(255,255,255,0.6)" 
          borderRadius="100%"
          p=".15rem"
          mr=".5rem"
          colStart={1}
          colSpan={1}
          height="2rem"
          width="2rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <span style={{ alignSelf: `start`}}>:</span>  
          D
        </Box>
      </Link>
      <Link to="/" >
        <GridItem 
          colStart={2}
          colSpan={1}
          color="#ffffff"
          fontWeight={700}
        >
          {siteTitle} 
        </GridItem>
      </Link>

      <GridItem 
        fontWeight={100}
        colStart={3}
        colSpan={1}
        rowStart={1}
        rowSpan={1}
        color="rgba(255,255,255,0.6)"
      >
        frontend developer
      </GridItem>
    </Grid>
  </GridItem>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
