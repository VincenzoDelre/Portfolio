import React from 'react';
import { css } from '@emotion/react'
import Navegacion from './nav'
import { Link } from 'gatsby';
import styled from '@emotion/styled';


const EnlaceHome = styled(Link)`
    color: #000;
    text-align: center;
    text-decoration: none;
    
    font-size: 1rem;
    @media (min-width: 768px){
        font-size:2.4rem}
        
`;

const Footer = ({title}) => {

    const year = new Date().getFullYear();
    return ( 
        <>
        <footer css={css`
                
                position: relative;
                padding-top: 3rem;
                z-index: 5;
                
                @media (min-width: 768px){
                    padding-top:5rem;
                }
            `}>
        <nav css={css`
            
            top: 0;
            left: 0;
            background-color: #fff;
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
                    <EnlaceHome
                        to='/'
                        
                    >
                        <h1 css={css`
                            margin:1rem;
                            color: #000;
                        `}> WEBS<span css={css`color:red`}>WU</span> </h1>
                    </EnlaceHome>


                <Navegacion />


                

            </div>
        </nav>
        <p
            css={css`
                text-align:center;
                color: #aaa;
                background-color: #fff;
                margin: 0;
                padding: 1rem;
            `}
        >{title}. All rights reserved {year} &copy;</p>  
        </footer>
        
        </>
    );
}
 
export default Footer;