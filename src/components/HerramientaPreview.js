import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { css } from '@emotion/react';
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

export const HerramientaPreview = ( {herramienta} ) => {

    const { titulo, imagen} = herramienta;
    const image = getImage(imagen);

    return (
        
        <MouseParallaxContainer>
        <MouseParallaxChild factorX={0.05} factorY={0.05} >
        <div css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        `}>

            <div>
                <h4>{titulo}</h4>
            </div>
            <div>
                <GatsbyImage 
                    image={image}              
                    alt='tool' 
                    
                />

            </div>
            
        </div>
        </MouseParallaxChild>  
        </MouseParallaxContainer>
    )
}
