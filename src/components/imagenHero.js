import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import useScroll from '../hooks/useScroll';
import scrollTo from 'gatsby-plugin-smoothscroll';

import BackgroundImage from 'gatsby-background-image';
import { StaticImage } from "gatsby-plugin-image"

import Header from './header';
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import MouseParticles from "react-mouse-particles";

import BackgroundHero from '../components/Background';


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

const TextoImagen = styled.div`

    position: absolute;
    bottom: 7%;
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
            bottom: auto;
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
    
`;

const LateralDiv = styled.div`

    color: #000;   
    /* position: relative; */
    display: flex;
    flex-direction:column !important;
    justify-content: left;
    align-items: center;
    padding:3rem;
    margin-bottom: 10vh;
    @media (min-width: 768px){
        margin-bottom: 20vh;
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
    /* filter: blur(1px); */
    font-weight: 200;
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
    z-index:99;
    height: 15vh;
    width: 80%;
    background-size: contain;
    @media(min-width:768px){
    height: 15vh;
    width: 60vh;
    }

`;

const Titulo = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    margin-top: auto;
    
    left: 0;
    right: 0;
    bottom: 0;
    top:0;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    margin-bottom: 20vh;
    @media (min-width: 768px){
        margin-bottom: 20vh;}  
`



const UniqueWeb = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    margin-top: auto;
    margin-bottom: auto;
    left: 0;
    right: 0;
    top:5%;
    text-align: center;
    width:15%;
    font-size: 2.3rem;
    font-family: 'Montserrat', sans-serif;
    
    
    
    
    @media(min-width:768px){
        top:7%;
        width:5%;
        font-size: 3.3rem;
        
    }

`


const LinkBoton2 = styled.button`
    -webkit-border-radius: 28;
    -moz-border-radius: 28;
    border-radius: 28px;
    border:none;
    color: #000;
    background: #fff;
    padding: 1rem 2.5rem 0.5rem 2.5rem;
    text-decoration: none;
    font-size: 1.4rem;
    
    
    @media(min-width:768px){
        font-size: 1.8rem;
        padding:1.2rem 4rem 0.8rem 4rem;
    }


&:hover {
  
    color: #fff;
    background: #000;
    text-decoration: none;
}

`;

const Boton2 = styled.nav`
    position: relative;
    margin: 0.1rem;
    padding: 0.2rem;
    border-radius: 10px;
    text-decoration: none;

`;



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
        
        <BackgroundHero css={css`
            filter:grayscale(70%);
            
        `}
        >

            <Content
                id='hero'> 
            
                <UniqueWeb style={divMov}>
                    <h4>Unique webs</h4>
                </UniqueWeb>
                <Header />
                {/* <MouseParallaxContainer>
                    <MouseParallaxChild factorX={0.05} factorY={0.10} > */}
                    <Titulo style={divMov}>
                    
                    <MouseParticles
                      g={-1}
                      num={1}
                      radius={6}
                      life={1.3}
                      v={0.7}
                      color={["#000", "#fff", "#00f"]}
                      alpha={0.2}
                      level={6}
                    />
                    <Logo
                        tag='section'  
                        alt='hero' 
                        fluid={imageData} 
                        fadeIn="soft"
                        
                        >
                             {children}
                    </Logo> 
                    {/* </MouseParallaxChild>  
                    </MouseParallaxContainer> */}
                     
                    <p>Front-end Developer</p>
                    <Boton2>
                        <LinkBoton2 onClick={() => scrollTo('#contacto', 'center')}>
                            CONTACT ME
                        </LinkBoton2>
                    </Boton2>
                </Titulo>


               


                    
                
            
                <TextoImagen  style={divMov}>
                    
                    <LateralDiv>
                        <Boton>
                            <LinkBoton onClick={() => scrollTo('#servicios', 'center')}>
                                Services
                            </LinkBoton>
                        </Boton>
                        <Boton>
                            <LinkBoton onClick={() => scrollTo('#proyectos', 'center')}>
                                Works
                            </LinkBoton>
                        </Boton>
                        <Boton>
                            <LinkBoton onClick={() => scrollTo('#tools', 'center')}>
                                Tools
                            </LinkBoton>
                        </Boton>
                    
                    </LateralDiv>
                    
                </TextoImagen>
               
            </Content>
            
        </BackgroundHero>
            
        
     );
}
 
export default ImagenHero;