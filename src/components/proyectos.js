import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { css } from '@emotion/react';
import Layout from './layout'; 

export const query = graphql`

query ($slug: String!) {
    allDatoCmsProyecto(filter: {slug: {eq: $slug}}) {
      nodes {
        titulo
        contenido
        imagen {
          gatsbyImageData(height: 450)  
        }
      }
    }
  }
  
`;

const ProyectoTemplate = ({data: { allDatoCmsProyecto: {nodes}}}) => {
    
    const { titulo, contenido, imagen } = nodes[0];
    const image = getImage(imagen);
    return ( 

      <Layout>
        <main  
          css={css`
              margin: 0 auto;
              max-width: 1200px;
              width: 95%;
          `}>
            <h1               
              css={css`
                text-align:center;
                margin-top: 4rem;
            `}>{titulo}</h1>
            <div css={css`
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                gap: 6rem;
                @media(min-width:768px){
                  flex-direction: row;
                }
                
              `}>
                <GatsbyImage 
                  image={image} 
                  alt='proyecto' 
                  objectFit='cover'
                />
                <p css={css`
                  text-align:center;
                  font-size: 1.4rem;
                  @media(min-width:768px){
                    width: 50%;
                    font-size: 2rem;                
                }
                `}
                >{contenido}</p>
            </div>
        </main>
      </Layout>

     );
}
 
export default ProyectoTemplate;