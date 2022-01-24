import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const Boton = styled(Link)`
    margin-top: 2rem;
    padding: 1rem;
    background-color: white;
    width: 100%;
    color: #000;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
    font-size: 1.5rem;
    border-radius: 10px;

`;

const DivProyecto = styled.div`
     
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
`;

const ProyectoPreview = ({proyecto}) => {

    const { imagen, titulo, slug } = proyecto;
    //console.log(slug)
    const image = getImage(imagen);

    return ( 
        <div
            css={css`
                /* border:1px solid #e1e1e1; */
                margin-bottom: 2rem;
                border-radius: 1rem;
                @media(min-width:768px){
                    
                    
                }
                
                
            `}
        >
            <div
                css={css`
                border:2px solid #e1e1e1;
                margin-bottom: 2rem;
                border-radius: 2rem;
                @media(min-width:768px){
                    
                }   
            `}>

            <DivProyecto>
                <GatsbyImage 
                    image={image}              
                    alt='alt per favor' 
                    css={css`
                    object-fit: cover;
                    padding:1rem;
                    `}
                /> 
            </DivProyecto>
            </div>
            
            <div
                css={css`
                    padding-bottom: 3rem;
                `}
            >
                <h3
                    css={css`
                        font-size: 2rem;
                        text-align: center;
                    `}
                >
                    {titulo}</h3>
                {/* <p>{contenido}</p> */}

                <Boton to={slug}>Más info...</Boton>
            </div>


        </div>

     );
}
 
export default ProyectoPreview;