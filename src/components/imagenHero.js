import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import useScroll from '../hooks/useScroll';
import scrollTo from 'gatsby-plugin-smoothscroll';
import StyledBackgroundSection from "../components/Background";
import BackgroundImage from 'gatsby-background-image';
import { StaticImage } from "gatsby-plugin-image"
import { Base } from './Base';




//const ImageBackground = styled(BackgroundImage)
// const ImageBackground = styled.div`  
//     height:100vh;
//     position: relative;
//     overflow: hidden;
//     /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#959595+0,010101+0,0a0a0a+53,ff3838+87,1b0100+100 */
//     background: rgb(149,149,149); /* Old browsers */
//     background: -moz-linear-gradient(left,  rgba(149,149,149,1) 0%, rgba(1,1,1,1) 0%, rgba(10,10,10,1) 53%, rgba(255,56,56,1) 87%, rgba(27,1,0,1) 100%); /* FF3.6-15 */
//     background: -webkit-linear-gradient(left,  rgba(149,149,149,1) 0%,rgba(1,1,1,1) 0%,rgba(10,10,10,1) 53%,rgba(255,56,56,1) 87%,rgba(27,1,0,1) 100%); /* Chrome10-25,Safari5.1-6 */
//     background: linear-gradient(to right,  rgba(149,149,149,1) 0%,rgba(1,1,1,1) 0%,rgba(10,10,10,1) 53%,rgba(255,56,56,1) 87%,rgba(27,1,0,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
//     filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#959595', endColorstr='#1b0100',GradientType=1 ); /* IE6-9 */

    
    
// `;

// const cambiocolor = keyframes
// `
//     0% { 

//      }
//     50% { 

//     }
//     100% { 
        
//      }
    
// }
// `

const Content = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    display:flex;
    justify-content: left;
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
    /* align-content:center; */
    /* text-align: center; */
    position: absolute;
    border-radius: 2rem;
    color: transparent;
    /* border: 1px solid #000; */
    padding: 2rem 2rem;
    background: transparent;
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
    /* background: rgb(255,255,255); Old browsers */
    /* background: -moz-linear-gradient(left,  rgba(255,255,255,1) 0%, rgba(246,246,246,1) 26%, rgba(237,237,237,1) 100%); FF3.6-15 */
    /* background: -webkit-linear-gradient(left,  rgba(255,255,255,1) 0%,rgba(246,246,246,1) 26%,rgba(237,237,237,1) 100%); Chrome10-25,Safari5.1-6 */
    /* background: linear-gradient(to right,  rgba(255,255,255,1) 0%,rgba(246,246,246,1) 26%,rgba(237,237,237,1) 100%); W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    /* filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#ededed',GradientType=1 ); IE6-9 */
    
`;

const LateralDiv = styled.div`

    color: #000;   
    /* position: relative; */
    display: flex;
    flex-direction:column !important;
    justify-content: left;
    align-items: center;
    padding:3rem;
    @media(min-width: 768px) {
        flex-direction: row;
    }
    
`;

const LinkBoton = styled.button`
    -webkit-border-radius: 28;
    -moz-border-radius: 28;
    border-radius: 28px;
    border:none;
    color: #fff;
    background: transparent;
    padding: 0.2rem 0.5rem;
    text-decoration: none;
    font-size: 1.8rem;
    filter: blur(1px);
    
    @media(min-width:768px){
        font-size: 3rem;
        padding:3rem 3rem;
    }


&:hover {
  filter: blur(0);
  color: #fff;
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


const Logo = styled(BackgroundImage)`
    display: flex;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    border: 3px solid white;
    height: 15vh;
    width: 80%;
    background-size: contain;
    @media(min-width:768px){
    height: 15vh;
    width: 60vh;
    }

`;

const Titulo = styled.div`
    display: flex;
    position: absolute;
    margin-right: auto;
    margin-left: auto;
    left: 0;
    right: 0;
    bottom: 0;
    border: 3px solid white;
    height: 15vh;
    width: 80%;
    background-size: contain;
    @media(min-width:768px){
    height: 15vh;
    width: 60vh;
    }

`




const ImagenHero = ({children}) => {

    const data = useStaticQuery(
        graphql`
        query MyQuery3 {
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
        // <ImageBackground css={css`
        //     animation: ${cambiocolor} 10s infinite;
        // `}> 
        <StyledBackgroundSection>

            <Content > 

                <Logo
                    tag='section'  
                    
                    alt='hero' 
                    fluid={imageData} 
                    fadeIn="soft"
                    >
                         {children}
                 
                </Logo>  
                <Titulo>
                    
                </Titulo>


               


                    
                
            
                <TextoImagen  style={divMov}>
                    
                    {/* <h1>WEBS
                        <span css={css`color:red`}>UW</span>
                    </h1>
                    <p>Turn ideas into
                        {<span css={css`color:red`}> unique webs</span>}
                    </p> */}
                    <LateralDiv>
                        <Boton>
                            <LinkBoton onClick={() => scrollTo('#servicios', 'center')}>
                                Tools
                            </LinkBoton>
                        </Boton>
                        <Boton>
                            <LinkBoton onClick={() => scrollTo('#proyectos', 'center')}>
                                Works
                            </LinkBoton>
                        </Boton>
                        <Boton>
                            <LinkBoton onClick={() => scrollTo('#contacto', 'center')}>
                                Contact
                            </LinkBoton>
                        </Boton>
                    
                    </LateralDiv>
                    
                </TextoImagen>
                
            </Content>
            
        </StyledBackgroundSection>
            /* <TextoImagen2 style={divMov2}>
                        <Lapis />
                </TextoImagen2> */

            /* <Overlay></Overlay> */

        /* </ImageBackground> */
        
     );
}
 
export default ImagenHero;