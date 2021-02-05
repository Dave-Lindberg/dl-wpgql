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
            color="brand.grey.700"
            fontSize="125%"
            fontWeight={700}
            display="flex"
            alignItems="center"
            textAlign="center"
            p="20% 20% 25%"
        >
            <MotionGrid 
                className="animated-headline"
                gridTemplateColumns="1fr"
                gridTemplateRows="auto auto auto"
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
                    exit="hidden"
                    transition={{ duration: 6 }}
                    color="brand.blue.700"
                >
                    Communicating your message
                </MotionGridItem>
                <MotionGridItem 
                    gridRow="1 / 2"
                    gridColumn="1 / 2"
                    variants={item}
                    animate={{
                        opacity: [0, 1, 0],
                    }}
                    exit="hidden"
                    transition={{ duration: 6, delay: 4 }}
                    color="brand.olive.700"
                >
                    Engaging your stakeholders
                </MotionGridItem>
                <MotionGridItem 
                    gridRow="1 / 2"
                    gridColumn="1 / 2"
                    variants={item}
                    animate={{
                        opacity: [0, 1, 0],
                    }}
                    exit="hidden"
                    transition={{ duration: 6, delay: 8 }}
                    color="brand.sand.700"
                >
                    Building your business
                </MotionGridItem>
                <MotionGridItem 
                    gridRow="1 / 2"
                    gridColumn="1 / 2"
                    variants={item}
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
                    variants={item}
                    animate={{
                        opacity: [0, 1, 1],
                        color: ["#577B75", "#577B75","#787800", "#C2A052", "#C34E1E"]
                    }}
                    transition={{ duration: 18, delay: 0, ease: "easeOut" }}
                    exit="visible"

                >
                    takes more than a website.
                </MotionGridItem>                
                <MotionGridItem 
                    gridRow="3 / 4"
                    variants={item}
                    animate={{
                        opacity: [0, 1],
                    }}
                    transition={{ delay: 18, ease: "easeOut" }}
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
