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
  height: 120vh;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
  
  
  clip-path: polygon(
    0 0, /* left top */
    100% 0, /* right top */ 
    100% 96.5%, /* right bottom */
    0 100% /* left bottom */
    
  );
  @media(min-width:768px){
    clip-path: polygon(
    0 0, /* left top */
    100% 0, /* right top */ 
    100% 86%, /* right bottom */
    0 100% /* left bottom */
    
  );
  }

  
`
  
export default BackgroundHero
