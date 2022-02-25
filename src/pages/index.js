import React from "react"


import { css, keyframes } from "@emotion/react"
import styled from "@emotion/styled"


import Layout from "../components/layout"
import ImagenHero from "../components/imagenHero"
import ContenidoInicio from "../components/inicio"

import useProyecto from "../hooks/useProyecto"
import ProyectoPreview from "../components/proyectoPreview"
import useLogo from "../hooks/useLogo"
import { Services } from "../components/Services"

import "swiper/css/bundle";
import LogoPreview from "../components/logoPreview"

import { graphql, useStaticQuery } from 'gatsby'; 
import Contacto from "../components/Contacto";

import useHerramientas from "../hooks/useHerramientas";
import { HerramientaPreview } from "../components/HerramientaPreview";
import BackgroundHero from "../components/Background";





const ListadoProyectos = styled.ul`
  max-width: 1200px;
  height: 100%;
  width: 95%;
  margin: 4rem auto 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns:repeat(3,1fr);
    grid-template-rows: 1fr;
    gap: 3rem;
    align-items: flex-start;
  }

`;

const H2 = styled.h2`

            
            font-size: 3.5rem;
            margin: 3.5rem auto;
            
            text-align: center;

            @media (min-width: 768px) {
              font-size: 5rem;
              margin: 5rem auto;
              
            }
          
`;

const ListadoHerramientas = styled.ul`
  
  height: 100%;
  width: 95%;
  margin: 4rem auto 0 auto;
  display: grid;
  grid-template-columns:repeat(3,1fr);
  grid-template-rows: 1fr;
  gap: 0.5rem;
  align-items: flex-start;

  @media (min-width: 768px) {
    max-width: 1200px;
    display: grid;
    grid-template-columns:repeat(4,1fr);
    grid-template-rows: 1fr;
    gap: 3rem;
    align-items: flex-start;
  }

`;

const DiagonalBox = styled.div`

  position: relative;
  transform: skewY(-5deg);
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media(min-width:768px){
    
  }
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#0a0a09+0,000000+100 */
  /* background: rgb(10,10,9); Old browsers */
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#ffffff+0,828282+100 */
  /* background: rgb(255,255,255); Old browsers */
  /* background: -moz-linear-gradient(-45deg,  rgba(255,255,255,1) 0%, rgba(130,130,130,1) 100%); FF3.6-15 */
  /* background: -webkit-linear-gradient(-45deg,  rgba(255,255,255,1) 0%,rgba(130,130,130,1) 100%); Chrome10-25,Safari5.1-6 */
  /* background: linear-gradient(135deg,  rgba(255,255,255,1) 0%,rgba(130,130,130,1) 100%); W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  /* filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#828282',GradientType=1 ); IE6-9 fallback on horizontal gradient */

  

  &:before{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }

  

`;


const Content = styled.div`

  position: relative;
  transform: skewY(6deg);
  max-width: 1200px;
  /* margin: 4rem auto;
  padding: 4rem auto; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const IndexPage = () => {

  const proyectos = useProyecto();
  const logos = useLogo();
  const herramientas = useHerramientas();

  console.log(herramientas);
  
  const resultado = useStaticQuery( graphql`
    query{
        allDatoCmsPagina(filter: {slug: {eq: "about"}}) {
          nodes {
            titulo
            contenido
            imagen {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
      }
      `);

      const typewriter = keyframes`
      from { width: 0 },
      to { width: 45% }
  `
  
  const blinkCursor = keyframes`
      from, to { border-color: transparent},
      50% { border-color: white; }  
  ` 
      
  return (
    <>
    
    <ImagenHero />
      
    <Layout>

    

                  <h1 css={css`
                    @media(max-width:767px){
                        color:#000;
                        margin: 3.5rem auto;
            
                        text-align: center;
                        
                    }
                    @media(min-width:768px){
                        color:#000;
                        overflow: hidden;
                        white-space: nowrap;
                        font-size: 5rem;
                        margin: 0rem auto 6rem auto;
                        border-right: .12em solid white;
                        letter-spacing: .0.7em;
                        text-align: center;
                        animation:

                            ${typewriter} 3s steps(40, end),
                            ${blinkCursor} .65s step-end infinite;
                        
                        
                    }
                        `} >Hi, I'm Vin</h1>
              

      <DiagonalBox>
        <BackgroundHero css={css`
            height: auto;
            clip-path: polygon(
            0 0, /* left top */
            100% 0, /* right top */ 
            100% 100%, /* right bottom */
            0 100% /* left bottom */);


            @media(min-width:768px){
            clip-path: polygon(
            0 0, /* left top */
            100% 0, /* right top */ 
            100% 100%, /* right bottom */
            0 100% /* left bottom */);
            }
    
  
            
          `}>
          <Content>
            <ContenidoInicio/>
          </Content>
          </BackgroundHero>
      </DiagonalBox> 
      

     

      {/* SERVICIOS */}
      <H2 
            id='servicios'  
          >
            Services
      </H2> 
      
      
      

      <DiagonalBox>
        <BackgroundHero css={css`
            height: auto;
            
            clip-path: polygon(
            0 0, /* left top */
            100% 0, /* right top */ 
            100% 100%, /* right bottom */
            0 100% /* left bottom */);


            @media(min-width:768px){
            clip-path: polygon(
            0 0, /* left top */
            100% 0, /* right top */ 
            100% 100%, /* right bottom */
            0 100% /* left bottom */);
            }
    
  
            
          `}>
          <Content>
            <Services/>
          </Content>
          </BackgroundHero>
      </DiagonalBox>
      


      {/* PROYECTOS */}
      
             
          <H2
            id='proyectos'
            >
            Proyects
          </H2>
          
      
      <DiagonalBox>
        <BackgroundHero css={css`
            height: auto;
            clip-path: polygon(
            0 0, /* left top */
            100% 0, /* right top */ 
            100% 100%, /* right bottom */
            0 100% /* left bottom */);


            @media(min-width:768px){
            clip-path: polygon(
            0 0, /* left top */
            100% 0, /* right top */ 
            100% 100%, /* right bottom */
            0 100% /* left bottom */);
            }
    
  
            
          `}>
          <Content>
          

           

          <ListadoProyectos css={css`
            width: 80vw;
            display: flex;
            align-items: center;
            justify-content: center;
            margin:8rem;
          `}>
            { proyectos.map( proyecto =>(
              <ProyectoPreview 

                key={ proyecto.id }
                proyecto={proyecto} 
              />
            )) }
          </ListadoProyectos>
            
          </Content>
          </BackgroundHero>
      </DiagonalBox> 

      
            {/* LOGOS */}
            <H2
                id='logos'
                >
                  Logos
            </H2>
          


      <DiagonalBox>
        <BackgroundHero css={css`
            height: auto;
            clip-path: polygon(
            0 0, /* left top */
            100% 0, /* right top */ 
            100% 100%, /* right bottom */
            0 100% /* left bottom */);


            @media(min-width:768px){
            clip-path: polygon(
            0 0, /* left top */
            100% 0, /* right top */ 
            100% 100%, /* right bottom */
            0 100% /* left bottom */);
            }
    
  
            
          `}>
          <Content>
          

          
          <ListadoProyectos css={css`
            width: 80vw;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 8rem;
          `}>
          
            { logos.map( logo =>(
              <LogoPreview
                key={ logo.id }
                logo={logo}
              />
              ))}
          </ListadoProyectos> 

          </Content>
          </BackgroundHero>
      </DiagonalBox> 

      <H2 
          id='tools'
          >  
            Tools
        </H2>
        <DiagonalBox>
        <BackgroundHero css={css`
            height: auto;
            clip-path: polygon(
            0 0, /* left top */
            100% 0, /* right top */ 
            100% 100%, /* right bottom */
            0 100% /* left bottom */);


            @media(min-width:768px){
            clip-path: polygon(
            0 0, /* left top */
            100% 0, /* right top */ 
            100% 100%, /* right bottom */
            0 100% /* left bottom */);
            }
    
  
            
          `}>
          <Content>
        
        
        <ListadoHerramientas css={css`
          width: 80vw;
          
          margin: 8rem;
         `}>
         
           { herramientas.map( herramienta =>(
             <HerramientaPreview
                key={ herramienta.slug }
                herramienta={herramienta}
             />
             ))}
         </ListadoHerramientas> 
         </Content>
          </BackgroundHero>
      </DiagonalBox> 
    
    
            {/* CONTACTO */}
        <H2 
            id='contacto'
            >
            Contact
        </H2>

        <DiagonalBox>
        <BackgroundHero css={css`
            height: auto;
            clip-path: polygon(
            0 0, /* left top */
            100% 0, /* right top */ 
            100% 100%, /* right bottom */
            0 100% /* left bottom */);
            

            @media(min-width:768px){
            clip-path: polygon(
            0 0, /* left top */
            100% 0, /* right top */ 
            100% 100%, /* right bottom */
            0 100% /* left bottom */);
            }
    
  
            
          `}>
          <Content>

      
            <Contacto/>
          </Content>
        </BackgroundHero>
      </DiagonalBox> 

    </Layout>
    
    </>
  )
}

export default IndexPage
