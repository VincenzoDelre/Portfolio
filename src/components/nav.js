import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    padding-bottom: 0.5rem;
    @media (min-width: 768px) {
        padding-bottom: 0;
    }
`;

const NavLink = styled(Link)`
    color: #000;
    font-size: 1.6rem;
    font-weight:700;
    line-height: 1rem;
    text-decoration: none;
    
    padding:1rem;
    font-family: 'PT Sans', sans-serif;
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
            <NavLink 
                to={'/'}
                activeClassName="pagina-actual"
            >
                Main
            </NavLink>
            <NavLink 
                to={'/nosotros'}
                activeClassName="pagina-actual"
            >
                About me
            </NavLink>
        </Nav>
     );
}
 
export default Navegacion;