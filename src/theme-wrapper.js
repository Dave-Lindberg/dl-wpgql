import { 
  ChakraProvider, 
  extendTheme 
} from '@chakra-ui/react'

import React from 'react'
import Layout from './components/layout'


const colors = {
  brand: {
    olive:{
      100: "#CCCC45",
      400: "#999900",
      700: "#787800",
    },
    blue:{
      100: "#B3C1A6",
      400: "#99AC88",
      700: "#577B75",
    },
    sand:{
      100: "#DCCA9E",
      400: "#CFB578",
      700: "#C2A052",
    },
    salmon:{
      100: "#FF956B",
      400: "#E06634",
      700: "#C34E1E",
    },
    grey:{
      100: "#B9AFAF",
      400: "#958686",
      700: "#6E6060",
    },
    background: "#FFFAF0"
  },
}
const fonts = {
  body: "Libre Franklin",
  heading: "Libre Franklin"
}
const theme = extendTheme({ colors, fonts })

export const wrapPageElement = ({ element }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Layout>{element}</Layout>
    </ChakraProvider>
  )
}
