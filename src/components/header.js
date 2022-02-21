import React from 'react';
import Navegacion from './nav'
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/react'

import useScroll from '../hooks/useScroll';


const EnlaceHome = styled(Link)`
    color: #FFF;
    text-align: center;
    text-decoration: none;
    font-size: 1rem;
    @media (min-width: 768px){
        font-size:2.4rem}
        
        `; 





const Header = () => {
    
    const scroll = useScroll();
    
    const divHeader = {
        position:`fixed`
    }
    
    // const divHeader = {
    //     position: (scroll.currentScrollY>window.innerHeight) ? 'fixed' : 'absolute' 
    //  }
    
    
    return ( 
        <header
            css={css`
                padding: 1rem;
                position: relative;
                padding: 2rem;
                z-index: 5;
                @media (min-width: 768px){
                    padding:5rem}
            `}
        >
        <nav style={divHeader} css={css`
            
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
                        `}> WEBS<span css={css`color:red`}>UW</span> </h1>
                    </EnlaceHome>


                <Navegacion />


                

            </div>
        </nav>
        </header>
    );
}
 
export default Header;