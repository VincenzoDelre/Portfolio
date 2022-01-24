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

const DivLogo = styled.div`
    
    width: 100%;
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
                
            `}>

            <div
                css={css`
                border:2px solid #e1e1e1;
                border-radius: 50%;
                margin-bottom: 2rem;
                
                @media(min-width:768px){
                    
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

                `}/> 
            </DivLogo>
            </div>
          
            <div
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
                        font-size: 2rem;
                        text-align: center;
                    `}
                >
                    {titulo}</h3>
                

                <Boton to={slug}>Más info...</Boton>
            </div>


        </div>

     );
}
 
export default LogoPreview;