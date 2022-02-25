import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';
import { css } from '@emotion/react';

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    padding-bottom: 0.5rem;
    @media (min-width: 768px) {
        padding-bottom: 0;
    }
`;

const Icono = styled.i`
    margin:1rem;
    color:white;
    @media (min-width: 768px) {
        margin:2rem;
    }

`

const NavLink = styled(Link)`
    color: #fff;
    font-size: 1.6rem;
    font-weight:700;
    line-height: 1rem;
    text-decoration: none;
    
    padding:1rem;
    //font-family: 'PT Sans', sans-serif;
    margin-right:1rem;

    &::last-of-type{
        margin-right: 0;
    }

    &.pagina-actual {
        border-bottom: 2px solid #000;
    }

`;

const Navegacion = () => {
    return ( 
        <Nav>
            {/* <NavLink 
                to={'/'}
                activeClassName="pagina-actual"
            >
                @
            </NavLink>
            <NavLink 
                to={'/nosotros'}
                activeClassName="pagina-actual"
            >
                @
            </NavLink> */}
            <a 
                className="navbar__link" 
                href="https://www.instagram.com/mi_cro_mon_di">
                    <Icono
                        className="fab fa-instagram fa-lg"
                        >
                    </Icono>
                    
            </a>
            <a 
                className="navbar__link" 
                href="#">
                    <Icono 
                        className="fab fa-twitter fa-lg"
                        >
                    </Icono>
                    
            </a>
            <a 
                className="navbar__link" 
                href="#">
                    <Icono
                        className="icono fab fa-linkedin-in fa-lg"
                        >
                    </Icono>
                    
            </a>
            
        </Nav>
     );
}
 
export default Navegacion;