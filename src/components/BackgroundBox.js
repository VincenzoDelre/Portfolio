import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'
//import styled from 'styled-components'
import styled from "@emotion/styled"

import BackgroundImage from 'gatsby-background-image'


const BackgroundBox = ({ className, children }) => {
  const data2 = useStaticQuery(
    graphql`
    query MyQuery6 {
        file(relativePath: {eq: "water5.png"}) {
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
  const imageData2 = data2.file.childImageSharp.fluid
  console.log(data2.file.childImageSharp.fluid)

  return (
    
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={imageData2}
      backgroundColor={`#040e18`}
    >
        
        {children}
    </BackgroundImage>
    
    
  )
}

const BackgroundContent = styled(BackgroundBox)`
  width: 100%;
  height: auto;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
  

  
`
  
export default BackgroundContent
