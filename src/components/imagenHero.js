import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
// import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import useScroll from '../hooks/useScroll';
import scrollTo from 'gatsby-plugin-smoothscroll';



//const ImageBackground = styled(BackgroundImage)
const ImageBackground = styled.div`  
    height:100vh;
    position: relative;
    overflow: hidden;
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#959595+0,010101+0,0a0a0a+53,ff3838+87,1b0100+100 */
    background: rgb(149,149,149); /* Old browsers */
    background: -moz-linear-gradient(left,  rgba(149,149,149,1) 0%, rgba(1,1,1,1) 0%, rgba(10,10,10,1) 53%, rgba(255,56,56,1) 87%, rgba(27,1,0,1) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(left,  rgba(149,149,149,1) 0%,rgba(1,1,1,1) 0%,rgba(10,10,10,1) 53%,rgba(255,56,56,1) 87%,rgba(27,1,0,1) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to right,  rgba(149,149,149,1) 0%,rgba(1,1,1,1) 0%,rgba(10,10,10,1) 53%,rgba(255,56,56,1) 87%,rgba(27,1,0,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#959595', endColorstr='#1b0100',GradientType=1 ); /* IE6-9 */

    
    
`;

const cambiocolor = keyframes`
    0% { 

     }
    50% { 

    }
    100% { 
        
     }
    
}
`

const Content = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    display:flex;
    justify-content: center;
    align-items: center;
`;

// const Overlay = styled.div`
//     position: absolute;
//     top: 0;
//     right: 0;
//     left: 0;
//     bottom: 0;
//     background: #fff center no-repeat;
//     background-size: cover;
//     z-index: 0;
//     opacity: 0;
    

// `;

const TextoImagen = styled.div`
    align-content:center;
    text-align: center;
    position: absolute;
    border-radius: 2rem;
    color: #000;
    border: 5px solid #000;
    padding: 2rem 2rem;
    
    opacity: 0.6;
    z-index: 2;
    
    width: 95%;
    
    @media (min-width: 768px) {
            width: auto;
        }
    
    h1{
        font-size: 3.5rem;
        margin: 0 1rem;

        @media (min-width: 768px) {
            font-size: 7rem;
        }
    }
    p {
        font-size: 2rem;

        @media (min-width: 768px) {
            font-size: 3rem;
        }
    }
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#ffffff+0,f6f6f6+26,ededed+100;White+3D+%231 */
    background: rgb(255,255,255); /* Old browsers */
    background: -moz-linear-gradient(left,  rgba(255,255,255,1) 0%, rgba(246,246,246,1) 26%, rgba(237,237,237,1) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(left,  rgba(255,255,255,1) 0%,rgba(246,246,246,1) 26%,rgba(237,237,237,1) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to right,  rgba(255,255,255,1) 0%,rgba(246,246,246,1) 26%,rgba(237,237,237,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#ededed',GradientType=1 ); /* IE6-9 */
    
`;

const LateralDiv = styled.div`

    color: #000;   
    position: relative;
    display: flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    @media(min-width: 768px) {
        flex-direction: row;
    }
    
`;

const LinkBoton = styled.button`
    -webkit-border-radius: 28;
    -moz-border-radius: 28;
    border-radius: 28px;
    color: #ffffff;
    background: #000000;
    padding: 0.2rem 0.5rem;
    text-decoration: none;
    font-size: 1.2rem;
    @media(min-width:768px){
        font-size: 1.5rem;
        padding:0.5rem 1rem;
    }


&:hover {
  background-color: white;
  color: #000;
  text-decoration: none;
}

`;

const Boton = styled.nav`
    position: relative;
    margin: 0.1rem;
    padding: 0.2rem;
    border-radius: 10px;
    text-decoration: none;

`;

const ImagenHero = () => {

    const { image } = useStaticQuery( graphql`
        query {
            image: file(relativePath: { eq:"lineasV.jpg"}) {
                sharp:childImageSharp{
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
    `)

    //console.log(image.sharp.fluid)
    const scroll = useScroll();
    const slowScroll = scroll.currentScrollY / 2;
    const blurScroll = scroll.currentScrollY / 50;
    //console.log(scroll.goingUp)

    const divMov = {
        transform: 'translateY(' + slowScroll + 'px)',
        opacity: scroll.goingUp ? (1-(slowScroll*0.002)) : (1-(slowScroll*0.002)),
        letterSpacing: blurScroll 
    }

    const divMov2 = {
        transform: 'translate('+ (slowScroll/1.6) + 'px,' + slowScroll + 'px)',
        //transform: 'translateX(' + (slowScroll/2) + 'px)',
        opacity: scroll.goingUp ? (1-(slowScroll*0.002)) : (1-(slowScroll*0.002))
    }
    
        

    return ( 
        <ImageBackground css={css`
            animation: ${cambiocolor} 10s infinite;
        `}> 

            <Content > 

                <TextoImagen  style={divMov}>
                    <h1>WEBS
                        <span css={css`color:red`}>UW</span>
                    </h1>
                    <p>Turn ideas into
                        {<span css={css`color:red`}> unique webs</span>}
                    </p>
                    <LateralDiv>
                    <Boton>
                        <LinkBoton onClick={() => scrollTo('#servicios', 'center')}>
                            Servicios
                        </LinkBoton>
                    </Boton>
                    <Boton>
                    <LinkBoton onClick={() => scrollTo('#proyectos', 'center')}>
                    Proyectos
                    </LinkBoton>
                    </Boton>
                    <Boton>
                    <LinkBoton onClick={() => scrollTo('#contacto', 'center')}>
                    Contacto
                    </LinkBoton>
                    </Boton>
                    
                    </LateralDiv>
                </TextoImagen>
            </Content>
                
                {/* <TextoImagen2 style={divMov2}>
                        <Lapis />
                </TextoImagen2> */}

            {/* <Overlay></Overlay> */}

        </ImageBackground>
     );
}
 
export default ImagenHero;