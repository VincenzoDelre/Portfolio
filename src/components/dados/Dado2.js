import { css } from "@emotion/react"
import { StaticImage } from "gatsby-plugin-image"
import React from 'react'


export function Dado2() {
  return (
    <div 
      css={css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      
    `}>

      
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
        
        {/* <p>El logo es tu firma</p>
        <p>Transforma tu mensaje en una imagen</p> */}
      </div>
      <StaticImage
          css={css`
          /* height: 10%;
          width: 10%; */
          align-items: flex-start;
          `} 
           src="../../images/dado2new.png" 
           alt="dado2"
       />
  
  
    </div>
  )
}