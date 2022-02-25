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

const DivHeader = styled.div`
        position:fixed;
        background-color:transparent;
        display:flex;
        flex-direction:column;
        justify-content:end;
        align-items:center;

`



const Header = () => {
    
    const scroll = useScroll();
    
    // const divHeader = {
    //     position:`fixed`,
        
    // }
    
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
            <DivHeader  css={css`

                bottom: 0;
                left: 0;
                background-color: transparent;
                margin-bottom: 20vh;`}
                > 

                <div
                    css={css`
                        max-width: 1200px;
                        margin: 0;
                        display:flex;
                        align-items: center;
                        justify-content: space-between;
                        @media (min-width: 768px){
                            margin: 2rem;}
                    `}

                > 
                        {/* <EnlaceHome
                            to='/'

                        >
                            <h1 css={css`
                                margin:1rem;
                                color: #000;
                            `}> @</h1>
                        </EnlaceHome> */}


                    <Navegacion />


                    

                </div>
            </DivHeader>
        </header>
    );
}
 
export default Header;