import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"

import React from 'react'
import Layout from './components/layout'


const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
}
const theme = extendTheme({ colors })

export const wrapPageElement = ({ element }) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout>{element}</Layout>
    </ChakraProvider>
  )
}
