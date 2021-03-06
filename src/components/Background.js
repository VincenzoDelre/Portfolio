import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'
//import styled from 'styled-components'
import styled from "@emotion/styled"

import BackgroundImage from 'gatsby-background-image'


const BackgroundSection = ({ className, children }) => {
  const data = useStaticQuery(
    graphql`
    query MyQuery {
        file(relativePath: {eq: "water1.png"}) {
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
        Tag="section"
        className={className}
        fluid={imageData}
        backgroundColor={`#040e18`}
      >

          {children}
      </BackgroundImage>
    
    
  )
}

const BackgroundHero = styled(BackgroundSection)`
  width: 100%;
  
  background-position: center center fixed;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  height: auto;
  
  
`
  
export default BackgroundHero
