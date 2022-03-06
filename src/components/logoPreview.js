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

const DivLogo = styled.div`
    
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
`;

const LogoPreview = ({logo}) => {

    const {titulo, imagen, slug} = logo;
    //console.log(slug)
    const image = getImage(imagen);

    return ( 
        <div
            css={css`
                
                margin-bottom: 2rem;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                padding: 1rem;
            `}>

            <div
                css={css`
                /* border:2px solid #e1e1e1; */
                border-radius: 50%;
                margin-bottom: 2rem;
                
                @media(min-width:768px){
                    height: 25vh;
                    width: 25vh;
                }   
            `}>
            <DivLogo>
                <GatsbyImage 
                image={image} 
                alt='alt per favor' 
                css={css`
                object-fit: cover;
                border-radius: 50%;
                padding:1rem;
                width: 100%;
                height: 100%;
                filter: grayscale(80%);
                    &:hover{
                        filter:grayscale(0%);
                    
                        -webkit-animation: heartbeat 1.5s ease-in-out infinite both;
	                    animation: heartbeat 1.5s ease-in-out infinite both;

                        @-webkit-keyframes heartbeat {
                        from {
                          -webkit-transform: scale(1);
                                  transform: scale(1);
                          -webkit-transform-origin: center center;
                                  transform-origin: center center;
                          -webkit-animation-timing-function: ease-out;
                                  animation-timing-function: ease-out;
                              }
                              10% {
                                -webkit-transform: scale(0.91);
                                        transform: scale(0.91);
                                -webkit-animation-timing-function: ease-in;
                                        animation-timing-function: ease-in;
                              }
                              17% {
                                -webkit-transform: scale(0.98);
                                        transform: scale(0.98);
                                -webkit-animation-timing-function: ease-out;
                                        animation-timing-function: ease-out;
                              }
                              33% {
                                -webkit-transform: scale(0.87);
                                        transform: scale(0.87);
                                -webkit-animation-timing-function: ease-in;
                                        animation-timing-function: ease-in;
                              }
                              45% {
                                -webkit-transform: scale(1);
                                        transform: scale(1);
                                -webkit-animation-timing-function: ease-out;
                                        animation-timing-function: ease-out;
                              }
                            }
                            @keyframes heartbeat {
                              from {
                                -webkit-transform: scale(1);
                                        transform: scale(1);
                                -webkit-transform-origin: center center;
                                        transform-origin: center center;
                                -webkit-animation-timing-function: ease-out;
                                        animation-timing-function: ease-out;
                              }
                              10% {
                                -webkit-transform: scale(0.91);
                                        transform: scale(0.91);
                                -webkit-animation-timing-function: ease-in;
                                        animation-timing-function: ease-in;
                              }
                              17% {
                                -webkit-transform: scale(0.98);
                                        transform: scale(0.98);
                                -webkit-animation-timing-function: ease-out;
                                        animation-timing-function: ease-out;
                              }
                              33% {
                                -webkit-transform: scale(0.87);
                                        transform: scale(0.87);
                                -webkit-animation-timing-function: ease-in;
                                        animation-timing-function: ease-in;
                              }
                              45% {
                                -webkit-transform: scale(1);
                                        transform: scale(1);
                                -webkit-animation-timing-function: ease-out;
                                        animation-timing-function: ease-out;
                              }
                            }

                     }
                `}/> 
            </DivLogo>
            </div>
          
            {/* <div
                css={css`
                    padding-bottom: 3rem;
                    width:50%;
                    @media(min-width:768px){
                        padding-bottom: 0;
                    }
                `}
            >
                <h3
                    css={css`
                        //font-size: 2rem;
                        text-align: center;
                        color:#fff;
                    `}
                >
                    {titulo}</h3> */}
                

                <Boton to={slug}>More info...</Boton>
            {/* </div> */}


        </div>

     );
}
 
export default LogoPreview;