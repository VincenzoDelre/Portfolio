import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'
//import styled from 'styled-components'
import styled from "@emotion/styled"

import BackgroundImage from 'gatsby-background-image'


const BackgroundBody = ({ className, children }) => {
  const data1 = useStaticQuery(
    graphql`
    query MyQuery5 {
        file(relativePath: {eq: "water6.png"}) {
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
  const imageData1 = data1.file.childImageSharp.fluid
  console.log(data1.file.childImageSharp.fluid)

  return (
    
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={imageData1}
      backgroundColor={`#040e18`}
    >
        
        {children}
    </BackgroundImage>
    
    
  )
}

const BackgroundTitle = styled(BackgroundBody)`
  width: 100%;
  height: auto;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
  clip-path: polygon(
  0 0, /* left top */
  100% 0, /* right top */ 
  100% 100%, /* right bottom */
  0 100% /* left bottom */);


  @media(min-width:768px){
  clip-path: polygon(
  0 0, /* left top */
  100% 0, /* right top */ 
  100% 100%, /* right bottom */
  0 100% /* left bottom */);
  }
  
  
  

  
`
  
export default BackgroundTitle
