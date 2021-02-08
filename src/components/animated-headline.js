import React from "react"
import { Box, Grid, GridItem } from "@chakra-ui/react"
import  "../styles/app-styles.css"
import { motion } from "framer-motion"
import { MdArrowDownward } from 'react-icons/md';

const MotionGrid=motion.custom(Grid)
const MotionGridItem=motion.custom(GridItem)


const container = {
  visible: { 
    opacity: 1,
    transition: {
       when: "beforeChildren",
       staggerChildren: 4, 
    } 
  },
  hidden: { 
    opacity: 0, 
    transition: {
      when: "afterChildren",
    }
  },
}
const item = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

const AnimatedHeadline = () => {
    return (
        <Box 
            className="animated-headline" 
            width="100vw"
            height="80vh"
            fontSize="125%"
            fontWeight={700}
            display="flex"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            p="20% 20% 25%"
        >
            <MotionGrid 
                className="animated-headline"
                gridTemplateColumns="1fr"
                gridTemplateRows="auto auto 5rem"
                initial="hidden"
                animate="visible"
                exit="visible"
                variants={container}
            >
                <MotionGridItem 
                    gridRow="1 / 2"
                    gridColumn="1 / 2"
                    variants={item}
                    initial="hidden"
                    animate={{
                        opacity: [0, 1, 1, 0],
                    }}
                    transition={{ duration: 6 }}
                    color="brand.blue.700"
                    exit="hidden"
                >
                    Communicating your message
                </MotionGridItem>
                <MotionGridItem 
                    gridRow="2 / 3"
                    gridColumn="1 / 2"
                    variants={item}
                    initial="hidden"
                    animate={{
                        opacity: [0, 1, 1, 0],
                    }}
                    transition={{ duration: 6, delay: 1 }}
                    color="brand.blue.700"
                    exit="hidden"
                >
                    takes more than a website.
                </MotionGridItem>                
                
                <MotionGridItem 
                    gridRow="1 / 2"
                    gridColumn="1 / 2"
                    variants={item}
                    animate={{
                        opacity: [0, 1, 1, 0],
                    }}
                    exit="hidden"
                    transition={{ duration: 6, delay: 4 }}
                    color="brand.olive.700"
                >
                    Engaging your stakeholders
                </MotionGridItem>
                <MotionGridItem 
                    gridRow="2 / 3"
                    gridColumn="1 / 2"
                    variants={item}
                    initial="hidden"
                    animate={{
                        opacity: [0, 1, 1, 0],
                    }}
                    transition={{ duration: 6, delay: 5 }}
                    color="brand.olive.700"
                    exit="hidden"
                >
                    takes more than a website.
                </MotionGridItem>                

                <MotionGridItem 
                    gridRow="1 / 2"
                    gridColumn="1 / 2"
                    variants={item}
                    animate={{
                        opacity: [0, 1, 1, 0],
                    }}
                    exit="hidden"
                    transition={{ duration: 6, delay: 8 }}
                    color="brand.sand.700"
                >
                    Building your business
                </MotionGridItem>
                <MotionGridItem 
                    gridRow="2 / 3"
                    gridColumn="1 / 2"
                    variants={item}
                    initial="hidden"
                    animate={{
                        opacity: [0, 1, 1, 0],
                    }}
                    transition={{ duration: 6, delay: 9 }}
                    color="brand.sand.700"
                    exit="hidden"
                >
                    takes more than a website.
                </MotionGridItem>                

                <MotionGridItem 
                    gridRow="1 / 2"
                    gridColumn="1 / 2"
                    variants={item}
                    initial="hidden"
                    animate={{
                        opacity: [0, 1],
                    }}
                    transition={{ duration: 3, delay: 12 }}
                    color="brand.salmon.700"
                >
                    Captivating your users
                </MotionGridItem>  
                <MotionGridItem 
                    gridRow="2 / 3"
                    gridColumn="1 / 2"
                    variants={item}
                    initial="hidden"
                    animate={{
                        opacity: [0, 1 ],
                    }}
                    transition={{ duration: 3, delay: 13 }}
                    color="brand.salmon.700"
                >
                    takes more than a website.
                </MotionGridItem>                

                <MotionGridItem 
                    gridRow="3 / 4"
                    variants={item}
                    animate={{
                        opacity: [0.1, 1],
                    }}
                    transition={{ duration: 3, delay: 16 }}
                    exit="visible"
                    justifySelf="center"
                >
                    <a href="#">
                        <MdArrowDownward 
                            style= {{
                                border:"2px solid ",
                                borderColor: "#787800", // brand.olive.700
                                borderRadius:"100%",
                                marginTop: "1.5rem", 
                                padding: ".5rem",
                                height: "3rem",
                                width: "3rem",
                                fill: "#787800" // brand.olive.700
                            }}
                        />
                    </a>
                </MotionGridItem>                
            </MotionGrid>
        </Box>
    )
}

export default AnimatedHeadline
