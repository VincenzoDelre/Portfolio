import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from '@emotion/styled';

import { css, keyframes } from '@emotion/react'




const TextoInicio = styled.div`
    padding-top: 4rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    text-align: center;

    @media (min-width:768px) {
        display: grid;
        grid-template-columns: repeat(2,1fr);
        column-gap: 2rem;
        text-align: start;
    }

    p{
        display: flex;
        justify-content: center;
        align-items: center;
        line-height: 2;
    }
`;



const ContenidoInicio = () => {

    const informacion = useStaticQuery(graphql`
    query{
        allDatoCmsPagina(filter: {slug: {eq: "inicio"}}) {
          nodes {
            titulo
            contenido
            imagen {
              gatsbyImageData
                  (layout: CONSTRAINED)
              
            }
          }
        }
      }
        `);

     
    const { contenido, imagen } = informacion.allDatoCmsPagina.nodes[0];
    const image = getImage(imagen);
    //console.log(imagen.fluid)

    const typewriter = keyframes`
        from { width: 0 },
        to { width: 45% }
    `
    
    const blinkCursor = keyframes`
        from, to { border-color: transparent},
        50% { border-color: white; }  
    ` 
    
    

    return ( 
        <div css={css`
            margin:5rem;
            width: 100vw;
            
            `}>
            
            <TextoInicio>
                <div css={css`
                    border-radius: 50%;
                    
                    overflow: hidden;
                `}>
                    <GatsbyImage image={image} alt='alt per favor'/>
                </div>

                <div css={css`
                    display: flex;
                    justify-content:space-around;
                    align-items: center;
                    flex-direction: column;
                    
                    
                `}>
                    
                    <h2 css={css`
                    @media(max-width:767px){
                        color:#fff;
                        font-family:'Montserrat', sans-serif;
                    }
                    @media(min-width:768px){
                        overflow: hidden;
                        white-space: nowrap;
                        font-family:'Montserrat', sans-serif;
                        margin: 0 auto;
                        border-right: .12em solid white;
                        letter-spacing: .0.7em;
                        color:#fff;
                        animation:

                            ${typewriter} 3s steps(40, end),
                            ${blinkCursor} .65s step-end infinite;
                        
                        
                    }
                        `} >Hola, soy Vincenzo :)</h2>

                    <p css={css`
                        text-align:center;
                        color: #fff;

                        `}>{contenido}</p>
                </div>
            </TextoInicio>



        </div>
     );
}
 
export default ContenidoInicio;