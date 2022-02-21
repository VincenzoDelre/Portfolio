import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'; 
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from '@emotion/styled';
import { css } from '@emotion/react';


const Contenido = styled.main `
    padding-top: 4rem;
    max-width: 1200px;
    width: 95%;
    height: 60vh;
    margin: 0 auto;
    

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2,1fr);
        column-gap: 3rem;
    }
    p {
        line-height: 2;
        display: flex;
        justify-content: center;
        

    }
`;

const DiagonalBox = styled.div`

  position: relative;
  transform: skewY(-6deg);
  
  @media(min-width:768px){
    padding: 2rem;
  }
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#ffffff+0,828282+100 */
  background: rgb(255,255,255); /* Old browsers */
  background: -moz-linear-gradient(-45deg,  rgba(255,255,255,1) 0%, rgba(130,130,130,1) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(-45deg,  rgba(255,255,255,1) 0%,rgba(130,130,130,1) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(135deg,  rgba(255,255,255,1) 0%,rgba(130,130,130,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#828282',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */

  
  

  &:before{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }

  

`;

const Content = styled.div`

  position: relative;
  transform: skewY(6deg);
  max-width: 1200px;
  margin: 4rem auto;
  padding: 4rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


const ContenidoAbout = () => {

    const resultado = useStaticQuery( graphql`
    query{
        allDatoCmsPagina(filter: {slug: {eq: "about"}}) {
          nodes {
            titulo
            contenido
            imagen {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
      }
      
    
    `)
    
      const {titulo, contenido, imagen} = resultado.allDatoCmsPagina.nodes[0];
      const image = getImage(imagen);

    return ( 
        <>
        <h2
            css={css`
            font-size: 3.5rem;
            margin: 5rem auto;
            text-align: center;
            @media (min-width: 768px) {
              font-size: 5rem;
            }
          `}
        >ABOUT <span css={css`color:red`}>ME</span></h2>
        <DiagonalBox>
          <Content>
            <Contenido>
              
              <GatsbyImage 
                image={image} 
                alt='alt per favor' 
                objectFit='cover'
                css={css`
                  border-radius:100%;`}/>

              <p
                css={css`
                text-align: center;
                justify-content: center;
                flex-direction: row;
                
                align-items: center;
                
                `}
              
              >{contenido}</p>
            </Contenido>

          </Content>
        </DiagonalBox>
        

        </>
     );
}
 
export default ContenidoAbout;