import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { css } from '@emotion/react'


export function LogoUW() {
  return (
  <div css={css`
  
  display:flex;
  align-items:center;
  justify-content: center;
  
  flex-direction: column;
  font-size: 1.5rem;
  text-align: center;
  @media (min-width:768px) {
    font-size: 2rem;
    
  }
  `}>

        <StaticImage
          css={css`
          /* height: 10%;
          width: 10%; */
          align-items: flex-start;
          `} 
           src="../images/logo.png" 
           alt="logo"
       />
    
    {/* <p>Ofrecerte el producto que más se adapta a tus necesitades</p>
    <p>Servicio personalizado, a tu ritmo</p> */}
  
  </div>
  )
}