import React from 'react';
import { css } from '@emotion/react'
import Navegacion from './nav'
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import scrollTo from 'gatsby-plugin-smoothscroll';


const EnlaceHome = styled(Link)`
    color: #000;
    text-align: center;
    text-decoration: none;
    font-size: 1rem;
    @media (min-width: 768px){
        font-size:2.4rem}
        
`;

const Logo = styled(BackgroundImage)`
    
    padding: 1rem;
    height:5rem;
    width: 7rem;
    
    
    background-size: contain;

    @media(min-width:768px){
        padding: 1rem;
        height:10rem;
        width: 14rem;
    }
        /* &:hover{
            background-color: #555;
        } */
`

const Footer = ({title, children}) => {

    const data = useStaticQuery(
        graphql`
        query MyQuery2 {
            file(relativePath: {eq: "logo.png"}) { 
                childImageSharp {
                    fluid(quality: 100, maxWidth: 1920) {
                        srcSetWebp 
                    }
                }
            }
            
          }
        `
      )

    const imageData = data.file.childImageSharp.fluid

    const year = new Date().getFullYear();
    return ( 
        <>
        <footer css={css`
                
                position: relative;
                padding-top: 3rem;
                z-index: 5;
                
                @media (min-width: 768px){
                    margin-top:5rem;
                }
            `}>
        <nav css={css`
            
            top: 0;
            left: 0;
            background-color: #000;
            width: 100%; 
                
            `}>
            
            <div
                css={css`
                    max-width: 1200px;
                    margin: 0 auto;
                    display:flex;
                    align-items: center;
                    justify-content: space-between;
                    
                `}
            
            >
                
                <Navegacion />

                <p
            css={css`
                text-align:center;
                color: #fff;
                
                margin: 0;
                padding: 1rem;
            `}
        >{title}. All rights reserved {year} &copy;</p>
                
                {/* <EnlaceHome
                    to='/'    
                > */}
                <div
                    onClick={() => scrollTo('#hero', 'center')}>

                
                    <Logo
                        tag='section'  
                        alt='hero' 
                        fluid={imageData} 
                        fadeIn="soft"
                        
                        
                        
                        >
                             {children}
                    </Logo> 
                </div>
                {/* </EnlaceHome> */}

            </div>
        </nav>
          
        </footer>
        
        </>
    );
}
 
export default Footer;