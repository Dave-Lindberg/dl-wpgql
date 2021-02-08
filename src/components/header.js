import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { GridItem, Grid, Box } from "@chakra-ui/react"

const Header = ({ siteTitle }) => (
  <GridItem 
    as="header" 
    width="100%"
    m="0 auto" 
    p={{
      base: "1.5rem 1.5rem 1rem",
      md: "1.5rem 2rem 1rem"
    }}
    borderBottom="1px"
    borderColor="brand.olive.400"
    fontSize="110%"
    lineHeight="110%"
  >
    <Grid
        m={0}
        maxW="960px"
        templateColumns={{
          base: "2rem auto auto",
          md: "2rem 8rem auto"
        }}
        templateRows="auto "
        gap="1rem"
        alignItems="center"
        
    >
      <Link 
        to="/"
        display="grid"
      >
        <Box 
          color="brand.salmon.400"
          fontSize="100%"
          fontWeight="900"
          border=".2rem solid" 
          borderColor="brand.salmon.400" 
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
          color="brand.olive.700"
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
        color="brand.sand.700"
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
