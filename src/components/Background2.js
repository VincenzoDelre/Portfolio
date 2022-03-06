import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'
//import styled from 'styled-components'
import styled from "@emotion/styled"

import BackgroundImage from 'gatsby-background-image'


const BackgroundSection2 = ({ className, children }) => {
  const data = useStaticQuery(
    graphql`
    query query5 {
        file(relativePath: {eq: "water.jpg"}) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              srcSetWebp
            }
          }
        }
      }
    `
  )

  // Set ImageData.
  const imageData = data.file.childImageSharp.fluid
  console.log(data.file.childImageSharp.fluid)

  return (
    
    <BackgroundImage
      Tag="section2"
      className={className}
      fluid={imageData}
      backgroundColor={`#040e18`}
    >
        
        {children}
    </BackgroundImage>
    
    
  )
}

const BackgroundBody = styled(BackgroundSection2)`
  width: 100%;
  height: 100vh;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;

`
  
export default BackgroundBody  
