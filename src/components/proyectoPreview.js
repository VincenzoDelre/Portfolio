import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const Boton = styled(Link)`
    margin-top: 2rem;
    padding: 1rem;
    background-color: transparent;
    width: 100%;
    color: #fff;
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
                width: 100%;
                @media(min-width:768px){
                    
                    
                }
                
                
            `}
        >
            <div
                css={css`
                
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
                    width: 220%;
                    height: 220%;
                    
                    filter: grayscale(80%);
                    &:hover{
                        filter:grayscale(0%);
                    
                        -webkit-animation: kenburns-top 5s ease-out both;
	                    animation: kenburns-top 5s ease-out both;

                        @-webkit-keyframes kenburns-top {
                          0% {
                            -webkit-transform: scale(1) translateY(0);
                                    transform: scale(1) translateY(0);
                            -webkit-transform-origin: 50% 16%;
                                    transform-origin: 50% 16%;
                          }
                          100% {
                            -webkit-transform: scale(1.25) translateY(-15px);
                                    transform: scale(1.25) translateY(-15px);
                            -webkit-transform-origin: top;
                                    transform-origin: top;
                          }
                        }
                        @keyframes kenburns-top {
                          0% {
                            -webkit-transform: scale(1) translateY(0);
                                    transform: scale(1) translateY(0);
                            -webkit-transform-origin: 50% 16%;
                                    transform-origin: 50% 16%;
                          }
                          100% {
                            -webkit-transform: scale(1.25) translateY(-15px);
                                    transform: scale(1.25) translateY(-15px);
                            -webkit-transform-origin: top;
                                    transform-origin: top;
                          }
                        }

                     }
                                        
                `}

                /> 
            
            </DivProyecto>
            <Boton to={slug}>More info...</Boton>
            {/* </div>
            
            <div
                css={css`
                    padding-bottom: 3rem;
                `}
            >
                <h3
                    css={css`
                        //font-size: 2rem;
                        text-align: center;
                        color:#fff;
                    `}
                >
                    {titulo}</h3>
                {/* <p>{contenido}</p> */}

            </div> 


        </div>

     );
}
 
export default ProyectoPreview;