import { StaticImage } from "gatsby-plugin-image"
import React from 'react';
import { css } from "@emotion/react";

export function Dado3() {
  return (
    
    <div css={css`
    height: 100%;
    width: 100%;
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
           align-items: flex-start;
           `}
          src="../../images/dado3new.png"
          alt="seo.png" /> 
        {/* <p>Personaliza tu web, es tu carta de presentación</p>
        <p>Sin limitaciones ni estilos predefinidos</p> */}
        {/* <StaticImage 
        css={css`
          width:50%;
          height:50%;`}
        src="../../images/dado3.png" 
        alt="dado3" /> */}
      </div>
    
  )
}