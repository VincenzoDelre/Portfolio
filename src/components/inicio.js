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

    
    
    

    return ( 
        <div css={css`
            margin:5rem;
            width: 100vw;
            text-align: center;

            @media(min-width:768px){
            margin-bottom: 10rem;
            }
            `}>
            
            <TextoInicio>
            <div css={css`
                    
                    
                    overflow: hidden;
                `}>
                    <GatsbyImage 
                        image={image} 
                        alt='alt per favor'
                        css={css`
                            filter:opacity(0.2);
                            border-radius: 50%;
                        `}/>
                </div>

                
                    
                    

                <p css={css`
                    text-align:center;
                    color: #fff;
                    `}>{contenido}
                </p>
            
            </TextoInicio>



        </div>
     );
}
 
export default ContenidoInicio;